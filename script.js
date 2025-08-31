// 게임 데이터
let gameData = {
    selectedTeam: null,
    teamMoney: 1000, // 억원
    teamMorale: 80,
    currentSponsor: null,
    matchesPlayed: 0,
    currentOpponent: null,
    currentTactic: 'gegenpress',
    squad: {
        gk: null,
        df: [null, null, null, null],
        mf: [null, null, null],
        fw: [null, null, null]
    },
    leagueData: {},
    playerGrowthData: {},
    transferSystemData: {}
};

// 팀 이름 매핑
const teamNames = {
    tottenham: "토트넘 홋스퍼",
    liverpool: "리버풀",
    manCity: "맨체스터 시티",
    arsenal: "아스널",
    manUnited: "맨체스터 유나이티드",
    chelsea: "첼시",
    realMadrid: "레알 마드리드",
    barcelona: "바르셀로나",
    acMilan: "AC 밀란",
    inter: "인터 밀란",
    bayern: "바이에른 뮌헨",
    psg: "파리 생제르맹",
    leverkusen: "바이어 레버쿠젠",
    dortmund: "보루시아 도르트문트",
    newCastle: "뉴캐슬 유나이티드",
    asRoma: "AS 로마",
    atMadrid: "아틀레티코 마드리드",
    napoli: "나폴리",
    seryun: "𝐀𝐥𝐥 𝐓𝐢𝐦𝐞 𝐋𝐞𝐠𝐞𝐧𝐝"
};

