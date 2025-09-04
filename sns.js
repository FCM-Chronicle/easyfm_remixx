// sns.js - SNS 시스템 구현

class SNSManager {
    constructor() {
        this.posts = [];
        this.postIdCounter = 1;
        this.templates = this.initializeTemplates();
        this.lastUpdateTime = Date.now();
    }

    // 템플릿 초기화 (수정된 템플릿 사용)
    initializeTemplates() {
        return {
            // 이적 확정 템플릿
            transferConfirmed: [
                "[오피셜] {playerName}, {transferFee}에 {newTeam} 이적 확정!",
                "[오피셜] {playerName}, {transferFee}에 {newTeam} 합류!",
                "[오피셜] {playerName}, **{newTeam}**과 계약! 새로운 도전 시작!",
                "[오피셜] {playerName}, {transferFee}로 {newTeam} 이적 '충격'!",
                "[오피셜] {playerName}, **{newTeam}**과 동행!",
                "[오피셜] {playerName}, {transferFee}에 {newTeam} 이적!",
                "[오피셜] {playerName}, **{newTeam}**과 계약!",
                "[오피셜] {playerName}, {transferFee}에 {newTeam} 이적 '전격'!",
                "[오피셜] {playerName}, **{newTeam}**으로 '유턴'!",
                "[오피셜] {playerName}, {newTeam} 이적! '이변'의 주인공!",
                "HERE WE GO! {playerName}, {newTeam} 이적 확정! by 파브리치오 로마노"
            ],
            
            // 이적 루머 템플릿
            transferRumor: [
                "[이적 루머] {playerName}, {newTeam} 이적설 솔솔... {transferFee} 거론",
                "[이적설] {playerName}, {newTeam}으로 깜짝 이적하나?",
                "[이적시장] {playerName}, {newTeam} 이적 임박?",
                "[루머] {playerName}, {newTeam} '러브콜' 받았다!",
                "[이적 가십] {playerName}, {newTeam} 이적 '가능성' 제기!"
            ],

            // 경기 결과 템플릿 - 이변/충격 (약팀이 강팀을 이김)
            matchResultShocking: [
                "[경기 결과] 충격! {winTeam}이 {loseTeam}을 {score}로 격파!",
                "[경기 결과] 이변! {winTeam}, {loseTeam}을 {score}로 잡았다!",
                "[경기 결과] 믿을 수 없는 패배! {loseTeam}, {winTeam}에 {score} 패!",
                "[경기 결과] 대이변! {winTeam}, {loseTeam} 격침시키며 {score} 승리!",
                "[경기 결과] 센세이션! {winTeam}의 {loseTeam} {score} 격파!"
            ],
            
            // 경기 결과 템플릿 - 예상된 결과 (강팀이 약팀을 이김)
            matchResultExpected: [
                "[경기 결과] 예상대로! {winTeam}, {loseTeam}을 {score}로 완파!",
                "[경기 결과] 압도적인 승리! {winTeam}, {loseTeam}에 {score} 승리!",
                "[경기 결과] 순조로운 출발! {winTeam}, {loseTeam}에 {score} 승!",
                "[경기 결과] 무난한 승리! {winTeam}, {loseTeam} {score}로 제압!",
                "[경기 결과] {winTeam}, {loseTeam} 상대로 {score} 완승!"
            ],
            
            // 경기 결과 템플릿 - 일반적인 결과
            matchResultNormal: [
                "[경기 결과] {winTeam}, {loseTeam}에 {score} 승리!",
                "[경기 결과] {homeTeam}와 {awayTeam}, {score} 무승부!",
                "[경기 결과] {winTeam}, {loseTeam} 꺾고 귀중한 승점 3점 획득!",
                "[경기 결과] {winTeam}, {loseTeam} 상대로 {score} 승리!",
                "[경기 결과] {winTeam}이 {loseTeam}을 {score}로 이겼습니다!"
            ],

            // 무승부 - 충격적인 결과 (강팀이 약팀과 비김)
            matchResultDrawShocking: [
                "[경기 결과] 충격적인 무승부! {strongTeam}, {weakTeam}과 {score} 무승부!",
                "[경기 결과] 이변! {strongTeam}, {weakTeam}에 발목 잡혀 {score} 무승부!",
                "[경기 결과] {strongTeam}, {weakTeam} 상대로 {score} 무승부... 충격!"
            ]
        };
    }

