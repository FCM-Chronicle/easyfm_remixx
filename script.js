const teams = {
    tottenham: [
        { name: "손흥민", position: "FW", rating: 90, age: 31 },
        { name: "비카리오", position: "GK", rating: 82, age: 27 },
    ],
    liverpool: [
        { name: "살라", position: "FW", rating: 88, age: 31 },
        { name: "반다이크", position: "DF", rating: 90, age: 32 },
    ],
    // 다른 팀의 선수 추가
};

let money = 2000; // 기본 가진 돈 2000억
let selectedTeam = "tottenham"; // 기본 선택된 팀
let squad = []; // 사용자의 스쿼드

function selectTeam() {
    const dropdown = document.getElementById("team-dropdown");
    selectedTeam = dropdown.value;

    if (selectedTeam) {
        localStorage.setItem('selectedTeam', selectedTeam); // 팀 선택을 localStorage에 저장
        alert(`${selectedTeam} 팀이 선택되었습니다.`);
        document.getElementById("team-selection").style.display = "none";
        document.getElementById("lobby").style.display = "block";
    } else {
        alert("팀을 선택하세요.");
    }
}

function getSelectedTeam() {
    return localStorage.getItem('selectedTeam') || "tottenham"; // 기본값은 토트넘
}

function loadPlayers() {
    selectedTeam = getSelectedTeam(); // 선택된 팀 가져오기
    document.getElementById("selected-team").innerText = selectedTeam; // 선택된 팀 표시
    const playerList = document.getElementById("player-list");
    playerList.innerHTML = ""; // 기존 선수 목록 초기화

    // 이적 시장에서 사용자의 팀 제외
    const availablePlayers = Object.keys(teams)
        .filter(team => team !== selectedTeam) // 사용자의 팀 제외
        .flatMap(team => teams[team]); // 다른 팀 선수 목록 가져오기

    availablePlayers.forEach(player => {
        const price = calculatePrice(player); // 가격 계산
        const playerDiv = document.createElement("div");
        playerDiv.className = "player";
        playerDiv.innerHTML = `
            <strong>${player.name}</strong> | 포지션: ${player.position} | 능력치: ${player.rating} | 나이: ${player.age} | 가격: ${price}억
            <button onclick="transferPlayer('${player.name}', ${price})">영입</button>
        `;
        playerList.appendChild(playerDiv);
    });

    updateMoneyDisplay(); // 가진 돈 업데이트
}

function searchPlayers() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const playerList = document.getElementById("player-list");
    playerList.innerHTML = ""; // 기존 선수 목록 초기화

    // 사용자의 팀을 제외한 선수 목록 가져오기
    const availablePlayers = Object.keys(teams)
        .filter(team => team !== selectedTeam) // 사용자의 팀 제외
        .flatMap(team => teams[team]); // 다른 팀 선수 목록 가져오기

    const filteredPlayers = availablePlayers.filter(player =>
        player.name.toLowerCase().includes(searchTerm) ||
        player.position.toLowerCase().includes(searchTerm) ||
        player.age.toString().includes(searchTerm)
    );

    filteredPlayers.forEach(player => {
        const price = calculatePrice(player); // 가격 계산
        const playerDiv = document.createElement("div");
        playerDiv.className = "player";
        playerDiv.innerHTML = `
            <strong>${player.name}</strong> | 포지션: ${player.position} | 능력치: ${player.rating} | 나이: ${player.age} | 가격: ${price}억
            <button onclick="transferPlayer('${player.name}', ${price})">영입</button>
        `;
        playerList.appendChild(playerDiv);
    });
}

function loadSquad() {
    const playerList = document.getElementById("player-list");
    playerList.innerHTML = ""; // 기존 선수 목록 초기화

    // 스쿼드에 포함된 선수들만 표시
    squad.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.className = "player";
        playerDiv.innerHTML = `
            <strong>${player.name}</strong> | 포지션: ${player.position} | 능력치: ${player.rating} | 나이: ${player.age}
            <button onclick="sellPlayer('${player.name}', ${player.rating}')">팔기</button>
        `;
        playerList.appendChild(playerDiv);
    });

    updateMoneyDisplay(); // 가진 돈 업데이트
}

function calculatePrice(player) {
    let basePrice = 500; // 기본 가격 500억
    const { rating, age } = player;

    // 오버롤에 따른 가격 증가
    if (rating > 80) {
        basePrice += (rating - 80) * 100; // 오버롤 +1마다 100억 증가
    }

    // 나이에 따른 가격 감소
    if (age >= 28) {
        basePrice -= (age - 28) * 100; // 나이 +1마다 100억 감소
    }

    return basePrice;
}

// 선수 영입 함수
function transferPlayer(playerName, price) {
    if (money >= price) {
        const player = Object.keys(teams)
            .filter(team => team !== selectedTeam) // 사용자의 팀 제외
            .flatMap(team => teams[team]) // 다른 팀 선수 목록 가져오기
            .find(p => p.name === playerName); // 선수 찾기

        if (player) {
            money -= price; // 돈 차감
            squad.push(player); // 스쿼드에 추가
            alert(`${player.name} 선수를 영입했습니다! 가격: ${price}억`);
            updateMoneyDisplay(); // 가진 돈 업데이트
        }
    } else {
        alert("돈이 부족합니다!");
    }
}

// 선수 판매 함수
function sellPlayer(playerName, rating) {
    const playerIndex = squad.findIndex(p => p.name === playerName);
    if (playerIndex !== -1) {
        const player = squad[playerIndex];
        const successProbability = 100 - rating; // 100 - 오버롤
        const isSuccess = Math.random() * 100 < successProbability; // 성공 확률 계산

        if (confirm(`${player.name} 선수를 파시겠습니까?`)) {
            if (isSuccess) {
                const salePrice = calculatePrice(player); // 판매 가격
                money += salePrice; // 돈 증가
                squad.splice(playerIndex, 1); // 스쿼드에서 제거
                alert(`${player.name} 선수를 판매했습니다! 가격: ${salePrice}억`);
            } else {
                alert("판매 실패! 선수 판매가 이루어지지 않았습니다.");
            }
            updateMoneyDisplay(); // 가진 돈 업데이트
            loadSquad(); // 스쿼드 목록 업데이트
        }
    } else {
        alert("선수를 찾을 수 없습니다.");
    }
}

function updateMoneyDisplay() {
    document.getElementById("money-amount").innerText = money; // 가진 돈 표시
}

function goToSquadHub() {
    window.location.href = "squad_hub.html"; // 스쿼드 허브 페이지로 이동
}

function goToTransferMarket() {
    window.location.href = "transfer.html"; // 이적 시장 페이지로 이동
}

// 페이지 로드 시 선수 목록 불러오기
window.onload = loadPlayers;