// 팀 데이터
const teams = {
    tottenham: [
        { name: "비카리오", position: "GK", rating: 82, age: 27 },
        { name: "레길론", position: "DF", rating: 78, age: 27 },
        { name: "드라구신", position: "DF", rating: 75, age: 24 },
        { name: "손흥민", position: "FW", rating: 90, age: 31 },
        { name: "비수마", position: "MF", rating: 80, age: 28 },
        { name: "히샬리송", position: "FW", rating: 83, age: 26 },
        { name: "매디슨", position: "MF", rating: 85, age: 27 },
        { name: "우도기", position: "DF", rating: 83, age: 25 },
        { name: "그레이", position: "MF", rating: 84, age: 19 },
        { name: "베리발", position: "MF", rating: 84, age: 19 },
        { name: "베르너", position: "FW", rating: 75, age: 29 },
        { name: "로메로", position: "DF", rating: 85, age: 25 },
        { name: "솔랑케", position: "FW", rating: 83, age: 26 },
        { name: "포스터", position: "GK", rating: 70, age: 33 },
        { name: "마티스 텔", position: "FW", rating: 81, age: 19 },
        { name: "쿨루셉스키", position: "FW", rating: 84, age: 23 },
        { name: "케빈 단소", position: "DF", rating: 81, age: 26 },
        { name: "브레넌 존슨", position: "FW", rating: 84, age: 22 },
        { name: "페드로 포로", position: "DF", rating: 82, age: 24 },
        { name: "스펜스", position: "DF", rating: 76, age: 22 },
        { name: "오도베르", position: "MF", rating: 76, age: 21 },
        { name: "P. M. 사르", position: "MF", rating: 80, age: 21 },
        { name: "벤탕쿠르", position: "MF", rating: 82, age: 26 },
        { name: "데이비스", position: "DF", rating: 77, age: 30 },
        { name: "판더펜", position: "DF", rating: 84, age: 22 },
        { name: "오스틴", position: "GK", rating: 71, age: 25 },
        { name: "화이트먼", position: "GK", rating: 69, age: 23 },
        { name: "양민혁", position: "FW", rating: 85, age: 18 }
    ],
    liverpool: [
        { name: "알리송", position: "GK", rating: 89, age: 27 },
        { name: "조 고메즈", position: "DF", rating: 78, age: 26 },
        { name: "엔도", position: "MF", rating: 76, age: 25 },
        { name: "반 다이크", position: "DF", rating: 90, age: 31 },
        { name: "코나테", position: "DF", rating: 84, age: 24 },
        { name: "루이스 디아스", position: "FW", rating: 85, age: 26 },
        { name: "소보슬라이", position: "MF", rating: 83, age: 22 },
        { name: "누녜스", position: "FW", rating: 77, age: 25 },
        { name: "맥 알리스터", position: "MF", rating: 83, age: 25 },
        { name: "M. 살라", position: "FW", rating: 92, age: 31 },
        { name: "키에사", position: "FW", rating: 84, age: 25 },
        { name: "존스", position: "MF", rating: 79, age: 22 },
        { name: "각포", position: "MF", rating: 77, age: 23 },
        { name: "엘리엇", position: "MF", rating: 76, age: 20 },
        { name: "디오구 J.", position: "FW", rating: 83, age: 26 },
        { name: "치미카스", position: "DF", rating: 80, age: 27 },
        { name: "로버트슨", position: "DF", rating: 85, age: 29 },
        { name: "흐라벤베르흐", position: "MF", rating: 87, age: 21 },
        { name: "야로스", position: "GK", rating: 70, age: 23 },
        { name: "켈러허", position: "GK", rating: 77, age: 25 },
        { name: "콴사", position: "DF", rating: 71, age: 19 },
        { name: "모튼", position: "MF", rating: 69, age: 20 },
        { name: "브래들리", position: "DF", rating: 69, age: 22 },
        { name: "데이비스", position: "DF", rating: 72, age: 25 }
    ],
    manCity: [
        { name: "후벵 디아스", position: "DF", rating: 85, age: 29 },
        { name: "존 스톤스", position: "DF", rating: 82, age: 29 },
        { name: "네이선 아케", position: "DF", rating: 82, age: 24 },
        { name: "코바치치", position: "MF", rating: 81, age: 29 },
        { name: "홀란드", position: "FW", rating: 92, age: 23 },
        { name: "그릴리쉬", position: "FW", rating: 84, age: 28 },
        { name: "로드리", position: "MF", rating: 92, age: 27 },
        { name: "오르테가 모레노", position: "GK", rating: 75, age: 30 },
        { name: "귄도안", position: "MF", rating: 78, age: 32 },
        { name: "B.실바", position: "MF", rating: 87, age: 29 },
        { name: "그바르디올", position: "DF", rating: 85, age: 22 },
        { name: "아칸지", position: "DF", rating: 80, age: 28 },
        { name: "사비뉴", position: "FW", rating: 78, age: 25 },
        { name: "라얀 셰르키", position: "MF", rating: 85, age: 21 },
        { name: "마테우스 N.", position: "DF", rating: 78, age: 23 },
        { name: "에데르송 M.", position: "GK", rating: 88, age: 30 },
        { name: "후사노프", position: "DF", rating: 78, age: 21 },
        { name: "포든", position: "FW", rating: 86, age: 23 },
        { name: "리코 루이스", position: "DF", rating: 72, age: 19 },
        { name: "매카티", position: "MF", rating: 71, age: 20 },
        { name: "윌슨-에스브랜드", position: "FW", rating: 73, age: 21 },
        { name: "O.마르무시", position: "FW", rating: 85, age: 25 },
        { name: "오라일리", position: "DF", rating: 78, age: 20 }
    ],
    arsenal: [
        { name: "키어런 티어니", position: "DF", rating: 80, age: 26 },
        { name: "벤 화이트", position: "DF", rating: 82, age: 25 },
        { name: "토마스 파티", position: "MF", rating: 85, age: 30 },
        { name: "가브리엘 마갈량이스", position: "DF", rating: 83, age: 25 },
        { name: "부카요 사카", position: "FW", rating: 88, age: 22 },
        { name: "마르틴 외데고르", position: "MF", rating: 87, age: 25 },
        { name: "가브리엘 제주스", position: "FW", rating: 84, age: 26 },
        { name: "가브리엘 마르티넬리", position: "FW", rating: 86, age: 22 },
        { name: "유리언 팀버르", position: "DF", rating: 78, age: 23 },
        { name: "야쿠프 키비오르", position: "DF", rating: 76, age: 24 },
        { name: "올렉산드르 진첸코", position: "DF", rating: 81, age: 27 },
        { name: "도미야스 다케히로", position: "DF", rating: 79, age: 26 },
        { name: "레안드로 트로사르", position: "FW", rating: 80, age: 28 },
        { name: "조르지뉴", position: "MF", rating: 82, age: 31 },
        { name: "다비드 라야", position: "GK", rating: 83, age: 28 },
        { name: "미켈 메리노", position: "MF", rating: 84, age: 26 },
        { name: "카이 하베르츠", position: "FW", rating: 84, age: 24 },
        { name: "라힘 스털링", position: "FW", rating: 76, age: 29 },
        { name: "리카르도 칼라피오리", position: "DF", rating: 74, age: 22 },
        { name: "데클런 라이스", position: "MF", rating: 90, age: 24 }
    ],
    manUnited: [
        { name: "알타이 바이은드르", position: "GK", rating: 78, age: 25 },
        { name: "빅토르 린델뢰프", position: "DF", rating: 80, age: 29 },
        { name: "누사이르 마즈라위", position: "DF", rating: 82, age: 25 },
        { name: "마테이스 더 리흐트", position: "DF", rating: 85, age: 25 },
        { name: "해리 매과이어", position: "DF", rating: 82, age: 30 },
        { name: "리산드로 마르티네스", position: "DF", rating: 83, age: 25 },
        { name: "메이슨 마운트", position: "MF", rating: 84, age: 24 },
        { name: "브루노 페르난데스", position: "MF", rating: 88, age: 29 },
        { name: "라스무스 호일룬", position: "FW", rating: 74, age: 20 },
        { name: "조슈아 지르크지", position: "FW", rating: 77, age: 23 },
        { name: "티렐 말라시아", position: "DF", rating: 77, age: 24 },
        { name: "크리스티안 에릭센", position: "MF", rating: 83, age: 31 },
        { name: "레니 요로", position: "DF", rating: 82, age: 21 },
        { name: "아마드 디알로", position: "FW", rating: 82, age: 21 },
        { name: "M. 쿠냐", position: "MF", rating: 84, age: 26 },
        { name: "알레한드로 가르나초", position: "FW", rating: 76, age: 19 },
        { name: "카세미루", position: "MF", rating: 87, age: 31 },
        { name: "디오구 달로", position: "DF", rating: 81, age: 23 },
        { name: "톰 히턴", position: "GK", rating: 75, age: 36 },
        { name: "루크 쇼", position: "DF", rating: 81, age: 28 },
        { name: "앙드레 오나나", position: "GK", rating: 84, age: 27 },
        { name: "마누엘 우가르테", position: "MF", rating: 84, age: 23 },
        { name: "조니 에번스", position: "DF", rating: 72, age: 35 },
        { name: "에단 휘틀리", position: "GK", rating: 70, age: 20 },
        { name: "코비 마이누", position: "MF", rating: 82, age: 19 },
        { name: "해리 애머스", position: "DF", rating: 68, age: 21 },
        { name: "토비 콜리어", position: "DF", rating: 69, age: 22 },
        { name: "대니얼 고어", position: "GK", rating: 67, age: 22 }
    ],
    realMadrid: [
        { name: "티보 쿠르투아", position: "GK", rating: 90, age: 31 },
        { name: "다니 카르바할", position: "DF", rating: 84, age: 31 },
        { name: "에데르 밀리탕", position: "DF", rating: 87, age: 25 },
        { name: "데이비드 알라바", position: "DF", rating: 78, age: 30 },
        { name: "주드 벨링엄", position: "MF", rating: 91, age: 20 },
        { name: "에두아르도 카마빙가", position: "MF", rating: 84, age: 21 },
        { name: "비니시우스 주니오르", position: "FW", rating: 89, age: 23 },
        { name: "페데리코 발베르데", position: "MF", rating: 89, age: 25 },
        { name: "킬리안 음바페", position: "FW", rating: 93, age: 25 },
        { name: "루카 모드리치", position: "MF", rating: 88, age: 38 },
        { name: "호드리구", position: "FW", rating: 88, age: 22 },
        { name: "안드리 루닌", position: "GK", rating: 76, age: 24 },
        { name: "오렐리앵 추아메니", position: "MF", rating: 88, age: 23 },
        { name: "아르다 귈러", position: "FW", rating: 83, age: 19 },
        { name: "엔드릭", position: "FW", rating: 80, age: 18 },
        { name: "루카스 바스케스", position: "DF", rating: 77, age: 32 },
        { name: "헤수스 바예호", position: "DF", rating: 74, age: 25 },
        { name: "다니 세바요스", position: "MF", rating: 79, age: 27 },
        { name: "프란 가르시아", position: "DF", rating: 73, age: 24 },
        { name: "안토니오 뤼디거", position: "DF", rating: 90, age: 30 },
        { name: "페를랑 멘디", position: "DF", rating: 80, age: 28 },
        { name: "딘 하위선", position: "DF", rating: 83, age: 20 },
        { name: "T. A. 아놀드", position: "DF", rating: 87, age: 26 }
    ],
    barcelona: [
        { name: "테어 슈테겐", position: "GK", rating: 89, age: 31 },
        { name: "파우 쿠바르시", position: "DF", rating: 84, age: 19 },
        { name: "알레한드로 발데", position: "DF", rating: 83, age: 20 },
        { name: "로날드 아라우호", position: "DF", rating: 82, age: 24 },
        { name: "이니고 마르티네스", position: "DF", rating: 80, age: 32 },
        { name: "가비", position: "MF", rating: 83, age: 19 },
        { name: "페란 토레스", position: "FW", rating: 80, age: 23 },
        { name: "페드리", position: "MF", rating: 88, age: 20 },
        { name: "로베르트 레반도프스키", position: "FW", rating: 91, age: 38 },
        { name: "안수 파티", position: "FW", rating: 75, age: 20 },
        { name: "하피냐", position: "FW", rating: 90, age: 26 },
        { name: "이냐키 페냐", position: "GK", rating: 76, age: 23 },
        { name: "파블로 토레", position: "MF", rating: 75, age: 19 },
        { name: "안드레아스 크리스텐센", position: "DF", rating: 80, age: 27 },
        { name: "페르민 로페스", position: "MF", rating: 78, age: 23 },
        { name: "마르크 카사도", position: "DF", rating: 73, age: 21 },
        { name: "파우 빅토르", position: "DF", rating: 70, age: 21 },
        { name: "라민 야말", position: "FW", rating: 90, age: 17 },
        { name: "다니 올모", position: "MF", rating: 83, age: 25 },
        { name: "프렝키 더 용", position: "MF", rating: 86, age: 26 },
        { name: "쥘 쿤데", position: "DF", rating: 84, age: 25 },
        { name: "에리크 가르시아", position: "DF", rating: 79, age: 24 },
        { name: "보이치에흐 슈쳉스니", position: "GK", rating: 81, age: 33 }
    ],
    acMilan: [
        { name: "다비데 칼라브리아", position: "DF", rating: 80, age: 26 },
        { name: "이스마엘 벤나세르", position: "MF", rating: 82, age: 25 },
        { name: "알바로 모라타", position: "FW", rating: 85, age: 30 },
        { name: "루빈 로프터스치크", position: "MF", rating: 80, age: 28 },
        { name: "루카 요비치", position: "FW", rating: 78, age: 25 },
        { name: "하파엘 레앙", position: "FW", rating: 86, age: 24 },
        { name: "크리스천 풀리식", position: "FW", rating: 81, age: 25 },
        { name: "티자니 라인더르스", position: "MF", rating: 84, age: 20 },
        { name: "마이크 메냥", position: "GK", rating: 86, age: 27 },
        { name: "노아 오카포르", position: "DF", rating: 76, age: 22 },
        { name: "케빈 체롤리", position: "MF", rating: 74, age: 19 },
        { name: "테오 에르난데스", position: "DF", rating: 84, age: 26 },
        { name: "알렉스 히메네스", position: "DF", rating: 78, age: 33 },
        { name: "새뮤얼 추쿠에제", position: "FW", rating: 81, age: 24 },
        { name: "에메르송 로얄", position: "DF", rating: 79, age: 24 },
        { name: "피카요 토모리", position: "DF", rating: 82, age: 25 },
        { name: "알레산드로 플로렌치", position: "DF", rating: 77, age: 33 },
        { name: "말릭 티아우", position: "DF", rating: 74, age: 23 },
        { name: "유수프 포파나", position: "DF", rating: 76, age: 25 },
        { name: "스트라히냐 파블로비치", position: "DF", rating: 83, age: 24 },
        { name: "필리포 테라치아노", position: "GK", rating: 72, age: 27 },
        { name: "마테오 가비아", position: "DF", rating: 82, age: 23 },
        { name: "마르코 스포르티엘로", position: "GK", rating: 73, age: 30 },
        { name: "유누스 무사", position: "MF", rating: 78, age: 21 },
        { name: "태미 에이브러햄", position: "FW", rating: 84, age: 26 },
        { name: "로렌초 토리아니", position: "GK", rating: 71, age: 22 }
    ],
    inter: [
        { name: "얀 조머", position: "GK", rating: 84, age: 30 },
        { name: "덴젤 둠프리스", position: "DF", rating: 86, age: 26 },
        { name: "스테판 더브레이", position: "DF", rating: 82, age: 29 },
        { name: "피오트르 지엘린스키", position: "MF", rating: 80, age: 28 },
        { name: "마르코 아르나우토비치", position: "FW", rating: 78, age: 34 },
        { name: "마르쿠스 튀람", position: "FW", rating: 87, age: 25 },
        { name: "라우타로 마르티네스", position: "FW", rating: 89, age: 26 },
        { name: "호아킨 코레아", position: "FW", rating: 79, age: 29 },
        { name: "라파엘레 디 젠나로", position: "DF", rating: 76, age: 24 },
        { name: "조제프 마르티네스", position: "FW", rating: 75, age: 26 },
        { name: "프란체스코 아체르비", position: "DF", rating: 80, age: 30 },
        { name: "다비데 프라테시", position: "DF", rating: 78, age: 25 },
        { name: "테이존 뷰캐넌", position: "DF", rating: 77, age: 22 },
        { name: "하칸 찰하노글루", position: "MF", rating: 83, age: 29 },
        { name: "크리스티안 아슬라니", position: "MF", rating: 76, age: 22 },
        { name: "헨리크 미키타리안", position: "MF", rating: 84, age: 34 },
        { name: "니콜로 바렐라", position: "MF", rating: 85, age: 26 },
        { name: "뱅자맹 파바르", position: "DF", rating: 83, age: 27 },
        { name: "카를루스 아우구스투", position: "DF", rating: 75, age: 29 },
        { name: "얀 아우렐 비세크", position: "DF", rating: 73, age: 25 },
        { name: "페데리코 디마르코", position: "DF", rating: 85, age: 25 },
        { name: "마테오 다르미안", position: "DF", rating: 80, age: 33 },
        { name: "알레산드로 바스토니", position: "DF", rating: 80, age: 24 },
        { name: "실바노 스카르파", position: "FW", rating: 77, age: 26 }
    ],
    bayern: [
        { name: "마누엘 노이어", position: "GK", rating: 90, age: 37 },
        { name: "다요 우파메카노", position: "DF", rating: 83, age: 25 },
        { name: "김민재", position: "DF", rating: 87, age: 27 },
        { name: "요주아 키미히", position: "MF", rating: 88, age: 28 },
        { name: "세르주 그나브리", position: "FW", rating: 82, age: 28 },
        { name: "레온 고레츠카", position: "MF", rating: 84, age: 28 },
        { name: "해리 케인", position: "FW", rating: 92, age: 30 },
        { name: "리로이 자네", position: "FW", rating: 83, age: 28 },
        { name: "킹슬레 코망", position: "FW", rating: 82, age: 28 },
        { name: "알폰소 데이비스", position: "DF", rating: 87, age: 23 },
        { name: "주앙 팔리냐", position: "MF", rating: 80, age: 28 },
        { name: "다니엘 페레츠", position: "GK", rating: 75, age: 26 },
        { name: "다니엘 산체스", position: "DF", rating: 79, age: 28 },
        { name: "하파엘 게헤이루", position: "DF", rating: 78, age: 27 },
        { name: "마이클 올리스", position: "FW", rating: 86, age: 25 },
        { name: "다니엘 베르너", position: "FW", rating: 79, age: 28 },
        { name: "이토 히로키", position: "DF", rating: 80, age: 26 },
        { name: "타레크 부흐만", position: "MF", rating: 74, age: 22 },
        { name: "마르코 레흐너", position: "DF", rating: 73, age: 21 },
        { name: "자말 무시알라", position: "MF", rating: 88, age: 20 },
        { name: "스벤 울라이히", position: "GK", rating: 76, age: 29 },
        { name: "콘라트 라이머", position: "MF", rating: 75, age: 29 },
        { name: "요시프 스타니시치", position: "DF", rating: 73, age: 23 },
        { name: "알렉산다르 파블로비치", position: "DF", rating: 72, age: 27 }
    ],
    psg: [
        { name: "잔루이지 돈나룸마", position: "GK", rating: 89, age: 24 },
        { name: "아슈라프 하키미", position: "DF", rating: 85, age: 25 },
        { name: "프레스넬 킴펨베", position: "DF", rating: 83, age: 28 },
        { name: "마르키뉴스", position: "DF", rating: 87, age: 29 },
        { name: "파비안 루이스", position: "MF", rating: 81, age: 27 },
        { name: "곤살루 하무스", position: "FW", rating: 82, age: 27 },
        { name: "우스만 뎀벨레", position: "FW", rating: 90, age: 26 },
        { name: "데지레 두에", position: "FW", rating: 88, age: 20 },
        { name: "비티냐", position: "MF", rating: 86, age: 23 },
        { name: "이강인", position: "MF", rating: 83, age: 22 },
        { name: "뤼카 E.", position: "DF", rating: 82, age: 27 },
        { name: "세니 마율루", position: "DF", rating: 75, age: 23 },
        { name: "누누 멘데스", position: "DF", rating: 87, age: 21 },
        { name: "브래들리 바르콜라", position: "FW", rating: 84, age: 22 },
        { name: "워렌 자이르에메리", position: "MF", rating: 83, age: 18 },
        { name: "루카스 베라우두", position: "MF", rating: 76, age: 20 },
        { name: "마트베이 사포노프", position: "GK", rating: 75, age: 29 },
        { name: "크바라츠헬리아", position: "FW", rating: 90, age: 22 },
        { name: "요람 자그", position: "DF", rating: 70, age: 21 },
        { name: "이브라힘 음바예", position: "FW", rating: 73, age: 22 },
        { name: "주앙 네베스", position: "MF", rating: 78, age: 23 },
        { name: "아르나우 테나스", position: "GK", rating: 76, age: 22 }
    ],
    leverkusen: [
        { name: "루카시 흐라데츠키", position: "GK", rating: 85, age: 31 },
        { name: "피에로 인카피에", position: "DF", rating: 80, age: 25 },
        { name: "조나탕 타", position: "DF", rating: 86, age: 29 },
        { name: "요나스 호프만", position: "FW", rating: 80, age: 30 },
        { name: "로베르트 안드리히", position: "MF", rating: 79, age: 27 },
        { name: "플로리안 비르츠", position: "MF", rating: 90, age: 20 },
        { name: "마르탱 테리에", position: "FW", rating: 81, age: 27 },
        { name: "에드몽 탑소바", position: "DF", rating: 81, age: 24 },
        { name: "아르투르", position: "FW", rating: 76, age: 26 },
        { name: "파트리크 시크", position: "FW", rating: 84, age: 28 },
        { name: "마테이 코바르시", position: "DF", rating: 75, age: 23 },
        { name: "네이선 텔러", position: "FW", rating: 77, age: 25 },
        { name: "알렉스 그리말도", position: "DF", rating: 83, age: 28 },
        { name: "아민 아들리", position: "FW", rating: 78, age: 26 },
        { name: "빅터 보니페이스", position: "FW", rating: 85, age: 22 },
        { name: "노르디 무키엘레", position: "DF", rating: 82, age: 25 },
        { name: "알레시 가르시아", position: "DF", rating: 76, age: 24 },
        { name: "에세키엘 팔라시오스", position: "MF", rating: 75, age: 23 },
        { name: "제레미 프림퐁", position: "DF", rating: 85, age: 27 },
        { name: "그라니트 자카", position: "MF", rating: 83, age: 31 },
        { name: "니클라스 롬브", position: "DF", rating: 72, age: 24 },
        { name: "사디크 포파나", position: "FW", rating: 74, age: 23 },
        { name: "주누엘 벨로시앙", position: "DF", rating: 73, age: 25 },
        { name: "아이만 아우리르", position: "FW", rating: 70, age: 22 }
    ],
    dortmund: [
        { name: "그레고어 코벨", position: "GK", rating: 86, age: 25 },
        { name: "얀 코투", position: "DF", rating: 77, age: 26 },
        { name: "발데마르 안톤", position: "DF", rating: 76, age: 24 },
        { name: "니코 슐로터베크", position: "DF", rating: 82, age: 24 },
        { name: "라미 벤세바이니", position: "DF", rating: 80, age: 28 },
        { name: "지오바니 레이나", position: "MF", rating: 81, age: 21 },
        { name: "펠릭스 은메차", position: "FW", rating: 79, age: 22 },
        { name: "세루 기라시", position: "FW", rating: 86, age: 26 },
        { name: "율리안 브란트", position: "MF", rating: 86, age: 27 },
        { name: "파스칼 그로스", position: "MF", rating: 83, age: 28 },
        { name: "막시밀리안 바이어", position: "DF", rating: 76, age: 26 },
        { name: "쥘리앵 듀렁빌", position: "DF", rating: 75, age: 25 },
        { name: "마르셀 자비처", position: "DF", rating: 81, age: 27 },
        { name: "도니얼 말런", position: "FW", rating: 78, age: 25 },
        { name: "엠레 잔", position: "MF", rating: 84, age: 30 },
        { name: "니클라스 쥘레", position: "DF", rating: 83, age: 29 },
        { name: "율리안 뤼에르손", position: "DF", rating: 80, age: 23 },
        { name: "카림 아데예미", position: "FW", rating: 79, age: 22 },
        { name: "실라스 오스트르진스키", position: "DF", rating: 72, age: 21 },
        { name: "알렉산더 마이어", position: "GK", rating: 75, age: 32 },
        { name: "마르셀 로트카", position: "GK", rating: 71, age: 24 },
        { name: "콜 캠벨", position: "FW", rating: 70, age: 23 },
        { name: "키엘 베티엔", position: "DF", rating: 68, age: 25 },
        { name: "제이미 기튼스", position: "FW", rating: 84, age: 20 }
    ],
    newCastle: [
        { name: "두브라프카", position: "GK", rating: 85, age: 35 },
        { name: "트리피어", position: "DF", rating: 83, age: 34 },
        { name: "보트만", position: "DF", rating: 82, age: 24 },
        { name: "셰어", position: "DF", rating: 80, age: 32 },
        { name: "라셀스", position: "DF", rating: 81, age: 31 },
        { name: "조엘린통", position: "MF", rating: 80, age: 28 },
        { name: "토날리", position: "MF", rating: 84, age: 24 },
        { name: "윌슨", position: "FW", rating: 82, age: 32 },
        { name: "고든", position: "FW", rating: 79, age: 23 },
        { name: "반스", position: "FW", rating: 78, age: 26 },
        { name: "타겟", position: "DF", rating: 76, age: 29 },
        { name: "이사크", position: "FW", rating: 88, age: 25 },
        { name: "크라프트", position: "DF", rating: 78, age: 30 },
        { name: "오술라", position: "FW", rating: 73, age: 21 },
        { name: "닉 포프", position: "GK", rating: 78, age: 33 },
        { name: "홀", position: "DF", rating: 74, age: 20 },
        { name: "리브라멘토", position: "DF", rating: 75, age: 22 },
        { name: "포프", position: "GK", rating: 82, age: 32 },
        { name: "머피", position: "MF", rating: 76, age: 29 },
        { name: "알미론", position: "MF", rating: 82, age: 30 },
        { name: "켈리", position: "DF", rating: 73, age: 26 },
        { name: "러디", position: "GK", rating: 75, age: 38 },
        { name: "윌록", position: "MF", rating: 75, age: 25 },
        { name: "길레스피", position: "GK", rating: 74, age: 32 },
        { name: "번", position: "DF", rating: 84, age: 32 },
        { name: "롱스태프", position: "MF", rating: 76, age: 27 },
        { name: "A. 머피", position: "DF", rating: 72, age: 20 },
        { name: "브루누", position: "MF", rating: 81, age: 27 },
        { name: "L. 마일리", position: "MF", rating: 70, age: 18 }
    ],
    asRoma: [
        { name: "앙헬리뇨", position: "DF", rating: 75, age: 28 },
        { name: "은디카", position: "DF", rating: 82, age: 27 },
        { name: "도우비크", position: "FW", rating: 86, age: 29 },
        { name: "압둘하미드", position: "DF", rating: 74, age: 29 },
        { name: "쇼무로도프", position: "FW", rating: 77, age: 27 },
        { name: "후멜스", position: "DF", rating: 84, age: 35 },
        { name: "파레데스", position: "MF", rating: 79, age: 28 },
        { name: "코네", position: "MF", rating: 80, age: 24 },
        { name: "소울레", position: "FW", rating: 72, age: 22 },
        { name: "첼리크", position: "DF", rating: 75, age: 25 },
        { name: "디발라", position: "FW", rating: 86, age: 30 },
        { name: "에르모소", position: "DF", rating: 80, age: 29 },
        { name: "달", position: "DF", rating: 74, age: 23 },
        { name: "르페", position: "MF", rating: 80, age: 21 },
        { name: "발단치", position: "MF", rating: 75, age: 20 },
        { name: "살레마커스", position: "MF", rating: 83, age: 26 },
        { name: "잘레프스키", position: "MF", rating: 69, age: 22 },
        { name: "피실리", position: "MF", rating: 70, age: 24 },
        { name: "B. 상가레", position: "DF", rating: 75, age: 25 },
        { name: "레나토 벨루치", position: "MF", rating: 72, age: 27 },
        { name: "엘샤라위", position: "FW", rating: 84, age: 30 },
        { name: "라이언", position: "FW", rating: 73, age: 21 },
        { name: "스빌라르", position: "GK", rating: 71, age: 24 }
    ],
    chelsea: [
        { name: "산체스", position: "GK", rating: 75, age: 30 },
        { name: "디사시", position: "DF", rating: 79, age: 25 },
        { name: "쿠쿠레야", position: "DF", rating: 84, age: 25 },
        { name: "토신", position: "DF", rating: 75, age: 24 },
        { name: "B. 바디아실", position: "DF", rating: 80, age: 22 },
        { name: "콜윌", position: "DF", rating: 76, age: 23 },
        { name: "네투", position: "FW", rating: 83, age: 29 },
        { name: "엔소", position: "MF", rating: 85, age: 22 },
        { name: "마두에케", position: "FW", rating: 77, age: 21 },
        { name: "요르겐센", position: "MF", rating: 74, age: 26 },
        { name: "베티넬리", position: "GK", rating: 72, age: 31 },
        { name: "주앙 펠릭스", position: "FW", rating: 84, age: 23 },
        { name: "N. 잭슨", position: "FW", rating: 78, age: 22 },
        { name: "추쿠에메카", position: "MF", rating: 76, age: 20 },
        { name: "은쿤쿠", position: "MF", rating: 82, age: 25 },
        { name: "산초", position: "FW", rating: 80, age: 24 },
        { name: "파머", position: "MF", rating: 88, age: 22 },
        { name: "칠웰", position: "DF", rating: 81, age: 26 },
        { name: "듀스버리홀", position: "MF", rating: 75, age: 23 },
        { name: "제임스", position: "DF", rating: 84, age: 23 },
        { name: "카이세도", position: "MF", rating: 86, age: 21 },
        { name: "귀스토", position: "DF", rating: 76, age: 22 },
        { name: "포파나", position: "DF", rating: 78, age: 22 },
        { name: "카사데이", position: "MF", rating: 72, age: 20 },
        { name: "조지", position: "MF", rating: 71, age: 26 },
        { name: "아체암퐁", position: "DF", rating: 74, age: 25 },
        { name: "데이비드", position: "MF", rating: 73, age: 22 },
        { name: "켈리먼", position: "FW", rating: 70, age: 21 },
        { name: "마르크 기우", position: "FW", rating: 79, age: 24 },
        { name: "헤나투 베이가", position: "MF", rating: 73, age: 22 },
        { name: "라비아", position: "MF", rating: 80, age: 26 },
        { name: "베리스트룀", position: "FW", rating: 71, age: 21 }
    ],
    atMadrid: [
        { name: "J. 무소", position: "GK", rating: 75, age: 30 },
        { name: "J. M. 히메네스", position: "DF", rating: 80, age: 28 },
        { name: "아스필리쿠에타", position: "DF", rating: 82, age: 34 },
        { name: "갤러거", position: "MF", rating: 78, age: 23 },
        { name: "R. 데 파울", position: "MF", rating: 80, age: 29 },
        { name: "코케", position: "MF", rating: 84, age: 31 },
        { name: "그리즈만", position: "FW", rating: 89, age: 33 },
        { name: "바리오스", position: "MF", rating: 79, age: 25 },
        { name: "쇠를로트", position: "FW", rating: 82, age: 26 },
        { name: "코레아", position: "FW", rating: 79, age: 28 },
        { name: "S. 리누", position: "GK", rating: 72, age: 25 },
        { name: "오블락", position: "GK", rating: 90, age: 31 },
        { name: "M. 요렌테", position: "DF", rating: 83, age: 29 },
        { name: "랑글레", position: "DF", rating: 77, age: 27 },
        { name: "몰리나", position: "DF", rating: 75, age: 32 },
        { name: "리켈메", position: "FW", rating: 78, age: 24 },
        { name: "J. 알바레스", position: "FW", rating: 87, age: 22 },
        { name: "비첼", position: "MF", rating: 79, age: 30 },
        { name: "하비 갈란", position: "MF", rating: 73, age: 26 },
        { name: "줄리아노", position: "MF", rating: 76, age: 27 },
        { name: "헤이닐두", position: "FW", rating: 71, age: 23 },
        { name: "르노르망", position: "DF", rating: 82, age: 25 }
    ],
    napoli: [
        { name: "메렛", position: "GK", rating: 80, age: 30 },
        { name: "부온조르노", position: "DF", rating: 83, age: 26 },
        { name: "제주스", position: "DF", rating: 76, age: 28 },
        { name: "길모어", position: "MF", rating: 80, age: 22 },
        { name: "네리스", position: "FW", rating: 79, age: 24 },
        { name: "맥토미니", position: "MF", rating: 87, age: 26 },
        { name: "루카쿠", position: "FW", rating: 83, age: 30 },
        { name: "라흐마니", position: "DF", rating: 84, age: 29 },
        { name: "콘티니", position: "DF", rating: 73, age: 25 },
        { name: "라파 마린", position: "MF", rating: 72, age: 27 },
        { name: "M. 올리베라", position: "MF", rating: 80, age: 28 },
        { name: "시메오네", position: "FW", rating: 80, age: 28 },
        { name: "포포비치", position: "GK", rating: 70, age: 25 },
        { name: "폴리타노", position: "FW", rating: 83, age: 29 },
        { name: "디 로렌초", position: "DF", rating: 82, age: 30 },
        { name: "카프릴레", position: "DF", rating: 74, age: 25 },
        { name: "은곤게", position: "MF", rating: 72, age: 24 },
        { name: "마초키", position: "DF", rating: 71, age: 22 },
        { name: "스피나촐라", position: "DF", rating: 78, age: 30 },
        { name: "로보트카", position: "MF", rating: 75, age: 26 },
        { name: "라스파도리", position: "FW", rating: 82, age: 25 },
        { name: "폴로룬쇼", position: "FW", rating: 76, age: 24 },
        { name: "잠보-앙귀사", position: "MF", rating: 78, age: 23 },
        { name: "마리우 후이", position: "DF", rating: 76, age: 26 },
        { name: "K. 더브라위너", position: "MF", rating: 90, age: 33}
    ],
    seryun: [
        { name: "야신", position: "GK", rating: 120, age: 98 },
        { name: "파올로 말디니", position: "DF", rating: 118, age: 56 },
        { name: "리오 퍼디난드", position: "DF", rating: 115, age: 46 },
        { name: "A. 네스타", position: "DF", rating: 116, age: 46 },
        { name: "카푸", position: "DF", rating: 118, age: 48 },
        { name: "요한 크루이프", position: "MF", rating: 119, age: 78 },
        { name: "이니에스타", position: "MF", rating: 115, age: 45 },
        { name: "지네딘 지단", position: "MF", rating: 120, age: 50 },
        { name: "펠레", position: "FW", rating: 122, age: 85 },
        { name: "호나우두", position: "FW", rating: 119, age: 48 },
        { name: "호나우지뉴", position: "FW", rating: 117, age: 45 },
    ]
};