   // SNS generateMatchPost 함수에 디버깅 추가
generateMatchPost(matchData) {
    console.log('=== SNS generateMatchPost 시작 ===');
    console.log('받은 matchData:', matchData);
    console.log('gameData:', gameData);
    
    if (!matchData || !gameData) {
        console.log('matchData 또는 gameData가 없음');
        return;
    }

    const homeTeam = matchData.homeTeam;
    const awayTeam = matchData.awayTeam;
    const homeScore = matchData.homeScore;
    const awayScore = matchData.awayScore;
    const score = `${homeScore}-${awayScore}`;

    console.log('팀 정보:', {
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        score
    });

    // 팀 전력 차이 계산
    const homeRating = this.calculateTeamRating(homeTeam);
    const awayRating = this.calculateTeamRating(awayTeam);
    const strengthDiff = Math.abs(homeRating - awayRating);
    
    console.log('레이팅 정보:', {
        homeRating,
        awayRating,
        strengthDiff
    });

    let template;
    let templateData = {};

    if (homeScore === awayScore) {
        // 무승부 처리
        console.log('무승부 처리');
        if (strengthDiff > 10) {
            template = this.getRandomTemplate('matchResultDrawShocking');
            templateData = {
                strongTeam: homeRating > awayRating ? this.getTeamName(homeTeam) : this.getTeamName(awayTeam),
                weakTeam: homeRating < awayRating ? this.getTeamName(homeTeam) : this.getTeamName(awayTeam),
                score: score
            };
        } else {
            template = this.getRandomTemplate('matchResultNormal');
            templateData = {
                homeTeam: this.getTeamName(homeTeam),
                awayTeam: this.getTeamName(awayTeam),
                score: score
            };
        }
    } else {
        // 승부가 결정된 경우만 winTeam/loseTeam 계산
        const winTeam = homeScore > awayScore ? homeTeam : awayTeam;
        const loseTeam = homeScore > awayScore ? awayTeam : homeTeam;
        const winnerRating = homeScore > awayScore ? homeRating : awayRating;
        const loserRating = homeScore > awayScore ? awayRating : homeRating;
        
        console.log('승부 결정:', {
            winTeam,
            loseTeam,
            winnerRating,
            loserRating
        });

        // 팀 이름 변환 테스트
        const winTeamName = this.getTeamName(winTeam);
        const loseTeamName = this.getTeamName(loseTeam);
        const homeTeamName = this.getTeamName(homeTeam);
        const awayTeamName = this.getTeamName(awayTeam);

        console.log('팀 이름 변환:', {
            winTeam: winTeam + ' -> ' + winTeamName,
            loseTeam: loseTeam + ' -> ' + loseTeamName,
            homeTeam: homeTeam + ' -> ' + homeTeamName,
            awayTeam: awayTeam + ' -> ' + awayTeamName
        });
        
        // 기본 템플릿 데이터 (모든 경우에 공통)
        templateData = {
            winTeam: winTeamName,
            loseTeam: loseTeamName,
            homeTeam: homeTeamName,
            awayTeam: awayTeamName,
            score: score
        };

        console.log('templateData 생성:', templateData);

        // 이변 여부 판단: 약한 팀이 강한 팀을 이겼는가?
        const isUpset = winnerRating < loserRating;
        
        console.log('이변 판단:', {
            isUpset,
            strengthDiff
        });

        if (isUpset && strengthDiff > 10) {
            // 이변! 약팀이 강팀을 이김
            template = this.getRandomTemplate('matchResultShocking');
            console.log('템플릿: 이변');
        } else if (!isUpset && strengthDiff > 15) {
            // 예상된 결과: 강팀이 약팀을 큰 차이로 이김
            template = this.getRandomTemplate('matchResultExpected');
            console.log('템플릿: 예상된 결과');
        } else {
            // 일반적인 결과
            template = this.getRandomTemplate('matchResultNormal');
            console.log('템플릿: 일반');
        }
    }

    console.log('선택된 템플릿:', template);
    console.log('템플릿 데이터:', templateData);

    // 템플릿 채우기 테스트
    const filledTemplate = this.fillTemplate(template, templateData);
    console.log('채워진 템플릿:', filledTemplate);

    // 득점자 정보 추가
    const goalScorers = this.extractGoalScorers(matchData.events);
    let goalInfo = '';
    if (goalScorers.length > 0) {
        goalInfo = `\n득점: ${goalScorers.join(', ')}`;
    }

    // 해시태그 생성
    const hashtags = this.generateHashtags(homeTeam, awayTeam, matchData);

    const post = {
        id: this.postIdCounter++,
        type: 'match_result',
        content: filledTemplate + goalInfo,
        hashtags: hashtags,
        timestamp: Date.now(),
        likes: Math.floor(Math.random() * 1000) + 100,
        comments: Math.floor(Math.random() * 200) + 10,
        shares: Math.floor(Math.random() * 50) + 5
    };

    console.log('생성된 최종 포스트:', post);
    console.log('=== SNS generateMatchPost 완료 ===');

    this.posts.unshift(post);
    return post;
}

