// endSeason.js - 승강제 시스템
// 다른 파일들의 의존성을 최소화하여 독립적으로 작동

// 시즌 종료 조건 체크
function checkSeasonEnd() {
    // 현재 리그의 모든 팀이 26경기를 완료했는지 확인 (14팀 리그에서 홈&어웨이)
    const currentLeagueTeams = Object.keys(allTeams).filter(team => 
        allTeams[team].league === gameData.currentLeague
    );
    
    const allTeamsFinished = currentLeagueTeams.every(teamKey => {
        const divisionKey = `division${gameData.currentLeague}`;
        const teamData = gameData.leagueData[divisionKey][teamKey];
        return teamData && teamData.matches >= 26;
    });
    
    if (allTeamsFinished) {
        endSeason();
    }
}

// 시즌 종료 및 승강제 처리 (기존 함수 확장)
function endSeason() {
    // === 기존 로직 유지 (호환성) ===
    // 현재 리그의 최종 순위 계산 (기존 방식)
    const divisionKey = `division${gameData.currentLeague}`;
    const currentLeagueData = gameData.leagueData[divisionKey];
    
    if (!currentLeagueData) {
        console.error('리그 데이터를 찾을 수 없습니다:', divisionKey);
        return;
    }
    
    const standings = Object.keys(currentLeagueData).map(teamKey => ({
        team: teamKey,
        ...currentLeagueData[teamKey],
        goalDiff: currentLeagueData[teamKey].goalsFor - currentLeagueData[teamKey].goalsAgainst
    })).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        return b.goalsFor - a.goalsFor;
    });
    
    const userPosition = standings.findIndex(team => team.team === gameData.selectedTeam) + 1;
    let reward = 0;
    let achievement = '';
    
    if (userPosition === 1) {
        achievement = '우승';
        reward = 1500;
    } else if (userPosition <= 4) {
        achievement = '상위권';
        reward = 1000;
    } else if (userPosition <= 12) {
        achievement = '중위권';
        reward = 500;
    } else {
        achievement = '강등권';
        reward = 200;
    }
    
    gameData.teamMoney += reward;
    
    // === 새로운 승강제 로직 추가 ===
    // 3부리그 시스템이 활성화된 경우에만 승강제 적용
    if (typeof allTeams !== 'undefined' && Object.keys(allTeams).length > 19) {
        // 리그별 상세 순위 계산
        const detailedStandings = calculateDetailedStandings();
        
        // 승강제 변동사항 계산
        const promotionRelegationData = calculatePromotionRelegationNew(detailedStandings);
        
        // 사용자 팀 승강제 결과 확인
        const userPromotionStatus = checkUserPromotionStatus(promotionRelegationData);
        
        // 승강제 적용
        applyPromotionRelegationNew(promotionRelegationData);
        
        // 추가 상금 계산 (리그별 차등)
        const additionalPrize = calculateAdditionalSeasonPrize(gameData.currentLeague, userPosition);
        if (additionalPrize > 0) {
            gameData.teamMoney += additionalPrize;
            reward += additionalPrize;
        }
        
        // 승강제 결과를 기존 메시지에 추가
        let promotionMessage = '';
        if (userPromotionStatus.status === 'promotion') {
            promotionMessage = `\n\n축하합니다! ${userPromotionStatus.newLeague}부리그 승격!`;
            gameData.currentLeague = userPromotionStatus.newLeague;
        } else if (userPromotionStatus.status === 'relegation') {
            promotionMessage = `\n\n아쉽게도 ${userPromotionStatus.newLeague}부리그 강등...`;
            gameData.currentLeague = userPromotionStatus.newLeague;
        }
        
        // 기존 메시지 + 승강제 정보
        alert(`시즌 종료!\n최종 순위: ${userPosition}위 (${achievement})\n보상: ${reward}억원${promotionMessage}`);
        
        // 다른 팀들의 승강제 현황 표시
        if (promotionRelegationData.promotions.length > 0 || promotionRelegationData.relegations.length > 0) {
            showOtherTeamsPromotionStatus(promotionRelegationData);
        }
    } else {
        // 기존 1부리그 시스템 (승강제 없음) - 기존 메시지 그대로
        alert(`시즌 종료!\n최종 순위: ${userPosition}위 (${achievement})\n보상: ${reward}억원`);
    }
    
    // === 공통 마무리 로직 ===
    // 선수 나이 증가
    if (typeof advancePlayerAges === 'function') {
        advancePlayerAges();
    }
    
    // 시즌 리셋
    if (typeof initializeLeagueData === 'function') {
        initializeLeagueData();
    }
    gameData.matchesPlayed = 0;
    
    // 새 시즌 상대 설정
    if (typeof setNextOpponent === 'function') {
        setNextOpponent();
    }
}

// === 승강제 헬퍼 함수들 ===

// 리그별 상세 순위 계산
function calculateDetailedStandings() {
    const standings = {};
    
    for (let i = 1; i <= 3; i++) {
        const divisionKey = `division${i}`;
        if (gameData.leagueData[divisionKey]) {
            standings[divisionKey] = Object.keys(gameData.leagueData[divisionKey])
                .map(teamKey => ({
                    team: teamKey,
                    ...gameData.leagueData[divisionKey][teamKey],
                    goalDiff: gameData.leagueData[divisionKey][teamKey].goalsFor - 
                              gameData.leagueData[divisionKey][teamKey].goalsAgainst
                }))
                .sort((a, b) => {
                    if (b.points !== a.points) return b.points - a.points;
                    if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
                    return b.goalsFor - a.goalsFor;
                });
        }
    }
    
    return standings;
}