// 스폰서 데이터
const sponsors = [
    {
        name: "푸마",
        description: "빠르고 역동적인 스포츠 브랜드",
        payPerWin: 15,
        payPerLoss: 3,
        contractLength: 12,
        signingBonus: 80,
        requirements: { minRating: 70 }
    },
    {
        name: "나이키",
        description: "세계적인 스포츠 브랜드",
        payPerWin: 20,
        payPerLoss: 5,
        contractLength: 10,
        signingBonus: 100,
        requirements: { minRating: 75 }
    },
    {
        name: "뉴발란스",
        description: "전문성을 추구하는 스포츠 브랜드",
        payPerWin: 18,
        payPerLoss: 4,
        contractLength: 15,
        signingBonus: 120,
        requirements: { minRating: 78 }
    },
    {
        name: "아디다스",
        description: "독일의 프리미엄 스포츠 브랜드",
        payPerWin: 25,
        payPerLoss: 8,
        contractLength: 8,
        signingBonus: 150,
        requirements: { minRating: 80 }
    },
    {
        name: "넥센타이어",
        description: "한국의 타이어 브랜드",
        payPerWin: 30,
        payPerLoss: 10,
        contractLength: 6,
        signingBonus: 200,
        requirements: { minRating: 85 }
    },
    {
        name: "플라이 에미레이츠",
        description: "세계 최고의 항공사 중 하나",
        payPerWin: 40,
        payPerLoss: 15,
        contractLength: 5,
        signingBonus: 300,
        requirements: { minRating: 88 }
    },
    {
        name: "FIFA 공식 파트너십",
        description: "FIFA와의 독점 글로벌 파트너십",
        payPerWin: 50,
        payPerLoss: 20,
        contractLength: 4,
        signingBonus: 500,
        requirements: { minRating: 90 }
    }
];