    // 이적 포스트 생성
    generateTransferPost(playerName, fromTeam, toTeam, transferFee, isRumor = false) {
        const templateType = isRumor ? 'transferRumor' : 'transferConfirmed';
        const template = this.getRandomTemplate(templateType);
        
        const templateData = {
            playerName: playerName,
            newTeam: this.getTeamName(toTeam),
            originalTeam: this.getTeamName(fromTeam),
            transferFee: transferFee ? `${transferFee}억원` : '비공개 금액'
        };

        const hashtags = [
            `#transfer`,
            `#${this.sanitizeHashtag(fromTeam)}`,
            `#${this.sanitizeHashtag(toTeam)}`,
            `#${this.sanitizeHashtag(playerName)}`
        ];

        const post = {
            id: this.postIdCounter++,
            type: isRumor ? 'transfer_rumor' : 'transfer_confirmed',
            content: this.fillTemplate(template, templateData),
            hashtags: hashtags,
            timestamp: Date.now(),
            likes: Math.floor(Math.random() * 500) + 50,
            comments: Math.floor(Math.random() * 100) + 5,
            shares: Math.floor(Math.random() * 30) + 2
        };

        this.posts.unshift(post);
        return post;
    }

    // 랜덤 AI 소식 생성 (이적 루머 제외)
    generateRandomAINews() {
        if (Math.random() < 0.2) { // 20% 확률
            this.generateAIMatchPreview();
        }
    }

    // AI 경기 미리보기 생성
    generateAIMatchPreview() {
        // AI 팀들의 가상 경기 미리보기
        const teams = Object.keys(allTeams).filter(t => t !== gameData.selectedTeam);
        if (teams.length >= 2) {
            const team1 = teams[Math.floor(Math.random() * teams.length)];
            const team2 = teams.filter(t => t !== team1)[Math.floor(Math.random() * (teams.length - 1))];
            
            const previews = [
                `🔥 주목할 만한 경기! ${this.getTeamName(team1)} vs ${this.getTeamName(team2)} 오늘 밤 대격돌!`,
                `⚡ 빅 매치 예고! ${this.getTeamName(team1)}과 ${this.getTeamName(team2)}의 운명적 대결`,
                `🎯 클래시코! ${this.getTeamName(team1)} 대 ${this.getTeamName(team2)}, 승자는?`
            ];

            const post = {
                id: this.postIdCounter++,
                type: 'match_preview',
                content: previews[Math.floor(Math.random() * previews.length)],
                hashtags: [`#${this.sanitizeHashtag(team1)}`, `#${this.sanitizeHashtag(team2)}`, '#preview'],
                timestamp: Date.now(),
                likes: Math.floor(Math.random() * 300) + 30,
                comments: Math.floor(Math.random() * 80) + 5,
                shares: Math.floor(Math.random() * 20) + 1
            };

            this.posts.unshift(post);
        }
    }