// 승강제 변동사항 계산
function calculatePromotionRelegationNew(standings) {
    const changes = {
        promotions: [],
        relegations: [],
        champions: []
    };
    
    // 각 리그 우승팀
    for (let i = 1; i <= 3; i++) {
        const divisionKey = `division${i}`;
        if (standings[divisionKey] && standings[divisionKey].length > 0) {
            changes.champions.push({
                team: standings[divisionKey][0].team,
                league: i,
                title: `${i}부리그 우승`
            });
        }
    }
    
    // 1부리그 → 2부리그 강등 (하위 2팀)
    if (standings.division1 && standings.division1.length >= 2) {
        const relegated = standings.division1.slice(-2);
        relegated.forEach(team => {
            changes.relegations.push({
                team: team.team,
                from: 1,
                to: 2,
                reason: "1부리그 강등"
            });
        });
    }
    
    // 2부리그 → 1부리그 승격 (상위 2팀)
    if (standings.division2 && standings.division2.length >= 2) {
        const promoted = standings.division2.slice(0, 2);
        promoted.forEach(team => {
            changes.promotions.push({
                team: team.team,
                from: 2,
                to: 1,
                reason: "1부리그 승격"
            });
        });
    }
    
    // 2부리그 → 3부리그 강등 (하위 2팀)
    if (standings.division2 && standings.division2.length >= 2) {
        const relegated = standings.division2.slice(-2);
        relegated.forEach(team => {
            changes.relegations.push({
                team: team.team,
                from: 2,
                to: 3,
                reason: "3부리그 강등"
            });
        });
    }
    
    // 3부리그 → 2부리그 승격 (상위 2팀)
    if (standings.division3 && standings.division3.length >= 2) {
        const promoted = standings.division3.slice(0, 2);
        promoted.forEach(team => {
            changes.promotions.push({
                team: team.team,
                from: 3,
                to: 2,
                reason: "2부리그 승격"
            });
        });
    }
    
    return changes;
}

// 사용자 팀 승강제 상태 확인
function checkUserPromotionStatus(promotionRelegationData) {
    // 승격 확인
    const promotion = promotionRelegationData.promotions.find(p => p.team === gameData.selectedTeam);
    if (promotion) {
        return {
            status: 'promotion',
            newLeague: promotion.to,
            message: promotion.reason
        };
    }
    
    // 강등 확인
    const relegation = promotionRelegationData.relegations.find(r => r.team === gameData.selectedTeam);
    if (relegation) {
        return {
            status: 'relegation',
            newLeague: relegation.to,
            message: relegation.reason
        };
    }
    
    return { status: 'stay' };
}

// 승강제 적용
function applyPromotionRelegationNew(promotionRelegationData) {
    // 승격 적용
    promotionRelegationData.promotions.forEach(promotion => {
        if (allTeams[promotion.team]) {
            allTeams[promotion.team].league = promotion.to;
        }
    });
    
    // 강등 적용
    promotionRelegationData.relegations.forEach(relegation => {
        if (allTeams[relegation.team]) {
            allTeams[relegation.team].league = relegation.to;
        }
    });
}

// 추가 상금 계산 (리그별 차등)
function calculateAdditionalSeasonPrize(league, position) {
    const additionalPrizeTable = {
        1: {
            1: 500,  // 1부리그 우승 추가 상금
            2: 300,  // 준우승
            default: 0
        },
        2: {
            1: 300,  // 2부리그 우승 + 승격 보너스
            2: 200,  // 준우승 + 승격 보너스
            default: 0
        },
        3: {
            1: 200,  // 3부리그 우승 + 승격 보너스
            2: 100,  // 준우승 + 승격 보너스
            default: 0
        }
    };
    
    const leaguePrizes = additionalPrizeTable[league] || additionalPrizeTable[3];
    return leaguePrizes[position] || leaguePrizes.default;
}

// 다른 팀들의 승강제 현황 표시
function showOtherTeamsPromotionStatus(promotionRelegationData) {
    let message = '=== 승강제 현황 ===\n\n';
    
    if (promotionRelegationData.promotions.length > 0) {
        message += '승격 팀들:\n';
        promotionRelegationData.promotions.forEach(promo => {
            if (promo.team !== gameData.selectedTeam) {
                message += `- ${promo.team}: ${promo.reason}\n`;
            }
        });
        message += '\n';
    }
    
    if (promotionRelegationData.relegations.length > 0) {
        message += '강등 팀들:\n';
        promotionRelegationData.relegations.forEach(rel => {
            if (rel.team !== gameData.selectedTeam) {
                message += `- ${rel.team}: ${rel.reason}\n`;
            }
        });
        message += '\n';
    }
    
    if (promotionRelegationData.champions.length > 0) {
        message += '각 리그 우승팀:\n';
        promotionRelegationData.champions.forEach(champ => {
            message += `- ${champ.team}: ${champ.title}\n`;
        });
    }
    
    setTimeout(() => {
        alert(message);
    }, 2000); // 2초 후에 표시
}

// 전역으로 함수들 노출
window.endSeason = endSeason;
window.checkSeasonEnd = checkSeasonEnd;
window.calculatePromotionRelegationNew = calculatePromotionRelegationNew;
window.applyPromotionRelegationNew = applyPromotionRelegationNew;