// 경기 이벤트 메시지
const passMessages = [
    "이(가) 팀이 미드필드에서 공을 돌리고 있습니다",
    "의 예리한 패스!",
    "의 후방 빌드업",
    "이(가)측면으로 공을 연결합니다",
    "이(가) 중앙에서 패스를 시도합니다",
    "의 안전한 백패스",
    "이(가) 공격을 전개합니다",
    "이(가) 좌측으로 공을 옮깁니다",
    "이(가) 우측으로 볼을 배급합니다",
    "이(가) 킬패스를 시도합니다",
    "이(가) 크로스 올립니다",
    "이(가) 스루패스를 찔러넣습니다",
    "이(가) 롱패스로 전환합니다",
    "이(가) 숏패스를 연결합니다",
    "의 침착한 패스 플레이"
];

// DOM 요소들
let currentModal = null;
let selectedPosition = null;

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
});

function initializeGame() {
    // 리그 데이터 초기화
    initializeLeagueData();
    
    // 첫 번째 화면 표시
    showScreen('teamSelection');
}

function setupEventListeners() {
    // 팀 선택
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function() {
            const teamKey = this.dataset.team;
            selectTeam(teamKey);
        });
    });

    // 탭 전환
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            showTab(tabName);
        });
    });

    // 포지션 클릭
    document.querySelectorAll('.position').forEach(position => {
        position.addEventListener('click', function() {
            const pos = this.dataset.position;
            const index = this.dataset.index;
            openPlayerModal(pos, index);
        });
    });

    // 경기 시작
    document.getElementById('startMatchBtn').addEventListener('click', startMatch);

    // 모달 닫기
    document.querySelector('.close').addEventListener('click', closeModal);

    // 이적 검색
    if (document.getElementById('searchBtn')) {
        document.getElementById('searchBtn').addEventListener('click', searchPlayers);
    }

    // 게임 저장/불러오기
    document.getElementById('saveGameBtn').addEventListener('click', saveGame);
    document.getElementById('loadGameBtn').addEventListener('click', function() {
        document.getElementById('loadGameInput').click();
    });
    document.getElementById('loadGameInput').addEventListener('change', loadGame);

    // 성장 현황 보기
    document.getElementById('showGrowthBtn').addEventListener('click', showGrowthSummary);

    // 전술 변경
    document.getElementById('tacticSelect').addEventListener('change', function() {
        gameData.currentTactic = this.value;
    });

    // 인터뷰 버튼
    document.querySelectorAll('.interview-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.dataset.option;
            handleInterview(option);
        });
    });
}