    // 유틸리티 함수들
    getRandomTemplate(templateType) {
        const templates = this.templates[templateType];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    fillTemplate(template, data) {
        let result = template;
        Object.keys(data).forEach(key => {
            const regex = new RegExp(`{${key}}`, 'g');
            result = result.replace(regex, data[key]);
        });
        return result;
    }

    getTeamName(teamKey) {
        if (typeof teamNames !== 'undefined' && teamNames[teamKey]) {
            return teamNames[teamKey];
        }
        if (typeof allTeams !== 'undefined' && allTeams[teamKey]) {
            return teamKey.replace(/_/g, ' ');
        }
        return teamKey;
    }

    calculateTeamRating(teamKey) {
        if (teamKey === gameData.selectedTeam) {
            return window.calculateTeamRating ? window.calculateTeamRating() : 75;
        }
        return window.calculateOpponentTeamRating ? window.calculateOpponentTeamRating(teamKey) : 75;
    }

    extractGoalScorers(events) {
        if (!events) return [];
        
        return events
            .filter(event => event.type === 'goal')
            .map(event => event.scorer)
            .filter(scorer => scorer);
    }

    generateHashtags(homeTeam, awayTeam, matchData) {
        const hashtags = [
            `#${this.sanitizeHashtag(homeTeam)}`,
            `#${this.sanitizeHashtag(awayTeam)}`
        ];
        
        if (matchData.homeScore === matchData.awayScore) {
            hashtags.push('#무승부');
        } else {
            hashtags.push('#승부');
        }
        
        return hashtags;
    }

    sanitizeHashtag(text) {
        return text.replace(/[^a-zA-Z0-9가-힣]/g, '');
    }

    estimateTransferFee(player) {
        let base = 500;
        const ratingFactor = Math.pow(player.rating / 70, 2);
        base *= ratingFactor;
        
        if (player.age <= 25) base *= 1.2;
        else if (player.age >= 30) base *= 0.8;
        
        return Math.round(base * (0.8 + Math.random() * 0.4));
    }

    // SNS 피드 표시
    displayFeed(containerId = 'snsFeed', limit = 10) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        const postsToShow = this.posts.slice(0, limit);
        
        if (postsToShow.length === 0) {
            container.innerHTML = '<div class="sns-empty">아직 소식이 없습니다.</div>';
            return;
        }

        postsToShow.forEach(post => {
            const postElement = this.createPostElement(post);
            container.appendChild(postElement);
        });
    }

    createPostElement(post) {
        const postEl = document.createElement('div');
        postEl.className = `sns-post sns-post-${post.type}`;
        
        const timeAgo = this.formatTimeAgo(post.timestamp);
        
        postEl.innerHTML = `
            <div class="sns-post-content">
                ${post.content}
            </div>
            <div class="sns-post-hashtags">
                ${post.hashtags.map(tag => `<span class="hashtag">${tag}</span>`).join(' ')}
            </div>
            <div class="sns-post-footer">
                <span class="sns-time">${timeAgo}</span>
                <div class="sns-interactions">
                    <span class="sns-likes">❤️ ${post.likes}</span>
                    <span class="sns-comments">💬 ${post.comments}</span>
                    <span class="sns-shares">📤 ${post.shares}</span>
                </div>
            </div>
        `;
        
        return postEl;
    }

    formatTimeAgo(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (days > 0) return `${days}일 전`;
        if (hours > 0) return `${hours}시간 전`;
        if (minutes > 0) return `${minutes}분 전`;
        return '방금 전';
    }