function selectTeam(teamKey) {
    gameData.selectedTeam = teamKey;
    applyTeamTheme(teamKey);
    document.getElementById('teamName').textContent = teamNames[teamKey];
    
    // 자동으로 최고 능력치 선수들로 스쿼드 채우기
    autoFillSquad();
    
    // 선수 성장 시스템 초기화
    if (typeof playerGrowthSystem !== 'undefined') {
        playerGrowthSystem.initializePlayerGrowth();
    }
    
    // 이적 시스템 초기화
    if (typeof transferSystem !== 'undefined') {
        transferSystem.initializeTransferMarket();
    }
    
    // 상대팀 설정
    setNextOpponent();
    
    // 로비로 이동
    showScreen('lobby');
    displayTeamPlayers();
    updateDisplay();
    displaySponsors();
}

// 자동으로 스쿼드 채우기 함수
function autoFillSquad() {
    const teamPlayers = teams[gameData.selectedTeam];
    
    // 포지션별로 선수들을 분류하고 능력치 순으로 정렬
    const gks = teamPlayers.filter(p => p.position === 'GK').sort((a, b) => b.rating - a.rating);
    const dfs = teamPlayers.filter(p => p.position === 'DF').sort((a, b) => b.rating - a.rating);
    const mfs = teamPlayers.filter(p => p.position === 'MF').sort((a, b) => b.rating - a.rating);
    const fws = teamPlayers.filter(p => p.position === 'FW').sort((a, b) => b.rating - a.rating);
    
    // 최고 능력치 선수들로 자동 배치
    if (gks.length > 0) {
        gameData.squad.gk = gks[0];
    }
    
    // 수비수 4명
    for (let i = 0; i < 4 && i < dfs.length; i++) {
        gameData.squad.df[i] = dfs[i];
    }
    
    // 미드필더 3명
    for (let i = 0; i < 3 && i < mfs.length; i++) {
        gameData.squad.mf[i] = mfs[i];
    }
    
    // 공격수 3명
    for (let i = 0; i < 3 && i < fws.length; i++) {
        gameData.squad.fw[i] = fws[i];
    }
    
    updateFormationDisplay();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showTab(tabName) {
    // 탭 버튼 활성화
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // 탭 패널 표시
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    // 탭별 초기화
    switch(tabName) {
        case 'squad':
            displayTeamPlayers();
            updateFormationDisplay();
            break;
        case 'transfer':
            if (typeof displayTransferPlayers === 'function') {
                displayTransferPlayers();
            }
            break;
        case 'league':
            displayLeagueTable();
            break;
        case 'sponsor':
            displaySponsors();
            break;
    }
}

// 선수가 이미 스쿼드에 있는지 확인하는 함수
function isPlayerInSquad(player) {
    const squad = gameData.squad;
    
    if (squad.gk && squad.gk.name === player.name) return true;
    
    for (let df of squad.df) {
        if (df && df.name === player.name) return true;
    }
    
    for (let mf of squad.mf) {
        if (mf && mf.name === player.name) return true;
    }
    
    for (let fw of squad.fw) {
        if (fw && fw.name === player.name) return true;
    }
    
    return false;
}

function displayTeamPlayers() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';
    
    const teamPlayers = teams[gameData.selectedTeam];
    
    teamPlayers.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        
        // 이미 스쿼드에 있는 선수인지 확인
        const isUsed = isPlayerInSquad(player);
        if (isUsed) {
            playerCard.classList.add('used');
        }
        
        playerCard.innerHTML = `
            <div class="name">${player.name}</div>
            <div class="details">
                <div>${player.position} | 능력치: ${player.rating} | 나이: ${player.age}</div>
                ${isUsed ? '<div style="color: #ffd700; font-size: 0.8rem;">★ 출전 중</div>' : ''}
            </div>
        `;
        
        if (!isUsed) {
            playerCard.addEventListener('click', () => {
                if (selectedPosition !== null) {
                    assignPlayerToPosition(player);
                }
            });
            
            // 후보 선수 우클릭으로 방출 (이적료 받기)
            playerCard.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                showReleasePlayerDialog(player);
            });
        }
        
        playerList.appendChild(playerCard);
    });
}

// 선수 방출 다이얼로그 표시
function showReleasePlayerDialog(player) {
    const transferFee = calculateReleaseTransferFee(player);
    
    const confirmMessage = `${player.name}을(를) 방출하시겠습니까?\n\n` +
                          `능력치: ${player.rating} | 나이: ${player.age}\n` +
                          `받을 수 있는 이적료: ${transferFee}억원`;
    
    if (confirm(confirmMessage)) {
        releasePlayerWithFee(player, transferFee);
    }
}

// 선수 방출 시 받을 이적료 계산
function calculateReleaseTransferFee(player) {
    let basePrice = 500; // 기본 가격 500억
    
    // 능력치에 따른 가격 조정
    const ratingMultiplier = Math.pow(player.rating / 70, 2.5);
    let price = basePrice * ratingMultiplier;
    
    // 나이에 따른 가격 조정
    let ageMultiplier = 1;
    if (player.age <= 20) {
        ageMultiplier = 1.3; // 젊은 선수는 30% 비싸게
    } else if (player.age <= 25) {
        ageMultiplier = 1.1; // 25세 이하는 10% 비싸게
    } else if (player.age >= 30) {
        ageMultiplier = 1; // 30세 이상은 1배
    } else if (player.age >= 35) {
        ageMultiplier = 0.8; // 35세 이상은 20% 싸게
    }
    
    price *= ageMultiplier;
    
    // 포지션에 따른 가격 조정
    const positionMultiplier = {
        'GK': 1.1,
        'DF': 1.1,
        'MF': 1.1,
        'FW': 1.3
    };
    
    price *= positionMultiplier[player.position] || 1;
    
    // 랜덤 요소 추가 (90% ~ 150%)
    const randomFactor = 0.9 + Math.random() * 0.6;
    price *= randomFactor;
    
    // 방출 시에는 0.4배로 받음
    price *= 0.4;
    
    return Math.round(price);
}

// 이적료를 받고 선수 방출 (기존 releasePlayerWithFee 함수를 이것으로 교체)
function releasePlayerWithFee(player, transferFee) {
    const teamPlayers = teams[gameData.selectedTeam];
    const playerIndex = teamPlayers.findIndex(p => 
        p.name === player.name && p.position === player.position
    );
    
    if (playerIndex === -1) {
        alert("해당 선수를 찾을 수 없습니다.");
        return;
    }
    
    // 팀에서 제거
    teamPlayers.splice(playerIndex, 1);
    
    // 스쿼드에서도 제거
    removePlayerFromSquad(player);
    
    // 이적료 받기
    gameData.teamMoney += transferFee;
    
    // 무작위 팀으로 이적시키기
    const availableTeams = Object.keys(teams).filter(team => team !== gameData.selectedTeam);
    if (availableTeams.length > 0) {
        const randomTeam = availableTeams[Math.floor(Math.random() * availableTeams.length)];
        
        // 선수를 무작위 팀에 추가
        teams[randomTeam].push({
            name: player.name,
            position: player.position,
            rating: player.rating,
            age: player.age
        });
        
        alert(`${player.name}을(를) 방출했습니다!\n${teamNames[randomTeam]}로 이적했습니다.\n이적료 ${transferFee}억원을 받았습니다.`);
    } else {
        // 다른 팀이 없을 경우 외부리그로 이적
        alert(`${player.name}을(를) 방출했습니다!\n외부리그로 이적했습니다.\n이적료 ${transferFee}억원을 받았습니다.`);
    }
    
    // 화면 업데이트
    updateDisplay();
    displayTeamPlayers();
    updateFormationDisplay();
    
    // 이적 시장에도 업데이트가 필요하면
    if (typeof transferSystem !== 'undefined') {
        // 이적 시장에서도 해당 선수를 찾아서 제거 (만약 있다면)
        transferSystem.transferMarket = transferSystem.transferMarket.filter(p => 
            !(p.name === player.name && p.position === player.position)
        );
    }
}

// 스쿼드에서 선수 제거하는 헬퍼 함수 (script.js에 추가)
function removePlayerFromSquad(player) {
    if (gameData.squad.gk && gameData.squad.gk.name === player.name) {
        gameData.squad.gk = null;
    }
    
    gameData.squad.df = gameData.squad.df.map(p => 
        p && p.name === player.name ? null : p
    );
    
    gameData.squad.mf = gameData.squad.mf.map(p => 
        p && p.name === player.name ? null : p
    );
    
    gameData.squad.fw = gameData.squad.fw.map(p => 
        p && p.name === player.name ? null : p
    );
}
function openPlayerModal(position, index) {
    selectedPosition = { position, index };
    const modal = document.getElementById('playerModal');
    const modalPlayerList = document.getElementById('modalPlayerList');
    
    modalPlayerList.innerHTML = '';
    
    const teamPlayers = teams[gameData.selectedTeam];
    const filteredPlayers = teamPlayers.filter(player => 
        player.position === position.toUpperCase() && !isPlayerInSquad(player)
    );
    
    if (filteredPlayers.length === 0) {
        modalPlayerList.innerHTML = '<p>배치 가능한 선수가 없습니다.</p>';
    } else {
        filteredPlayers.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.innerHTML = `
                <div class="name">${player.name}</div>
                <div class="details">능력치: ${player.rating} | 나이: ${player.age}</div>
            `;
            
            playerCard.addEventListener('click', () => {
                assignPlayerToPosition(player);
                closeModal();
            });
            
            modalPlayerList.appendChild(playerCard);
        });
    }
    
    modal.style.display = 'block';
}

function assignPlayerToPosition(player) {
    if (!selectedPosition) return;
    
    // 이미 스쿼드에 있는 선수인지 확인
    if (isPlayerInSquad(player)) {
        alert('이 선수는 이미 스쿼드에 포함되어 있습니다.');
        return;
    }
    
    const { position, index } = selectedPosition;
    
    if (position === 'gk') {
        gameData.squad.gk = player;
    } else if (position === 'df') {
        gameData.squad.df[index] = player;
    } else if (position === 'mf') {
        gameData.squad.mf[index] = player;
    } else if (position === 'fw') {
        gameData.squad.fw[index] = player;
    }
    
    updateFormationDisplay();
    displayTeamPlayers(); // 선수 목록 새로고침
    selectedPosition = null;
}

function updateFormationDisplay() {
    // GK 업데이트
    const gkSlot = document.getElementById('gk-slot');
    if (gameData.squad.gk) {
        gkSlot.innerHTML = `
            <div>${gameData.squad.gk.name}</div>
            <div>${gameData.squad.gk.rating}</div>
        `;
        gkSlot.classList.add('filled');
    } else {
        gkSlot.innerHTML = 'GK';
        gkSlot.classList.remove('filled');
    }
    
    // DF 업데이트
    for (let i = 0; i < 4; i++) {
        const dfSlot = document.querySelector(`.df-${i + 1} .player-slot`);
        if (gameData.squad.df[i]) {
            dfSlot.innerHTML = `
                <div>${gameData.squad.df[i].name}</div>
                <div>${gameData.squad.df[i].rating}</div>
            `;
            dfSlot.classList.add('filled');
        } else {
            dfSlot.innerHTML = 'DF';
            dfSlot.classList.remove('filled');
        }
    }
    
    // MF 업데이트
    for (let i = 0; i < 3; i++) {
        const mfSlot = document.querySelector(`.mf-${i + 1} .player-slot`);
        if (gameData.squad.mf[i]) {
            mfSlot.innerHTML = `
                <div>${gameData.squad.mf[i].name}</div>
                <div>${gameData.squad.mf[i].rating}</div>
            `;
            mfSlot.classList.add('filled');
        } else {
            mfSlot.innerHTML = 'MF';
            mfSlot.classList.remove('filled');
        }
    }
    
    // FW 업데이트
    for (let i = 0; i < 3; i++) {
        const fwSlot = document.querySelector(`.fw-${i + 1} .player-slot`);
        if (gameData.squad.fw[i]) {
            fwSlot.innerHTML = `
                <div>${gameData.squad.fw[i].name}</div>
                <div>${gameData.squad.fw[i].rating}</div>
            `;
            fwSlot.classList.add('filled');
        } else {
            fwSlot.innerHTML = 'FW';
            fwSlot.classList.remove('filled');
        }
    }
}