    // 정기적 업데이트
    update() {
        const now = Date.now();
        if (now - this.lastUpdateTime > 300000) { // 5분마다
            this.generateRandomAINews();
            this.lastUpdateTime = now;
        }
    }

    // 게임 이벤트 연동
    onMatchEnd(matchData) {
        this.generateMatchPost(matchData);
    }

    onPlayerTransfer(playerName, fromTeam, toTeam, transferFee) {
        this.generateTransferPost(playerName, fromTeam, toTeam, transferFee, false);
    }

    // 저장/불러오기
    getSaveData() {
        return {
            posts: this.posts,
            postIdCounter: this.postIdCounter,
            lastUpdateTime: this.lastUpdateTime
        };
    }

    loadSaveData(saveData) {
        if (saveData.posts) this.posts = saveData.posts;
        if (saveData.postIdCounter) this.postIdCounter = saveData.postIdCounter;
        if (saveData.lastUpdateTime) this.lastUpdateTime = saveData.lastUpdateTime;
    }

    // 초기화
    reset() {
        this.posts = [];
        this.postIdCounter = 1;
        this.lastUpdateTime = Date.now();
    }
}

// 전역 SNS 매니저 인스턴스
const snsManager = new SNSManager();

// SNS 탭 표시 함수
function showSNSTab() {
    // SNS 피드가 표시될 컨테이너가 있는지 확인
    const feedContainer = document.getElementById('snsFeed');
    if (feedContainer && typeof snsManager !== 'undefined') {
        // 최신 피드 표시 (15개 제한)
        snsManager.displayFeed('snsFeed', 15);
    } else {
        console.log('SNS 시스템이 아직 초기화되지 않았습니다.');
    }
}

// 기존 게임과의 연동 함수들
function initializeSNSSystem() {
    // 기존 경기 종료 함수 확장
    if (typeof window.endMatch === 'function') {
        const originalEndMatch = window.endMatch;
        window.endMatch = function(matchData) {
            originalEndMatch.call(this, matchData);
            // 경기 후 SNS 포스트 생성
            setTimeout(() => {
                snsManager.onMatchEnd(matchData);
                if (document.getElementById('snsFeed')) {
                    snsManager.displayFeed();
                }
            }, 2000);
        };
    }

    // 기존 이적 함수 확장
    if (typeof window.transferSystem !== 'undefined') {
        const originalSignPlayer = window.transferSystem.signPlayer;
        window.transferSystem.signPlayer = function(player) {
            const result = originalSignPlayer.call(this, player);
            if (result.success) {
                snsManager.onPlayerTransfer(
                    player.name, 
                    player.originalTeam, 
                    gameData.selectedTeam, 
                    player.price
                );
                if (document.getElementById('snsFeed')) {
                    snsManager.displayFeed();
                }
            }
            return result;
        };
    }

    // 정기 업데이트 시작
    setInterval(() => {
        snsManager.update();
        if (document.getElementById('snsFeed')) {
            snsManager.displayFeed();
        }
    }, 60000); // 1분마다 체크
}

// 게임 저장/불러오기에 SNS 데이터 포함
function extendSaveSystem() {
    if (typeof window.gameData !== 'undefined') {
        const originalSaveGame = window.saveGame;
        if (originalSaveGame) {
            window.saveGame = function() {
                window.gameData.snsData = snsManager.getSaveData();
                originalSaveGame.call(this);
            };
        }

        const originalLoadGame = window.loadGame;
        if (originalLoadGame) {
            window.loadGame = function(event) {
                const result = originalLoadGame.call(this, event);
                if (window.gameData.snsData) {
                    snsManager.loadSaveData(window.gameData.snsData);
                }
                return result;
            };
        }
    }
}

// DOM 로드 후 초기화
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeSNSSystem();
        extendSaveSystem();
    }, 1000);
});

// 전역으로 노출
window.snsManager = snsManager;
window.showSNSTab = showSNSTab;
window.initializeSNSSystem = initializeSNSSystem;