function closeModal() {
    document.getElementById('playerModal').style.display = 'none';
    selectedPosition = null;
}

function updateDisplay() {
    document.getElementById('teamMoney').textContent = gameData.teamMoney + '억';
    document.getElementById('teamMorale').textContent = gameData.teamMorale;
    document.getElementById('currentSponsor').textContent = 
        gameData.currentSponsor ? gameData.currentSponsor.name : '없음';
    
    if (gameData.currentOpponent) {
        document.getElementById('opponentName').textContent = 
            teamNames[gameData.currentOpponent];
    }
}

function setNextOpponent() {
    const availableTeams = Object.keys(teams).filter(team => team !== gameData.selectedTeam);
    gameData.currentOpponent = availableTeams[Math.floor(Math.random() * availableTeams.length)];
    updateDisplay();
}

function initializeLeagueData() {
    Object.keys(teams).forEach(teamKey => {
        gameData.leagueData[teamKey] = {
            matches: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0
        };
    });
}

function displayLeagueTable() {
    const leagueTable = document.getElementById('leagueTable');
    
    // 순위 계산
    const standings = Object.keys(gameData.leagueData).map(teamKey => ({
        team: teamKey,
        ...gameData.leagueData[teamKey],
        goalDiff: gameData.leagueData[teamKey].goalsFor - gameData.leagueData[teamKey].goalsAgainst
    })).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
        return b.goalsFor - a.goalsFor;
    });
    
    let tableHTML = `
        <table class="league-table">
            <thead>
                <tr>
                    <th>순위</th>
                    <th>팀</th>
                    <th>경기</th>
                    <th>승</th>
                    <th>무</th>
                    <th>패</th>
                    <th>득점</th>
                    <th>실점</th>
                    <th>득실차</th>
                    <th>승점</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    standings.forEach((team, index) => {
        const isUserTeam = team.team === gameData.selectedTeam;
        tableHTML += `
            <tr class="${isUserTeam ? 'user-team' : ''}">
                <td>${index + 1}</td>
                <td>${teamNames[team.team]}</td>
                <td>${team.matches}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td>${team.goalDiff > 0 ? '+' : ''}${team.goalDiff}</td>
                <td>${team.points}</td>
            </tr>
        `;
    });
    
    tableHTML += '</tbody></table>';
    leagueTable.innerHTML = tableHTML;
}

function displaySponsors() {
    const sponsorList = document.getElementById('sponsorList');
    sponsorList.innerHTML = '';
    
    const teamRating = calculateTeamRating();
    
    sponsors.forEach(sponsor => {
        const sponsorCard = document.createElement('div');
        const isAvailable = teamRating >= sponsor.requirements.minRating;
        const isContracted = gameData.currentSponsor && gameData.currentSponsor.name === sponsor.name;
        
        let cardClass = 'sponsor-card';
        if (isContracted) {
            cardClass += ' contracted';
        } else if (isAvailable && !gameData.currentSponsor) {
            cardClass += ' available';
        } else {
            cardClass += ' unavailable';
        }
        
        sponsorCard.className = cardClass;
        sponsorCard.innerHTML = `
            <h4>${sponsor.name}</h4>
            <p>${sponsor.description}</p>
            <div class="sponsor-details">
                <div class="sponsor-detail">
                    <strong>승리당:</strong> ${sponsor.payPerWin}억
                </div>
                <div class="sponsor-detail">
                    <strong>패배당:</strong> ${sponsor.payPerLoss}억
                </div>
                <div class="sponsor-detail">
                    <strong>계약금:</strong> ${sponsor.signingBonus}억
                </div>
                <div class="sponsor-detail">
                    <strong>기간:</strong> ${sponsor.contractLength}경기
                </div>
            </div>
            <div class="sponsor-requirements">
                <strong>요구 능력치:</strong> ${sponsor.requirements.minRating} 
                <span style="color: ${teamRating >= sponsor.requirements.minRating ? '#2ecc71' : '#e74c3c'};">
                    (현재: ${teamRating.toFixed(1)})
                </span>
            </div>
            ${isContracted ? '<div style="color: #2ecc71; font-weight: bold; margin-top: 10px;">✓ 계약 중</div>' : ''}
        `;
        
        if (isAvailable && !gameData.currentSponsor) {
            sponsorCard.addEventListener('click', () => {
                gameData.currentSponsor = sponsor;
                gameData.teamMoney += sponsor.signingBonus;
                updateDisplay();
                displaySponsors();
                alert(`${sponsor.name}와 계약을 체결했습니다! 계약금 ${sponsor.signingBonus}억을 받았습니다.`);
            });
        }
        
        sponsorList.appendChild(sponsorCard);
    });
}

function calculateTeamRating() {
    const squad = gameData.squad;
    let totalRating = 0;
    let playerCount = 0;
    
    if (squad.gk) {
        totalRating += squad.gk.rating;
        playerCount++;
    }
    
    squad.df.forEach(player => {
        if (player) {
            totalRating += player.rating;
            playerCount++;
        }
    });
    
    squad.mf.forEach(player => {
        if (player) {
            totalRating += player.rating;
            playerCount++;
        }
    });
    
    squad.fw.forEach(player => {
        if (player) {
            totalRating += player.rating;
            playerCount++;
        }
    });
    
    return playerCount > 0 ? totalRating / playerCount : 0;
}

// 상대팀의 평균 능력치 계산 (AI 팀은 최고 11명으로 계산)
function calculateOpponentTeamRating(opponentTeam) {
    const teamPlayers = teams[opponentTeam];
    if (!teamPlayers || teamPlayers.length === 0) return 70;
    
    // 포지션별로 선수들을 분류하고 능력치 순으로 정렬
    const gks = teamPlayers.filter(p => p.position === 'GK').sort((a, b) => b.rating - a.rating);
    const dfs = teamPlayers.filter(p => p.position === 'DF').sort((a, b) => b.rating - a.rating);
    const mfs = teamPlayers.filter(p => p.position === 'MF').sort((a, b) => b.rating - a.rating);
    const fws = teamPlayers.filter(p => p.position === 'FW').sort((a, b) => b.rating - a.rating);
    
    let selectedPlayers = [];
    
    // 최고 능력치 선수들로 가상 스쿼드 구성
    if (gks.length > 0) selectedPlayers.push(gks[0]);
    
    // 수비수 4명
    for (let i = 0; i < 4 && i < dfs.length; i++) {
        selectedPlayers.push(dfs[i]);
    }
    
    // 미드필더 3명
    for (let i = 0; i < 3 && i < mfs.length; i++) {
        selectedPlayers.push(mfs[i]);
    }
    
    // 공격수 3명
    for (let i = 0; i < 3 && i < fws.length; i++) {
        selectedPlayers.push(fws[i]);
    }
    
    // 11명이 안 되면 나머지 포지션에서 채우기
    const allPlayers = teamPlayers.sort((a, b) => b.rating - a.rating);
    while (selectedPlayers.length < 11 && selectedPlayers.length < allPlayers.length) {
        const nextPlayer = allPlayers.find(p => !selectedPlayers.includes(p));
        if (nextPlayer) selectedPlayers.push(nextPlayer);
    }
    
    // 평균 능력치 계산
    const totalRating = selectedPlayers.reduce((sum, player) => sum + player.rating, 0);
    return selectedPlayers.length > 0 ? totalRating / selectedPlayers.length : 70;
}

// 팀 전력 차이 계산
function calculateTeamStrengthDifference() {
    const userRating = calculateTeamRating();
    const opponentRating = calculateOpponentTeamRating(gameData.currentOpponent);
    
    return {
        userRating: userRating,
        opponentRating: opponentRating,
        difference: userRating - opponentRating,
        userAdvantage: userRating > opponentRating,
        strengthGap: Math.abs(userRating - opponentRating)
    };
}

function saveGame() {
    const saveData = {
        gameData: gameData,
        teams: teams,
        timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(saveData, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${teamNames[gameData.selectedTeam]}_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function loadGame(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const saveData = JSON.parse(e.target.result);
            gameData = saveData.gameData;
            
            // 팀 데이터 복원
            if (saveData.teams) {
                Object.assign(teams, saveData.teams);
            }
            
            // 화면 업데이트
            document.getElementById('teamName').textContent = teamNames[gameData.selectedTeam];
            updateDisplay();
            updateFormationDisplay();
            displayTeamPlayers();
            
            alert('게임을 불러왔습니다!');
        } catch (error) {
            alert('저장 파일을 불러오는 중 오류가 발생했습니다.');
        }
    };
    reader.readAsText(file);
}

// 전술 정보 버튼 이벤트 리스너 추가
document.getElementById('showTacticsBtn').addEventListener('click', showTacticsInfo);
document.getElementById('showTeamTacticsBtn').addEventListener('click', showTeamTacticsInfo);

// 전술 상성표 표시 함수
function showTacticsInfo() {
    const tactics = {
        gegenpress: {
            name: "게겐프레싱",
            effective: ["twoLine", "possession"],
            ineffective: ["longBall", "catenaccio"],
            description: "높은 압박으로 빠른 역습을 노리는 전술"
        },
        twoLine: {
            name: "두 줄 수비",
            effective: ["longBall", "parkBus"],
            ineffective: ["gegenpress", "totalFootball"],
            description: "견고한 수비 라인으로 상대 공격을 차단"
        },
        lavolpiana: {
            name: "라볼피아나",
            effective: ["possession", "tikitaka"],
            ineffective: ["catenaccio", "longBall"],
            description: "측면 공격과 크로스를 중심으로 한 전술"
        },
        longBall: {
            name: "롱볼축구",
            effective: ["parkBus", "catenaccio"],
            ineffective: ["gegenpress", "tikitaka"],
            description: "긴 패스로 빠르게 공격을 전개하는 전술"
        },
        possession: {
            name: "점유율 축구",
            effective: ["tikitaka", "lavolpiana"],
            ineffective: ["longBall", "gegenpress"],
            description: "공을 오래 소유하며 천천히 공격 기회를 만드는 전술"
        },
        parkBus: {
            name: "침대 축구",
            effective: ["catenaccio", "twoLine"],
            ineffective: ["gegenpress", "totalFootball"],
            description: "극도로 수비적인 전술로 역습을 노림"
        },
        catenaccio: {
            name: "카테나치오",
            effective: ["twoLine", "parkBus"],
            ineffective: ["possession", "totalFootball"],
            description: "이탈리아식 견고한 수비 전술"
        },
        totalFootball: {
            name: "토탈 풋볼",
            effective: ["tikitaka", "gegenpress"],
            ineffective: ["twoLine", "catenaccio"],
            description: "모든 선수가 공격과 수비에 참여하는 전술"
        },
        tikitaka: {
            name: "티키타카",
            effective: ["possession", "lavolpiana"],
            ineffective: ["longBall", "parkBus"],
            description: "짧은 패스를 연결하며 공간을 만드는 전술"
        }
    };

    document.getElementById('tacticsModalTitle').textContent = '🎯 전술 상성표';
    
    let content = '<div style="max-height: 500px; overflow-y: auto;">';
    
    Object.entries(tactics).forEach(([key, tactic]) => {
        content += `
            <div style="background: rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 20px; margin-bottom: 15px;">
                <h4 style="color: #ffd700; font-size: 1.3rem; margin-bottom: 10px;">【${tactic.name}】</h4>
                <p style="margin-bottom: 15px; line-height: 1.4; opacity: 0.9;">📖 ${tactic.description}</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="background: rgba(46, 204, 113, 0.2); padding: 10px; border-radius: 8px; border-left: 3px solid #2ecc71;">
                        <strong style="color: #2ecc71;">✅ 효과적 vs:</strong><br>
                        ${tactic.effective.map(t => tactics[t].name).join('<br>')}
                    </div>
                    <div style="background: rgba(231, 76, 60, 0.2); padding: 10px; border-radius: 8px; border-left: 3px solid #e74c3c;">
                        <strong style="color: #e74c3c;">❌ 비효과적 vs:</strong><br>
                        ${tactic.ineffective.map(t => tactics[t].name).join('<br>')}
                    </div>
                </div>
            </div>
        `;
    });

    content += `
        <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 10px; padding: 15px; margin-top: 20px; text-align: center;">
            <strong style="color: #ffd700;">💡 팁: 상대팀의 전술을 파악하고 유리한 전술을 선택하세요!</strong>
        </div>
    </div>`;
    
    document.getElementById('tacticsModalContent').innerHTML = content;
    document.getElementById('tacticsModal').style.display = 'block';
}

// 팀별 전술 정보 표시 함수
function showTeamTacticsInfo() {
    const teamTactics = {
        manCity: "tikitaka",
        liverpool: "gegenpress",
        manUnited: "possession",
        arsenal: "twoLine",
        chelsea: "longBall",
        tottenham: "gegenpress",
        realMadrid: "possession",
        barcelona: "totalFootball",
        acMilan: "gegenpress",
        inter: "totalFootball",
        bayern: "tikitaka",
        psg: "possession",
        leverkusen: "longBall",
        dortmund: "gegenpress",
        newCastle: "lavolpiana",
        asRoma: "longBall",
        atMadrid: "catenaccio",
        napoli: "parkBus",
        seryun: "longBall"
    };

    const tacticNames = {
        gegenpress: "게겐프레싱",
        twoLine: "두 줄 수비",
        lavolpiana: "라볼피아나",
        longBall: "롱볼축구",
        possession: "점유율 축구",
        parkBus: "침대 축구",
        catenaccio: "카테나치오",
        totalFootball: "토탈 풋볼",
        tikitaka: "티키타카"
    };

    const teamNames = {
        manCity: "맨체스터 시티",
        liverpool: "리버풀",
        manUnited: "맨체스터 유나이티드",
        arsenal: "아스널",
        chelsea: "첼시",
        tottenham: "토트넘 홋스퍼",
        realMadrid: "레알 마드리드",
        barcelona: "바르셀로나",
        acMilan: "AC 밀란",
        inter: "인터 밀란",
        bayern: "바이에른 뮌헨",
        psg: "파리 생제르맹",
        leverkusen: "바이어 레버쿠젠",
        dortmund: "보루시아 도르트문트",
        newCastle: "뉴캐슬 유나이티드",
        asRoma: "AS 로마",
        atMadrid: "아틀레티코 마드리드",
        napoli: "나폴리",
        seryun: "𝐀𝐥𝐥 𝐓𝐢𝐦𝐞 𝐋𝐞𝐠𝐞𝐧𝐝"
    };

    document.getElementById('tacticsModalTitle').textContent = '📋 팀별 기본 전술';
    
    // 전술별로 그룹화
    const tacticGroups = {};
    Object.entries(teamTactics).forEach(([teamKey, tacticKey]) => {
        if (!tacticGroups[tacticKey]) {
            tacticGroups[tacticKey] = [];
        }
        tacticGroups[tacticKey].push(teamNames[teamKey]);
    });

    let content = '<div style="max-height: 500px; overflow-y: auto;">';

    Object.entries(tacticGroups).forEach(([tacticKey, teams]) => {
        content += `
            <div style="background: rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 20px; margin-bottom: 15px;">
                <h4 style="color: #ffd700; font-size: 1.3rem; margin-bottom: 15px; display: flex; align-items: center;">
                    🎯 ${tacticNames[tacticKey]}
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                    ${teams.map(team => `
                        <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.2);">
                            ${team}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    content += `
        <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 10px; padding: 15px; margin-top: 20px; text-align: center;">
            <strong style="color: #ffd700;">💡 경기 전에 상대팀의 전술을 확인하고 대응 전술을 준비하세요!</strong>
        </div>
    </div>`;
    
    document.getElementById('tacticsModalContent').innerHTML = content;
    document.getElementById('tacticsModal').style.display = 'block';
}

// 전술 모달 닫기 함수
function closeTacticsModal() {
    document.getElementById('tacticsModal').style.display = 'none';
}

// 모달 바깥 클릭 시 닫기
window.onclick = function(event) {
    const tacticsModal = document.getElementById('tacticsModal');
    if (event.target === tacticsModal) {
        tacticsModal.style.display = 'none';
    }
}


// 팀 테마 적용 함수
function applyTeamTheme(teamKey) {
    // 기존 팀 클래스 제거
    document.body.className = document.body.className.replace(/team-\w+/g, '');
    
    // 새로운 팀 클래스 추가
    document.body.classList.add(`team-${teamKey}`);
}

// 외부에서 호출할 수 있는 함수들
window.gameData = gameData;
window.teams = teams;
window.teamNames = teamNames;
window.updateDisplay = updateDisplay;
window.setNextOpponent = setNextOpponent;
window.displayTeamPlayers = displayTeamPlayers;
window.updateFormationDisplay = updateFormationDisplay;
window.calculateTeamRating = calculateTeamRating;
window.calculateOpponentTeamRating = calculateOpponentTeamRating;
window.calculateTeamStrengthDifference = calculateTeamStrengthDifference;