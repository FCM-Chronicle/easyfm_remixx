// 게임 데이터
let gameData = {
    selectedTeam: null,
    currentLeague: 1, // 현재 소속 리그 (1, 2, 3부리그) - 추가
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
    // 리그별 데이터로 분리 - 수정
    leagueData: {
        division1: {},
        division2: {},
        division3: {}
    },
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
const allteams = {
    // 1부 리그
    "바르셀로나": {
        league: 1,
        players: [
            { name: "페드리", position: "MF", country: "스페인", age: 22, rating: 92 },
            { name: "로베르트 레반도프스키", position: "FW", country: "폴란드", age: 36, rating: 92 },
            { name: "라민 야말", position: "FW", country: "스페인", age: 18, rating: 94 },
            { name: "하피냐", position: "FW", country: "브라질", age: 28, rating: 95 },
            { name: "이냐키 페냐", position: "GK", country: "스페인", age: 26, rating: 73 },
            { name: "마커스 래시포드", position: "MF", country: "잉글랜드", age: 27, rating: 80 },
            { name: "마르크 안드레 테어 슈테겐", position: "GK", country: "독일", age: 33, rating: 85 },
            { name: "안드레아스 크리스텐센", position: "DF", country: "덴마크", age: 29, rating: 73 },
            { name: "페르민 로페스", position: "MF", country: "스페인", age: 22, rating: 82 },
            { name: "마르크 카사도", position: "MF", country: "스페인", age: 21, rating: 79 },
            { name: "다니 올모", position: "MF", country: "스페인", age: 27, rating: 86 },
            { name: "프렝키 더용", position: "MF", country: "네덜란드", age: 28, rating: 86 },
            { name: "쥘 쿤데", position: "DF", country: "프랑스", age: 26, rating: 88 },
            { name: "에릭 가르시아", position: "DF", country: "스페인", age: 24, rating: 75 },
            { name: "보이치에흐 슈체스니", position: "GK", country: "폴란드", age: 35, rating: 84 },
            { name: "주안 가르시아", position: "GK", country: "스페인", age: 23, rating: 81 },
            { name: "오리올 로메우", position: "MF", country: "스페인", age: 33, rating: 69 },
            { name: "엑토르 포트", position: "DF", country: "스페인", age: 19, rating: 72 },
            { name: "마르크 베르날", position: "MF", country: "스페인", age: 18, rating: 71 },
            { name: "제라르 마르틴", position: "DF", country: "스페인", age: 23, rating: 67 },
            { name: "루니 바르다그지", position: "FW", country: "덴마크", age: 19, rating: 69 }
        ],
        description: "꿈과 열정이 살아 숨쉬는 카탈루냐의 자존심"
    },

    "레알 마드리드": {
        league: 1,
        players: [
            { name: "티보 쿠르투아", position: "GK", country: "벨기에", age: 33, rating: 85 },
            { name: "다니 카르바할", position: "DF", country: "스페인", age: 33, rating: 83 },
            { name: "에데르 밀리탕", position: "DF", country: "브라질", age: 27, rating: 86 },
            { name: "데이비드 알라바", position: "DF", country: "오스트리아", age: 33, rating: 69 },
            { name: "주드 벨링엄", position: "MF", country: "잉글랜드", age: 22, rating: 92 },
            { name: "에두아르도 카마빙가", position: "MF", country: "프랑스", age: 22, rating: 85 },
            { name: "비니시우스 주니오르", position: "FW", country: "브라질", age: 25, rating: 93 },
            { name: "페데리코 발베르데", position: "MF", country: "우루과이", age: 27, rating: 92 },
            { name: "킬리안 음바페", position: "FW", country: "프랑스", age: 26, rating: 94 },
            { name: "호드리구", position: "FW", country: "브라질", age: 24, rating: 89 },
            { name: "트렌트 알렉산더아놀드", position: "DF", country: "잉글랜드", age: 26, rating: 86 },
            { name: "안드리 루닌", position: "GK", country: "우크라이나", age: 26, rating: 79 },
            { name: "오렐리앵 추아메니", position: "MF", country: "프랑스", age: 25, rating: 85 },
            { name: "아르다 귈러", position: "MF", country: "튀르키예", age: 20, rating: 83 },
            { name: "엔드릭", position: "FW", country: "브라질", age: 19, rating: 75 },
            { name: "알바로 카레라스", position: "DF", country: "스페인", age: 22, rating: 83 },
            { name: "다니 세바요스", position: "MF", country: "스페인", age: 28, rating: 73 },
            { name: "프란 가르시아", position: "DF", country: "스페인", age: 25, rating: 81 },
            { name: "브라힘 디아스", position: "FW", country: "모로코", age: 25, rating: 82 },
            { name: "안토니오 뤼디거", position: "DF", country: "독일", age: 32, rating: 84 },
            { name: "페를랑 멘디", position: "DF", country: "프랑스", age: 30, rating: 72 },
            { name: "딘 하위선", position: "DF", country: "스페인", age: 20, rating: 86 },
            { name: "라울 아센시오", position: "DF", country: "스페인", age: 22, rating: 84 }
        ],
        description: "왕실의 위엄을 지닌 세계 최고의 클럽"
    },

    "맨체스터 시티": {
        league: 1,
        players: [
            { name: "제임스 트래포드", position: "GK", country: "잉글랜드", age: 22, rating: 81 },
            { name: "후벵 디아스", position: "DF", country: "포르투갈", age: 28, rating: 87 },
            { name: "티자니 라인더르스", position: "MF", country: "네덜란드", age: 27, rating: 88 },
            { name: "존 스톤스", position: "DF", country: "잉글랜드", age: 31, rating: 77 },
            { name: "네이선 아케", position: "DF", country: "네덜란드", age: 30, rating: 79 },
            { name: "오마르 마르무시", position: "FW", country: "이집트", age: 26, rating: 88 },
            { name: "마테오 코바치치", position: "MF", country: "크로아티아", age: 31, rating: 83 },
            { name: "엘링 홀란드", position: "FW", country: "노르웨이", age: 25, rating: 94 },
            { name: "잭 그릴리쉬", position: "MF", country: "잉글랜드", age: 29, rating: 71 },
            { name: "제레미 도쿠", position: "MF", country: "벨기에", age: 23, rating: 85 },
            { name: "마커스 베티넬리", position: "GK", country: "잉글랜드", age: 33, rating: 62 },
            { name: "니코 곤살레스", position: "MF", country: "스페인", age: 27, rating: 81 },
            { name: "로드리", position: "MF", country: "스페인", age: 29, rating: 93 },
            { name: "슈테판 오르테가", position: "GK", country: "독일", age: 32, rating: 76 },
            { name: "일카이 귄도안", position: "MF", country: "독일", age: 34, rating: 82 },
            { name: "베르나르두 실바", position: "MF", country: "포르투갈", age: 30, rating: 84 },
            { name: "라얀 아이트누리", position: "DF", country: "알제리", age: 24, rating: 85 },
            { name: "비토르 헤이스", position: "DF", country: "브라질", age: 19, rating: 73 },
            { name: "요슈코 그바르디올", position: "DF", country: "크로아티아", age: 23, rating: 89 },
            { name: "마누엘 아칸지", position: "DF", country: "스위스", age: 30, rating: 78 },
            { name: "사비뉴", position: "FW", country: "브라질", age: 21, rating: 84 },
            { name: "마테우스 누네스", position: "MF", country: "포르투갈", age: 26, rating: 81 },
            { name: "라얀 셰르키", position: "MF", country: "프랑스", age: 21, rating: 87 },
            { name: "클라우디오 에체베리", position: "MF", country: "아르헨티나", age: 19, rating: 74 },
            { name: "에데르송", position: "GK", country: "브라질", age: 31, rating: 82 },
            { name: "필 포든", position: "FW", country: "잉글랜드", age: 25, rating: 87 },
            { name: "오스카르 보브", position: "MF", country: "노르웨이", age: 22, rating: 73 },
            { name: "리코 루이스", position: "DF", country: "잉글랜드", age: 20, rating: 79 }
        ],
        description: "천상의 축구를 구현하는 맨체스터의 블루 문"
    },

    "맨체스터 유나이티드": {
        league: 2,
        players: [
            { name: "알타이 바이은드르", position: "GK", country: "튀르키예", age: 27, rating: 69 },
            { name: "디오구 달로", position: "DF", country: "포르투갈", age: 26, rating: 77 },
            { name: "누사이르 마즈라위", position: "DF", country: "모로코", age: 27, rating: 84 },
            { name: "마테이스 더리흐트", position: "DF", country: "네덜란드", age: 25, rating: 82 },
            { name: "해리 매과이어", position: "DF", country: "잉글랜드", age: 32, rating: 80 },
            { name: "리산드로 마르티네스", position: "DF", country: "아르헨티나", age: 27, rating: 84 },
            { name: "메이슨 마운트", position: "MF", country: "잉글랜드", age: 26, rating: 76 },
            { name: "브루노 페르난데스", position: "MF", country: "포르투갈", age: 30, rating: 90 },
            { name: "라스무스 호일룬", position: "FW", country: "덴마크", age: 22, rating: 75 },
            { name: "마테우스 쿠냐", position: "FW", country: "브라질", age: 26, rating: 88 },
            { name: "조슈아 지르크지", position: "FW", country: "네덜란드", age: 24, rating: 76 },
            { name: "파트리크 도르구", position: "DF", country: "덴마크", age: 19, rating: 80 },
            { name: "레니 요로", position: "DF", country: "프랑스", age: 19, rating: 82 },
            { name: "아마드 디알로", position: "MF", country: "코트디부아르", age: 23, rating: 84 },
            { name: "알레한드로 가르나초", position: "FW", country: "아르헨티나", age: 21, rating: 82 },
            { name: "카세미루", position: "MF", country: "브라질", age: 33, rating: 83 },
            { name: "브라이언 음뵈모", position: "FW", country: "카메룬", age: 25, rating: 87 },
            { name: "톰 히튼", position: "GK", country: "잉글랜드", age: 39, rating: 62 },
            { name: "루크 쇼", position: "DF", country: "잉글랜드", age: 30, rating: 77 },
            { name: "안드레 오나나", position: "GK", country: "카메룬", age: 29, rating: 81 },
            { name: "마누엘 우가르테", position: "MF", country: "우루과이", age: 24, rating: 83 },
            { name: "코비 마이누", position: "MF", country: "잉글랜드", age: 20, rating: 78 }
        ],
        description: "붉은 악마들의 자존심과 전통"
    },

    "리버풀": {
        league: 1,
        players: [
            { name: "알리송 베케르", position: "GK", country: "브라질", age: 32, rating: 86 },
            { name: "조 고메즈", position: "DF", country: "잉글랜드", age: 28, rating: 75 },
            { name: "엔도 와타루", position: "MF", country: "일본", age: 32, rating: 74 },
            { name: "버질 반 다이크", position: "DF", country: "네덜란드", age: 34, rating: 92 },
            { name: "이브라히마 코나테", position: "DF", country: "프랑스", age: 26, rating: 86 },
            { name: "밀로시 케르케즈", position: "DF", country: "헝가리", age: 21, rating: 85 },
            { name: "플로리안 비르츠", position: "FW", country: "독일", age: 22, rating: 93 },
            { name: "도미니크 소보슬라이", position: "MF", country: "헝가리", age: 24, rating: 87 },
            { name: "다르윈 누녜스", position: "FW", country: "우루과이", age: 26, rating: 75 },
            { name: "알렉시스 맥 알리스터", position: "MF", country: "아르헨티나", age: 26, rating: 90 },
            { name: "모하메드 살라", position: "FW", country: "이집트", age: 33, rating: 94 },
            { name: "코너 브래들리", position: "DF", country: "북아일랜드", age: 22, rating: 76 },
            { name: "페데리코 키에사", position: "FW", country: "이탈리아", age: 27, rating: 82 },
            { name: "커티스 존스", position: "MF", country: "잉글랜드", age: 24, rating: 81 },
            { name: "코디 각포", position: "FW", country: "네덜란드", age: 26, rating: 84 },
            { name: "하비 엘리엇", position: "MF", country: "잉글랜드", age: 22, rating: 83 },
            { name: "코스타스 치미카스", position: "DF", country: "그리스", age: 29, rating: 73 },
            { name: "위고 에키티케", position: "FW", country: "프랑스", age: 23, rating: 86 },
            { name: "기오르기 마마르다슈빌리", position: "GK", country: "조지아", age: 24, rating: 81 },
            { name: "앤디 로버트슨", position: "DF", country: "스코틀랜드", age: 31, rating: 83 },
            { name: "제레미 프림퐁", position: "DF", country: "네덜란드", age: 24, rating: 87 },
            { name: "라이언 흐라벤베르흐", position: "MF", country: "네덜란드", age: 23, rating: 91 },
            { name: "스테판 바이체티치", position: "MF", country: "스페인", age: 20, rating: 67 },
            { name: "리스 윌리엄스", position: "DF", country: "잉글랜드", age: 24, rating: 66 },
            { name: "벤 도크", position: "FW", country: "스코틀랜드", age: 19, rating: 69 },
            { name: "타일러 모튼", position: "MF", country: "잉글랜드", age: 22, rating: 71 }
        ],
        description: "You'll Never Walk Alone - 리버풀의 불굴의 정신"
    },

    "토트넘 홋스퍼": {
        league: 1,
        players: [
            { name: "굴리엘모 비카리오", position: "GK", country: "이탈리아", age: 28, rating: 84 },
            { name: "케빈 단조", position: "DF", country: "오스트리아", age: 26, rating: 81 },
            { name: "라두 드라구신", position: "DF", country: "루마니아", age: 23, rating: 76 },
            { name: "손흥민", position: "FW", country: "대한민국", age: 33, rating: 93 },
            { name: "이브 비수마", position: "MF", country: "말리", age: 28, rating: 82 },
            { name: "히샬리송", position: "FW", country: "브라질", age: 28, rating: 77 },
            { name: "제임스 매디슨", position: "MF", country: "잉글랜드", age: 28, rating: 85 },
            { name: "마티스 텔", position: "FW", country: "프랑스", age: 20, rating: 78 },
            { name: "데스티니 우도기", position: "DF", country: "이탈리아", age: 22, rating: 84 },
            { name: "아치 그레이", position: "MF", country: "잉글랜드", age: 19, rating: 82 },
            { name: "루카스 베리발", position: "MF", country: "스웨덴", age: 19, rating: 82 },
            { name: "크리스티안 로메로", position: "DF", country: "아르헨티나", age: 27, rating: 88 },
            { name: "양민혁", position: "FW", country: "대한민국", age: 19, rating: 85 },
            { name: "도미닉 솔랑케", position: "FW", country: "잉글랜드", age: 27, rating: 86 },
            { name: "모하메드 쿠두스", position: "FW", country: "가나", age: 25, rating: 87 },
            { name: "데얀 쿨루셉스키", position: "MF", country: "스웨덴", age: 25, rating: 85 },
            { name: "브레넌 존슨", position: "FW", country: "웨일스", age: 24, rating: 82 },
            { name: "페드로 포로", position: "DF", country: "스페인", age: 25, rating: 86 },
            { name: "제드 스펜스", position: "DF", country: "잉글랜드", age: 24, rating: 77 },
            { name: "마노르 솔로몬", position: "FW", country: "이스라엘", age: 26, rating: 78 },
            { name: "윌손 오도베르", position: "FW", country: "프랑스", age: 20, rating: 75 },
            { name: "파페 마타르 사르", position: "MF", country: "세네갈", age: 22, rating: 83 },
            { name: "로드리고 벤쿠르", position: "MF", country: "우루과이", age: 28, rating: 81 },
            { name: "안토닌 킨스키", position: "GK", country: "체코", age: 22, rating: 73 },
            { name: "벤 데이비스", position: "DF", country: "웨일스", age: 32, rating: 76 },
            { name: "미키 판더벤", position: "DF", country: "네덜란드", age: 24, rating: 86 },
            { name: "브랜던 오스틴", position: "GK", country: "미국", age: 25, rating: 65 },
            { name: "데인 스칼렛", position: "FW", country: "잉글랜드", age: 21, rating: 68 },
            { name: "알피 디바인", position: "MF", country: "잉글랜드", age: 20, rating: 66 },
            { name: "루카 부슈코비치", position: "DF", country: "크로아티아", age: 18, rating: 68 },
            { name: "타카이 코타", position: "DF", country: "일본", age: 20, rating: 71 }
        ],
        description: "To Dare Is To Do - 스퍼스의 도전 정신"
    },

    "파리 생제르맹": {
        league: 1,
        players: [
            { name: "잔루이지 돈나룸마", position: "GK", country: "이탈리아", age: 26, rating: 87 },
            { name: "아슈라프 하키미", position: "DF", country: "모로코", age: 26, rating: 92 },
            { name: "프레스넬 킴펨베", position: "DF", country: "프랑스", age: 29, rating: 69 },
            { name: "루카스 베랄두", position: "DF", country: "브라질", age: 21, rating: 75 },
            { name: "마르퀴뇨스", position: "DF", country: "브라질", age: 31, rating: 85 },
            { name: "흐비차 크바라츠헬리아", position: "FW", country: "조지아", age: 24, rating: 93 },
            { name: "파비안 루이스", position: "MF", country: "스페인", age: 29, rating: 83 },
            { name: "곤살루 하무스", position: "FW", country: "포르투갈", age: 24, rating: 75 },
            { name: "우스만 뎀벨레", position: "FW", country: "프랑스", age: 28, rating: 95 },
            { name: "데지레 두에", position: "FW", country: "프랑스", age: 20, rating: 89 },
            { name: "비티냐", position: "MF", country: "포르투갈", age: 25, rating: 93 },
            { name: "이강인", position: "MF", country: "대한민국", age: 24, rating: 82 },
            { name: "뤼카 에르난데스", position: "DF", country: "프랑스", age: 29, rating: 77 },
            { name: "세니 마율루", position: "MF", country: "프랑스", age: 19, rating: 73 },
            { name: "누누 멘데스", position: "DF", country: "포르투갈", age: 23, rating: 91 },
            { name: "브래들리 바르콜라", position: "FW", country: "프랑스", age: 22, rating: 86 },
            { name: "워렌 자이르에메리", position: "MF", country: "프랑스", age: 19, rating: 82 },
            { name: "마트베이 사포노프", position: "GK", country: "러시아", age: 26, rating: 68 },
            { name: "윌리안 파초", position: "DF", country: "에콰도르", age: 23, rating: 83 },
            { name: "아르나우 테나스", position: "GK", country: "스페인", age: 24, rating: 72 },
            { name: "주앙 네베스", position: "MF", country: "포르투갈", age: 20, rating: 92 }
        ],
        description: "파리의 별들이 빛나는 세계 최고의 무대"
    },

    "AC 밀란": {
        league: 1,
        players: [
            { name: "피에트로 테라치아노", position: "GK", country: "이탈리아", age: 21, rating: 67 },
            { name: "사무엘레 리치", position: "FW", country: "이탈리아", age: 22, rating: 80 },
            { name: "산티아고 히메네스", position: "FW", country: "멕시코", age: 24, rating: 83 },
            { name: "루벤 로프터스치크", position: "MF", country: "잉글랜드", age: 29, rating: 81 },
            { name: "하파엘 레앙", position: "FW", country: "포르투갈", age: 26, rating: 89 },
            { name: "크리스천 풀리식", position: "FW", country: "미국", age: 26, rating: 90 },
            { name: "루카 모드리치", position: "MF", country: "크로아티아", age: 39, rating: 85 },
            { name: "마이크 메냥", position: "GK", country: "프랑스", age: 30, rating: 85 },
            { name: "알렉스 히메네스", position: "DF", country: "스페인", age: 20, rating: 73 },
            { name: "사무엘 추쿠에제", position: "FW", country: "나이지리아", age: 26, rating: 76 },
            { name: "에메르송 로얄", position: "DF", country: "브라질", age: 26, rating: 72 },
            { name: "피카요 토모리", position: "DF", country: "잉글랜드", age: 27, rating: 85 },
            { name: "말릭 티아우", position: "DF", country: "독일", age: 23, rating: 78 },
            { name: "유수프 포파나", position: "MF", country: "프랑스", age: 26, rating: 82 },
            { name: "스트라히냐 파블로비치", position: "DF", country: "세르비아", age: 24, rating: 77 },
            { name: "워렌 본도", position: "MF", country: "프랑스", age: 23, rating: 67 },
            { name: "필리포 테라치아노", position: "DF", country: "이탈리아", age: 22, rating: 67 },
            { name: "마테오 가비아", position: "DF", country: "이탈리아", age: 25, rating: 80 },
            { name: "유누스 무사", position: "MF", country: "미국", age: 22, rating: 77 }
        ],
        description: "로소네리의 전통과 명예를 이어가는 밀라노의 자존심"
    },

    "인터 밀란": {
        league: 1,
        players: [
            { name: "얀 조머", position: "GK", country: "스위스", age: 36, rating: 83 },
            { name: "덴젤 둠프리스", position: "DF", country: "네덜란드", age: 29, rating: 87 },
            { name: "스테판 더프레이", position: "DF", country: "네덜란드", age: 33, rating: 74 },
            { name: "피오트르 지엘린스키", position: "MF", country: "폴란드", age: 31, rating: 81 },
            { name: "페타르 수치치", position: "MF", country: "크로아티아", age: 22, rating: 72 },
            { name: "마르쿠스 튀랑", position: "FW", country: "프랑스", age: 27, rating: 87 },
            { name: "라우타로 마르티네스", position: "FW", country: "아르헨티나", age: 27, rating: 90 },
            { name: "루이스 엔히키", position: "FW", country: "브라질", age: 24, rating: 72 },
            { name: "라파엘레 디젠나로", position: "GK", country: "이탈리아", age: 25, rating: 67 },
            { name: "주젭 마르티네스", position: "GK", country: "스페인", age: 27, rating: 69 },
            { name: "프란체스코 아체르비", position: "DF", country: "이탈리아", age: 37, rating: 83 },
            { name: "다비데 프라테시", position: "MF", country: "이탈리아", age: 25, rating: 82 },
            { name: "하칸 찰하놀루", position: "MF", country: "튀르키예", age: 31, rating: 89 },
            { name: "크리스티안 아슬라니", position: "MF", country: "알바니아", age: 23, rating: 79 },
            { name: "헨리크 미키타리안", position: "MF", country: "아르메니아", age: 36, rating: 75 },
            { name: "니콜로 바렐라", position: "MF", country: "이탈리아", age: 28, rating: 91 },
            { name: "뱅자맹 파바르", position: "DF", country: "프랑스", age: 29, rating: 81 },
            { name: "카를루스 아우구스투", position: "DF", country: "브라질", age: 26, rating: 77 },
            { name: "얀 아우렐 비세크", position: "DF", country: "독일", age: 24, rating: 73 },
            { name: "페데리코 디마르코", position: "DF", country: "이탈리아", age: 27, rating: 87 },
            { name: "마테오 다르미안", position: "DF", country: "이탈리아", age: 35, rating: 71 },
            { name: "니콜라 잘레프스키", position: "DF", country: "폴란드", age: 23, rating: 74 },
            { name: "알레산드로 바스토니", position: "DF", country: "이탈리아", age: 26, rating: 90 },
            { name: "메흐디 타레미", position: "FW", country: "이란", age: 33, rating: 69 }
        ],
        description: "네라추리의 위대한 전통을 이어가는 밀라노의 또 다른 자존심"
    },

    "아스널": {
        league: 1,
        players: [
            { name: "다비드 라야", position: "GK", country: "스페인", age: 29, rating: 85 },
            { name: "윌리엄 살리바", position: "DF", country: "프랑스", age: 24, rating: 85 },
            { name: "크리스티안 모스케라", position: "DF", country: "스페인", age: 21, rating: 73 },
            { name: "벤 화이트", position: "DF", country: "잉글랜드", age: 27, rating: 78 },
            { name: "가브리에우 마갈량이스", position: "DF", country: "브라질", age: 27, rating: 90 },
            { name: "부카요 사카", position: "FW", country: "잉글랜드", age: 23, rating: 91 },
            { name: "마르틴 외데고르", position: "MF", country: "노르웨이", age: 26, rating: 86 },
            { name: "가브리에우 제주스", position: "FW", country: "브라질", age: 28, rating: 75 },
            { name: "가브리에우 마르티넬리", position: "FW", country: "브라질", age: 24, rating: 85 },
            { name: "위리엔 팀버르", position: "DF", country: "네덜란드", age: 24, rating: 85 },
            { name: "케파 아리사발라가", position: "GK", country: "스페인", age: 30, rating: 74 },
            { name: "빅토르 요케레스", position: "FW", country: "스웨덴", age: 27, rating: 90 },
            { name: "야쿠프 키비오르", position: "DF", country: "폴란드", age: 25, rating: 81 },
            { name: "크리스티안 뇌르고르", position: "MF", country: "덴마크", age: 31, rating: 76 },
            { name: "올렉산드르 진첸코", position: "DF", country: "우크라이나", age: 28, rating: 76 },
            { name: "레안드로 트로사르", position: "MF", country: "벨기에", age: 30, rating: 78 },
            { name: "노니 마두에케", position: "FW", country: "잉글랜드", age: 23, rating: 77 },
            { name: "에단 은와네리", position: "FW", country: "잉글랜드", age: 18, rating: 75 },
            { name: "미켈 메리노", position: "MF", country: "스페인", age: 29, rating: 83 },
            { name: "카이 하베르츠", position: "MF", country: "독일", age: 26, rating: 80 },
            { name: "리카르도 칼라피오리", position: "DF", country: "이탈리아", age: 23, rating: 85 },
            { name: "마르틴 수비멘디", position: "MF", country: "스페인", age: 26, rating: 87 },
            { name: "데클란 라이스", position: "MF", country: "잉글랜드", age: 26, rating: 91 },
            { name: "마일스 루이스스켈리", position: "DF", country: "잉글랜드", age: 19, rating: 83 }
        ],
        description: "거너스의 아름다운 축구와 불굴의 정신력"
    },

    "나폴리": {
        league: 1,
        players: [
            { name: "알렉스 메렛", position: "GK", country: "이탈리아", age: 28, rating: 83 },
            { name: "알레산드로 부온조르노", position: "DF", country: "이탈리아", age: 26, rating: 85 },
            { name: "주앙 제주스", position: "DF", country: "브라질", age: 34, rating: 72 },
            { name: "빌리 길모어", position: "MF", country: "스코틀랜드", age: 24, rating: 81 },
            { name: "다비드 네리스", position: "FW", country: "브라질", age: 28, rating: 76 },
            { name: "스콧 맥토미니", position: "MF", country: "스코틀랜드", age: 28, rating: 92 },
            { name: "노아 오카포르", position: "FW", country: "스위스", age: 25, rating: 74 },
            { name: "로멜루 루카쿠", position: "FW", country: "벨기에", age: 32, rating: 86 },
            { name: "아미르 라흐마니", position: "DF", country: "코소보", age: 31, rating: 82 },
            { name: "니키타 콘티니", position: "GK", country: "이탈리아", age: 29, rating: 65 },
            { name: "필리프 빌링", position: "MF", country: "덴마크", age: 28, rating: 76 },
            { name: "라파 마린", position: "MF", country: "스페인", age: 23, rating: 74 },
            { name: "마티아스 올리베라", position: "DF", country: "우루과이", age: 27, rating: 83 },
            { name: "지오바니 시메오네", position: "FW", country: "아르헨티나", age: 30, rating: 74 },
            { name: "마테오 폴리타노", position: "FW", country: "이탈리아", age: 31, rating: 85 },
            { name: "조반니 디 로렌초", position: "DF", country: "이탈리아", age: 31, rating: 87 },
            { name: "시릴 은곤게", position: "FW", country: "벨기에", age: 30, rating: 67 },
            { name: "케빈 더 브라위너", position: "MF", country: "벨기에", age: 34, rating: 87 },
            { name: "레오나르도 스피나촐라", position: "DF", country: "이탈리아", age: 32, rating: 81 },
            { name: "스타니슬라프 로보트카", position: "MF", country: "슬로바키아", age: 30, rating: 84 },
            { name: "자코모 라스파도리", position: "FW", country: "이탈리아", age: 25, rating: 85 },
            { name: "시모네 스쿠페트", position: "GK", country: "이탈리아", age: 29, rating: 67 },
            { name: "앙드레프랑크 잠보 앙귀사", position: "MF", country: "카메룬", age: 29, rating: 82 }
        ],
        description: "남부 이탈리아의 열정과 자존심을 대표하는 파르테노페이"
    },

    "첼시": {
        league: 1,
        players: [
            { name: "로베르트 산체스", position: "GK", country: "스페인", age: 27, rating: 81 },
            { name: "마르크 쿠쿠레야", position: "DF", country: "스페인", age: 27, rating: 88 },
            { name: "토신 아다라비오요", position: "DF", country: "잉글랜드", age: 27, rating: 77 },
            { name: "브누아 바디아실", position: "DF", country: "프랑스", age: 24, rating: 76 },
            { name: "리바이 콜윌", position: "DF", country: "잉글랜드", age: 22, rating: 84 },
            { name: "페드루 네투", position: "FW", country: "포르투갈", age: 25, rating: 83 },
            { name: "엔소 페르난데스", position: "MF", country: "아르헨티나", age: 24, rating: 90 },
            { name: "리암 델랍", position: "FW", country: "잉글랜드", age: 22, rating: 81 },
            { name: "콜 파머", position: "MF", country: "잉글랜드", age: 23, rating: 91 },
            { name: "필립 요르겐센", position: "GK", country: "덴마크", age: 23, rating: 72 },
            { name: "다리우 이수구", position: "MF", country: "포르투갈", age: 21, rating: 73 },
            { name: "니콜라 잭슨", position: "FW", country: "세네갈", age: 24, rating: 79 },
            { name: "안드레이 산투스", position: "MF", country: "브라질", age: 21, rating: 86 },
            { name: "크리스토퍼 은쿤쿠", position: "FW", country: "프랑스", age: 27, rating: 75 },
            { name: "마마두 사르", position: "DF", country: "프랑스", age: 19, rating: 74 },
            { name: "주앙 페드루", position: "FW", country: "브라질", age: 24, rating: 86 },
            { name: "키어넌 듀스버리홀", position: "MF", country: "잉글랜드", age: 26, rating: 77 },
            { name: "트레보 찰로바", position: "DF", country: "잉글랜드", age: 26, rating: 80 },
            { name: "리스 제임스", position: "DF", country: "잉글랜드", age: 25, rating: 88 },
            { name: "모이세스 카이세도", position: "MF", country: "에콰도르", age: 23, rating: 91 },
            { name: "말로 귀스토", position: "DF", country: "프랑스", age: 22, rating: 84 },
            { name: "웨슬리 포파나", position: "DF", country: "프랑스", age: 24, rating: 79 },
            { name: "아론 안셀미노", position: "DF", country: "아르헨티나", age: 20, rating: 72 },
            { name: "타이리크 조지", position: "FW", country: "잉글랜드", age: 20, rating: 64 },
            { name: "조시 아체암퐁", position: "DF", country: "잉글랜드", age: 18, rating: 69 },
            { name: "오마리 켈리먼", position: "MF", country: "잉글랜드", age: 19, rating: 66 },
            { name: "마르크 기우", position: "FW", country: "스페인", age: 19, rating: 71 },
            { name: "가브리엘 슬로니나", position: "GK", country: "미국", age: 21, rating: 68 },
            { name: "로메오 라비아", position: "MF", country: "벨기에", age: 21, rating: 82 },
            { name: "제이미 기튼스", position: "FW", country: "잉글랜드", age: 20, rating: 83 }
        ],
        description: "블루스의 강력한 투지와 승부근성"
    },

    "바이에른 뮌헨": {
        league: 1,
        players: [
            { name: "마누엘 노이어", position: "GK", country: "독일", age: 39, rating: 83 },
            { name: "다요 우파메카노", position: "DF", country: "프랑스", age: 26, rating: 85 },
            { name: "김민재", position: "DF", country: "대한민국", age: 28, rating: 86 },
            { name: "요나단 타", position: "DF", country: "독일", age: 29, rating: 87 },
            { name: "요주아 키미히", position: "MF", country: "독일", age: 30, rating: 90 },
            { name: "세르주 그나브리", position: "FW", country: "독일", age: 30, rating: 77 },
            { name: "레온 고레츠카", position: "MF", country: "독일", age: 30, rating: 85 },
            { name: "해리 케인", position: "FW", country: "잉글랜드", age: 32, rating: 93 },
            { name: "자말 무시알라", position: "MF", country: "독일", age: 22, rating: 93 },
            { name: "킹슬리 코망", position: "FW", country: "프랑스", age: 29, rating: 80 },
            { name: "루이스 디아스", position: "MF", country: "콜롬비아", age: 28, rating: 87 },
            { name: "주앙 팔리냐", position: "MF", country: "포르투갈", age: 30, rating: 79 },
            { name: "마이클 올리세", position: "FW", country: "프랑스", age: 23, rating: 88 },
            { name: "알폰소 데이비스", position: "DF", country: "캐나다", age: 24, rating: 87 },
            { name: "이토 히로키", position: "DF", country: "일본", age: 26, rating: 75 },
            { name: "라파엘 게헤이루", position: "DF", country: "포르투갈", age: 31, rating: 77 },
            { name: "사샤 보이", position: "DF", country: "프랑스", age: 24, rating: 73 },
            { name: "스벤 울라이히", position: "GK", country: "독일", age: 36, rating: 67 },
            { name: "콘라트 라이머", position: "MF", country: "오스트리아", age: 28, rating: 81 },
            { name: "요시프 스타니시치", position: "DF", country: "크로아티아", age: 25, rating: 76 },
            { name: "알렉산다르 파블로비치", position: "MF", country: "독일", age: 21, rating: 85 },
            { name: "파울 바너", position: "MF", country: "독일", age: 19, rating: 67 }
        ],
        description: "독일 축구의 자존심이자 바바리아의 왕자들"
    },

    "아틀레티코 마드리드": {
        league: 1,
        players: [
            { name: "후안 무소", position: "GK", country: "아르헨티나", age: 31, rating: 70 },
            { name: "호세 히메네스", position: "DF", country: "우루과이", age: 30, rating: 84 },
            { name: "마테오 루제리", position: "DF", country: "이탈리아", age: 23, rating: 79 },
            { name: "코너 갤러거", position: "MF", country: "잉글랜드", age: 25, rating: 83 },
            { name: "조니 카르도주", position: "MF", country: "미국", age: 23, rating: 81 },
            { name: "코케", position: "MF", country: "스페인", age: 33, rating: 82 },
            { name: "앙투안 그리즈만", position: "FW", country: "프랑스", age: 34, rating: 90 },
            { name: "파블로 바리오스", position: "MF", country: "스페인", age: 22, rating: 85 },
            { name: "알렉산데르 쇠를로트", position: "FW", country: "노르웨이", age: 29, rating: 81 },
            { name: "알렉스 바에나", position: "MF", country: "스페인", age: 24, rating: 86 },
            { name: "티아고 알마다", position: "FW", country: "아르헨티나", age: 24, rating: 75 },
            { name: "얀 오블락", position: "GK", country: "슬로베니아", age: 32, rating: 86 },
            { name: "마르코스 요렌테", position: "MF", country: "스페인", age: 30, rating: 84 },
            { name: "클레망 랑글레", position: "DF", country: "프랑스", age: 30, rating: 87 },
            { name: "나우엘 몰리나", position: "DF", country: "아르헨티나", age: 27, rating: 82 },
            { name: "다비드 한츠코", position: "DF", country: "슬로바키아", age: 27, rating: 83 },
            { name: "마르크 푸빌", position: "DF", country: "스페인", age: 22, rating: 67 },
            { name: "훌리안 알바레스", position: "FW", country: "아르헨티나", age: 25, rating: 90 },
            { name: "하비 갈란", position: "DF", country: "스페인", age: 30, rating: 72 },
            { name: "줄리아노 시메오네", position: "FW", country: "아르헨티나", age: 22, rating: 81 },
            { name: "로뱅 르노르망", position: "DF", country: "스페인", age: 28, rating: 82 },
            { name: "카를로스 마르틴", position: "FW", country: "스페인", age: 23, rating: 67 }
        ],
        description: "콜치오네로스의 불굴의 투지와 승부욕"
    },

    "도르트문트": {
        league: 1,
        players: [
            { name: "그레고어 코벨", position: "GK", country: "스위스", age: 27, rating: 85 },
            { name: "얀 코투", position: "DF", country: "브라질", age: 23, rating: 82 },
            { name: "발데마르 안톤", position: "DF", country: "독일", age: 29, rating: 78 },
            { name: "니코 슐로터베크", position: "DF", country: "독일", age: 25, rating: 86 },
            { name: "라미 벤세바이니", position: "DF", country: "알제리", age: 30, rating: 81 },
            { name: "살리흐 외즈잔", position: "MF", country: "튀르키예", age: 27, rating: 72 },
            { name: "펠릭스 은메차", position: "MF", country: "독일", age: 24, rating: 80 },
            { name: "세루 기라시", position: "FW", country: "기니", age: 29, rating: 91 },
            { name: "율리안 브란트", position: "MF", country: "독일", age: 29, rating: 86 },
            { name: "파스칼 그로스", position: "MF", country: "독일", age: 34, rating: 83 },
            { name: "막시밀리안 바이어", position: "FW", country: "독일", age: 22, rating: 80 },
            { name: "쥘리앵 뒤랑빌", position: "FW", country: "벨기에", age: 19, rating: 73 },
            { name: "카니 추쿠에메카", position: "MF", country: "잉글랜드", age: 21, rating: 77 },
            { name: "마르셀 자비처", position: "MF", country: "오스트리아", age: 31, rating: 81 },
            { name: "엠레 잔", position: "MF", country: "독일", age: 31, rating: 75 },
            { name: "율리안 뤼에르손", position: "DF", country: "노르웨이", age: 27, rating: 84 },
            { name: "카림 아데예미", position: "FW", country: "독일", age: 23, rating: 85 },
            { name: "실라스 오스트신스키", position: "GK", country: "폴란드", age: 21, rating: 67 },
            { name: "알렉산더 마이어", position: "GK", country: "독일", age: 34, rating: 65 },
            { name: "마르셀 로트카", position: "GK", country: "폴란드", age: 24, rating: 67 },
            { name: "콜 캠벨", position: "FW", country: "미국", age: 19, rating: 70 },
            { name: "키엘 베티엔", position: "MF", country: "독일", age: 19, rating: 67 },
            { name: "알무게라 카바르", position: "DF", country: "독일", age: 19, rating: 66 },
            { name: "다니엘 스벤슨", position: "DF", country: "스웨덴", age: 23, rating: 82 }
        ],
        description: "보루시아의 노란 벽과 함께하는 젊은 열정"
    },

    // 2부 리그
    "유벤투스": {
        league: 2,
        players: [
            { name: "마티아 페린", position: "GK", country: "이탈리아", age: 35, rating: 72 },
            { name: "알베르투 코스타", position: "DF", country: "포르투갈", age: 21, rating: 67 },
            { name: "글레이송 브레메르", position: "DF", country: "브라질", age: 28, rating: 86 },
            { name: "페데리코 가티", position: "DF", country: "이탈리아", age: 27, rating: 83 },
            { name: "마누엘 로카텔리", position: "MF", country: "이탈리아", age: 27, rating: 79 },
            { name: "로이드 켈리", position: "DF", country: "잉글랜드", age: 26, rating: 74 },
            { name: "프란시스쿠 콘세이상", position: "FW", country: "포르투갈", age: 22, rating: 82 },
            { name: "퇸 코프메이너르스", position: "MF", country: "네덜란드", age: 27, rating: 85 },
            { name: "두샨 블라호비치", position: "FW", country: "세르비아", age: 25, rating: 84 },
            { name: "케난 일디즈", position: "FW", country: "튀르키예", age: 20, rating: 87 },
            { name: "니코 곤살레스", position: "FW", country: "아르헨티나", age: 27, rating: 82 },
            { name: "아르카디우스 밀리크", position: "FW", country: "폴란드", age: 31, rating: 69 },
            { name: "피에르 칼룰루", position: "DF", country: "프랑스", age: 25, rating: 80 },
            { name: "웨스턴 맥케니", position: "MF", country: "미국", age: 26, rating: 81 },
            { name: "바실리예 아지치", position: "MF", country: "몬테네그로", age: 19, rating: 67 },
            { name: "케프랑 튀랑", position: "MF", country: "프랑스", age: 24, rating: 84 },
            { name: "랑달 콜로 무아니", position: "FW", country: "프랑스", age: 26, rating: 82 },
            { name: "조너선 데이비드", position: "FW", country: "캐나다", age: 25, rating: 86 },
            { name: "카를로 핀솔리오", position: "GK", country: "이탈리아", age: 35, rating: 66 },
            { name: "도글라스 루이스", position: "MF", country: "브라질", age: 27, rating: 85 },
            { name: "안드레아 캄비아소", position: "DF", country: "이탈리아", age: 25, rating: 86 },
            { name: "미켈레 디그레고리오", position: "GK", country: "이탈리아", age: 28, rating: 80 },
            { name: "후안 카발", position: "DF", country: "콜롬비아", age: 24, rating: 74 },
            { name: "니콜로 사보나", position: "DF", country: "이탈리아", age: 22, rating: 70 },
            { name: "요나스 로우히", position: "DF", country: "스웨덴", age: 21, rating: 68 },
            { name: "사무엘 음방굴라", position: "FW", country: "벨기에", age: 21, rating: 75 }
        ],
        description: "비앙코네리의 전통과 명예를 되찾기 위한 도전"
    },

    "뉴캐슬 유나이티드": {
        league: 2,
        players: [
            { name: "마르틴 두브라프카", position: "GK", country: "슬로바키아", age: 36, rating: 71 },
            { name: "키어런 트리피어", position: "DF", country: "잉글랜드", age: 34, rating: 82 },
            { name: "스벤 보트만", position: "DF", country: "네덜란드", age: 25, rating: 83 },
            { name: "파비안 셰어", position: "DF", country: "스위스", age: 33, rating: 84 },
            { name: "자말 라셀스", position: "DF", country: "잉글랜드", age: 31, rating: 75 },
            { name: "조엘린통", position: "MF", country: "브라질", age: 28, rating: 84 },
            { name: "산드로 토날리", position: "MF", country: "이탈리아", age: 25, rating: 89 },
            { name: "칼럼 윌슨", position: "FW", country: "잉글랜드", age: 33, rating: 74 },
            { name: "앤서니 고든", position: "FW", country: "잉글랜드", age: 24, rating: 87 },
            { name: "하비 반스", position: "FW", country: "잉글랜드", age: 27, rating: 81 },
            { name: "맷 타겟", position: "DF", country: "잉글랜드", age: 29, rating: 74 },
            { name: "알렉산데르 이사크", position: "FW", country: "스웨덴", age: 25, rating: 92 },
            { name: "에밀 크라프트", position: "DF", country: "스웨덴", age: 31, rating: 71 },
            { name: "윌리엄 오술라", position: "FW", country: "덴마크", age: 21, rating: 72 },
            { name: "오디세아스 블라호디모스", position: "GK", country: "그리스", age: 31, rating: 72 },
            { name: "루이스 홀", position: "DF", country: "잉글랜드", age: 20, rating: 84 },
            { name: "티노 리브라멘토", position: "DF", country: "잉글랜드", age: 22, rating: 85 },
            { name: "닉 포프", position: "GK", country: "잉글랜드", age: 33, rating: 81 },
            { name: "제이콥 머피", position: "FW", country: "잉글랜드", age: 30, rating: 84 },
            { name: "존 러디", position: "GK", country: "잉글랜드", age: 38, rating: 66 },
            { name: "조 윌록", position: "MF", country: "잉글랜드", age: 25, rating: 73 },
            { name: "마크 길레스피", position: "GK", country: "스코틀랜드", age: 33, rating: 70 },
            { name: "댄 번", position: "DF", country: "잉글랜드", age: 33, rating: 83 },
            { name: "션 롱스태프", position: "MF", country: "잉글랜드", age: 27, rating: 77 },
            { name: "브루누 기마랑이스", position: "MF", country: "브라질", age: 27, rating: 90 },
            { name: "루이스 마일리", position: "MF", country: "잉글랜드", age: 19, rating: 72 }
        ],
        description: "마그파이스의 재기를 꿈꾸는 타인 사이드의 열정"
    },

    "아스톤 빌라": {
        league: 2,
        players: [
            { name: "매티 캐시", position: "DF", country: "폴란드", age: 27, rating: 83 },
            { name: "악셀 디사시", position: "DF", country: "프랑스", age: 27, rating: 77 },
            { name: "에즈리 콘사", position: "DF", country: "잉글랜드", age: 27, rating: 75 },
            { name: "타이론 밍스", position: "DF", country: "잉글랜드", age: 31, rating: 72 },
            { name: "로스 바클리", position: "MF", country: "잉글랜드", age: 31, rating: 75 },
            { name: "존 맥긴", position: "MF", country: "스코틀랜드", age: 30, rating: 82 },
            { name: "유리 틸레만스", position: "MF", country: "벨기에", age: 28, rating: 88 },
            { name: "올리 왓킨스", position: "FW", country: "잉글랜드", age: 29, rating: 87 },
            { name: "뤼카 디뉴", position: "DF", country: "프랑스", age: 32, rating: 71 },
            { name: "파우 토레스", position: "DF", country: "스페인", age: 28, rating: 85 },
            { name: "안드레스 가르시아", position: "DF", country: "스페인", age: 22, rating: 68 },
            { name: "도니얼 말런", position: "FW", country: "네덜란드", age: 26, rating: 83 },
            { name: "마르코 아센시오", position: "FW", country: "스페인", age: 29, rating: 79 },
            { name: "이안 마트센", position: "DF", country: "네덜란드", age: 23, rating: 82 },
            { name: "에밀리아노 마르티네스", position: "GK", country: "아르헨티나", age: 32, rating: 85 },
            { name: "아마두 오나나", position: "MF", country: "벨기에", age: 23, rating: 84 },
            { name: "로빈 올센", position: "GK", country: "스웨덴", age: 35, rating: 69 },
            { name: "라마어 보하르더", position: "DF", country: "네덜란드", age: 21, rating: 71 },
            { name: "모건 로저스", position: "FW", country: "잉글랜드", age: 23, rating: 86 },
            { name: "코트니 호즈", position: "DF", country: "잉글랜드", age: 30, rating: 71 },
            { name: "레온 베일리", position: "FW", country: "자메이카", age: 27, rating: 82 },
            { name: "제이콥 램지", position: "MF", country: "잉글랜드", age: 24, rating: 79 },
            { name: "부바카르 카마라", position: "MF", country: "프랑스", age: 25, rating: 82 },
            { name: "올리비에르 지크", position: "GK", country: "폴란드", age: 21, rating: 67 }
        ],
        description: "빌라 파크의 자존심을 되찾기 위한 클라렛과 블루의 부활"
    },

    "라이프치히": {
        league: 2,
        players: [
            { name: "페테르 굴라치", position: "GK", country: "헝가리", age: 35, rating: 81 },
            { name: "뤼츠하럴 헤이르트라위다", position: "DF", country: "네덜란드", age: 25, rating: 83 },
            { name: "빌리 오르반", position: "DF", country: "헝가리", age: 32, rating: 83 },
            { name: "엘 샤데유 비치아부", position: "DF", country: "프랑스", age: 20, rating: 77 },
            { name: "안토니오 누사", position: "MF", country: "노르웨이", age: 20, rating: 84 },
            { name: "아마두 아이다라", position: "MF", country: "말리", age: 27, rating: 81 },
            { name: "유수프 포울센", position: "FW", country: "덴마크", age: 31, rating: 73 },
            { name: "사비 시몬스", position: "MF", country: "네덜란드", age: 22, rating: 90 },
            { name: "로이스 오펜다", position: "FW", country: "벨기에", age: 25, rating: 87 },
            { name: "니콜라스 자이발트", position: "MF", country: "오스트리아", age: 24, rating: 80 },
            { name: "크리스토프 바움가르트너", position: "MF", country: "오스트리아", age: 26, rating: 78 },
            { name: "루카스 클로스터만", position: "DF", country: "독일", age: 29, rating: 81 },
            { name: "리들레 바쿠", position: "DF", country: "독일", age: 27, rating: 78 },
            { name: "아르투르 베르미렌", position: "MF", country: "벨기에", age: 20, rating: 79 },
            { name: "아산 웨드라오고", position: "MF", country: "독일", age: 19, rating: 70 },
            { name: "코스타 네델코비치", position: "DF", country: "세르비아", age: 20, rating: 67 },
            { name: "다비트 라움", position: "DF", country: "독일", age: 27, rating: 84 },
            { name: "카스텔로 뤼케바", position: "DF", country: "프랑스", age: 22, rating: 76 },
            { name: "크사버 슐라거", position: "MF", country: "오스트리아", age: 27, rating: 82 },
            { name: "마르턴 판더보르트", position: "GK", country: "벨기에", age: 23, rating: 81 },
            { name: "베냐민 셰슈코", position: "FW", country: "슬로베니아", age: 22, rating: 87 },
            { name: "베냐민 헨릭스", position: "DF", country: "독일", age: 28, rating: 76 },
            { name: "케빈 캄플", position: "MF", country: "슬로베니아", age: 34, rating: 69 }
        ],
        description: "라이프치히의 젊은 에너지와 혁신적인 축구"
    },

    "세비야": {
        league: 2,
        players: [
            { name: "알바로 페르난데스", position: "GK", country: "스페인", age: 27, rating: 73 },
            { name: "아드리아 페드로사", position: "DF", country: "스페인", age: 27, rating: 76 },
            { name: "키케 살라스", position: "DF", country: "스페인", age: 23, rating: 79 },
            { name: "루벤 바르가스", position: "FW", country: "스위스", age: 26, rating: 78 },
            { name: "네마냐 구데이", position: "MF", country: "세르비아", age: 33, rating: 78 },
            { name: "이삭 로메로", position: "FW", country: "스페인", age: 25, rating: 74 },
            { name: "도디 루케바키오", position: "FW", country: "벨기에", age: 27, rating: 84 },
            { name: "외르얀 뉠란", position: "GK", country: "노르웨이", age: 34, rating: 75 },
            { name: "페케", position: "FW", country: "스페인", age: 24, rating: 74 },
            { name: "아코르 아담스", position: "FW", country: "나이지리아", age: 30, rating: 71 },
            { name: "뤼시앵 아구메", position: "MF", country: "프랑스", age: 23, rating: 83 },
            { name: "지브릴 소우", position: "MF", country: "스위스", age: 28, rating: 82 },
            { name: "치데라 에주케", position: "FW", country: "나이지리아", age: 27, rating: 72 },
            { name: "로익 바데", position: "DF", country: "프랑스", age: 25, rating: 83 },
            { name: "마르캉", position: "DF", country: "브라질", age: 29, rating: 75 },
            { name: "탕기 니안주", position: "DF", country: "프랑스", age: 23, rating: 79 },
            { name: "후안루 산체스", position: "DF", country: "스페인", age: 21, rating: 76 },
            { name: "스타니스 이덤보 무잠보", position: "FW", country: "벨기에", age: 20, rating: 70 },
            { name: "알베르토 플로레스", position: "GK", country: "스페인", age: 28, rating: 68 },
            { name: "호세 앙헬 카르모나", position: "DF", country: "스페인", age: 23, rating: 82 },
            { name: "켈레치 이헤나초", position: "FW", country: "나이지리아", age: 28, rating: 74 },
            { name: "김민수", position: "MF", country: "대한민국", age: 19, rating: 68 }
        ],
        description: "네르비온의 열정을 되살리려는 세비야의 도전"
    },

    "아약스": {
        league: 2,
        players: [
            { name: "비테슬라프 야로스", position: "GK", country: "체코", age: 24, rating: 67 },
            { name: "루카스 호자", position: "DF", country: "브라질", age: 25, rating: 73 },
            { name: "안톤 고에이", position: "DF", country: "덴마크", age: 22, rating: 74 },
            { name: "조렐 하토", position: "DF", country: "네덜란드", age: 19, rating: 84 },
            { name: "오언 베인달", position: "DF", country: "네덜란드", age: 25, rating: 71 },
            { name: "라울 모로", position: "FW", country: "스페인", age: 22, rating: 72 },
            { name: "케네스 테일러", position: "MF", country: "네덜란드", age: 23, rating: 82 },
            { name: "브라이언 브로비", position: "FW", country: "네덜란드", age: 23, rating: 85 },
            { name: "오스카르 글루크", position: "FW", country: "이스라엘", age: 21, rating: 70 },
            { name: "미카 고츠", position: "FW", country: "벨기에", age: 20, rating: 68 },
            { name: "요에리 헤르켄스", position: "GK", country: "네덜란드", age: 19, rating: 66 },
            { name: "아흐메트잔 카플란", position: "DF", country: "튀르키예", age: 22, rating: 71 },
            { name: "유리 바스", position: "DF", country: "네덜란드", age: 22, rating: 76 },
            { name: "올리베르 에드바르센", position: "FW", country: "노르웨이", age: 26, rating: 77 },
            { name: "데이비 클라센", position: "MF", country: "네덜란드", age: 32, rating: 78 },
            { name: "베르트랑 트라오레", position: "FW", country: "부르키나파소", age: 29, rating: 73 },
            { name: "브랑코 판 덴 보먼", position: "MF", country: "네덜란드", age: 30, rating: 74 },
            { name: "렘코 파스베이르", position: "GK", country: "네덜란드", age: 41, rating: 75 },
            { name: "스티븐 베르하위스", position: "FW", country: "네덜란드", age: 33, rating: 83 },
            { name: "바웃 베호르스트", position: "FW", country: "네덜란드", age: 32, rating: 74 },
            { name: "키안 피츠짐", position: "MF", country: "네덜란드", age: 22, rating: 70 },
            { name: "요르디 무키오", position: "MF", country: "벨기에", age: 17, rating: 66 },
            { name: "디스 얀서", position: "DF", country: "네덜란드", age: 19, rating: 67 },
            { name: "요시프 슈탈로", position: "DF", country: "크로아티아", age: 25, rating: 81 },
            { name: "율리안 브란데스", position: "MF", country: "독일", age: 21, rating: 70 },
            { name: "유리 레헤이르", position: "MF", country: "네덜란드", age: 21, rating: 72 },
            { name: "얀 파베르스키", position: "FW", country: "폴란드", age: 19, rating: 68 },
            { name: "찰리 셋퍼드", position: "GK", country: "잉글랜드", age: 21, rating: 74 },
            { name: "폴 리버슨", position: "GK", country: "네덜란드", age: 20, rating: 68 },
            { name: "라얀 부니다", position: "FW", country: "벨기에", age: 19, rating: 67 },
            { name: "데이빗 칼로코", position: "FW", country: "네덜란드", age: 20, rating: 68 },
            { name: "돈안젤로 코나두", position: "FW", country: "네덜란드", age: 19, rating: 68 },
            { name: "숀 스퇴르", position: "MF", country: "네덜란드", age: 17, rating: 66 },
            { name: "아론 바우만", position: "DF", country: "네덜란드", age: 17, rating: 65 },
            { name: "추바 악폼", position: "FW", country: "잉글랜드", age: 29, rating: 73 },
            { name: "시베르트 만스베르크", position: "MF", country: "노르웨이", age: 23, rating: 75 },
            { name: "트리스탄 호이어", position: "DF", country: "네덜란드", age: 20, rating: 67 }
        ],
        description: "암스테르담의 자존심을 되찾기 위한 토털 풋볼의 부활"
    },

    "AS 로마": {
        league: 2,
        players: [
            { name: "데빈 렌스", position: "DF", country: "네덜란드", age: 22, rating: 75 },
            { name: "앙헬리뇨", position: "DF", country: "스페인", age: 28, rating: 82 },
            { name: "브라얀 크리스탄테", position: "MF", country: "이탈리아", age: 30, rating: 81 },
            { name: "에방 은디카", position: "DF", country: "프랑스", age: 25, rating: 84 },
            { name: "로렌초 펠레그리니", position: "MF", country: "이탈리아", age: 29, rating: 83 },
            { name: "아르템 도우비크", position: "FW", country: "우크라이나", age: 28, rating: 85 },
            { name: "사우드 압둘하미드", position: "DF", country: "사우디아라비아", age: 26, rating: 74 },
            { name: "에반 퍼거슨", position: "FW", country: "아일랜드", age: 20, rating: 78 },
            { name: "마라쉬 쿰불라", position: "DF", country: "알바니아", age: 25, rating: 78 },
            { name: "레안드로 파레데스", position: "MF", country: "아르헨티나", age: 31, rating: 75 },
            { name: "마누 코네", position: "MF", country: "프랑스", age: 24, rating: 82 },
            { name: "마티아스 소울레", position: "FW", country: "아르헨티나", age: 22, rating: 86 },
            { name: "제키 첼리크", position: "DF", country: "튀르키예", age: 28, rating: 77 },
            { name: "파울로 디발라", position: "FW", country: "아르헨티나", age: 31, rating: 84 },
            { name: "잔루카 만치니", position: "DF", country: "이탈리아", age: 29, rating: 83 },
            { name: "빅토르 넬손", position: "DF", country: "덴마크", age: 26, rating: 76 },
            { name: "닐 엘 야누이", position: "MF", country: "프랑스", age: 21, rating: 83 },
            { name: "아나스 살라에딘", position: "DF", country: "네덜란드", age: 23, rating: 69 },
            { name: "톰마소 발단치", position: "MF", country: "이탈리아", age: 22, rating: 77 },
            { name: "알렉시스 살레마커스", position: "FW", country: "벨기에", age: 26, rating: 81 },
            { name: "니콜로 피실리", position: "FW", country: "이탈리아", age: 20, rating: 75 },
            { name: "부바 상가레", position: "DF", country: "스페인", age: 17, rating: 67 },
            { name: "페데리코 나르딘", position: "DF", country: "이탈리아", age: 18, rating: 66 },
            { name: "스테판 엘샤라위", position: "FW", country: "이탈리아", age: 32, rating: 82 },
            { name: "피에를루이지 골리니", position: "GK", country: "이탈리아", age: 30, rating: 71 },
            { name: "밀레 스빌라르", position: "GK", country: "세르비아", age: 25, rating: 75 }
        ],
        description: "로마의 영광을 되찾기 위한 잘로로시의 도전"
    },

    "레버쿠젠": {
        league: 2,
        players: [
            { name: "루카시 흐라데츠키", position: "GK", country: "핀란드", age: 35, rating: 82 },
            { name: "피에로 잉카피에", position: "DF", country: "에콰도르", age: 23, rating: 83 },
            { name: "자렐 콴사", position: "DF", country: "잉글랜드", age: 22, rating: 74 },
            { name: "마리오 에르모소", position: "DF", country: "스페인", age: 30, rating: 77 },
            { name: "요나스 호프만", position: "MF", country: "독일", age: 33, rating: 81 },
            { name: "로베르트 안드리히", position: "MF", country: "독일", age: 30, rating: 79 },
            { name: "마르탱 테리에", position: "FW", country: "프랑스", age: 28, rating: 76 },
            { name: "에드몽 탑소바", position: "DF", country: "부르키나파소", age: 26, rating: 85 },
            { name: "아르투르", position: "DF", country: "브라질", age: 22, rating: 69 },
            { name: "파트리크 시크", position: "FW", country: "체코", age: 29, rating: 86 },
            { name: "알레호 사르코", position: "FW", country: "아르헨티나", age: 19, rating: 67 },
            { name: "네이선 텔러", position: "FW", country: "잉글랜드", age: 26, rating: 76 },
            { name: "알레한드로 그리말도", position: "DF", country: "스페인", age: 29, rating: 85 },
            { name: "아민 아들리", position: "FW", country: "프랑스", age: 25, rating: 77 },
            { name: "빅터 보니페이스", position: "FW", country: "나이지리아", age: 24, rating: 85 },
            { name: "알레시 가르시아", position: "MF", country: "스페인", age: 28, rating: 81 },
            { name: "에세키엘 팔라시오스", position: "MF", country: "아르헨티나", age: 26, rating: 82 },
            { name: "말릭 틸먼", position: "MF", country: "미국", age: 23, rating: 86 },
            { name: "니클라스 롬프", position: "GK", country: "독일", age: 32, rating: 64 },
            { name: "주누엘 벨로시앙", position: "DF", country: "프랑스", age: 20, rating: 76 },
            { name: "마르크 플레컨", position: "GK", country: "네덜란드", age: 32, rating: 71 },
            { name: "악셀 타페", position: "DF", country: "프랑스", age: 17, rating: 66 },
            { name: "이브라힘 마자", position: "MF", country: "독일", age: 19, rating: 67 },
            { name: "압둘라예 파예", position: "DF", country: "세네갈", age: 20, rating: 72 }
        ],
        description: "바이엘 레버쿠젠의 무패 신화를 이어가려는 의지"
    },

    "스포르팅 CP": {
        league: 2,
        players: [
            { name: "프랑코 이스라엘", position: "GK", country: "우루과이", age: 25, rating: 72 },
            { name: "마테우스 헤이스", position: "DF", country: "브라질", age: 30, rating: 74 },
            { name: "제리 신트쥐스터", position: "DF", country: "네덜란드", age: 28, rating: 72 },
            { name: "모리타 히데마사", position: "MF", country: "일본", age: 30, rating: 77 },
            { name: "제노 데바스트", position: "DF", country: "벨기에", age: 21, rating: 73 },
            { name: "페드루 곤살베스", position: "FW", country: "포르투갈", age: 27, rating: 85 },
            { name: "누누 산투스", position: "MF", country: "포르투갈", age: 30, rating: 82 },
            { name: "블라단 코바체비치", position: "GK", country: "보스니아 헤르체고비나", age: 27, rating: 69 },
            { name: "프란시스쿠 트링캉", position: "FW", country: "포르투갈", age: 25, rating: 86 },
            { name: "콘라드 하더", position: "FW", country: "덴마크", age: 20, rating: 67 },
            { name: "막시밀리아노 아라우호", position: "FW", country: "우루과이", age: 25, rating: 71 },
            { name: "이반 프레스네다", position: "DF", country: "스페인", age: 20, rating: 72 },
            { name: "후이 실바", position: "GK", country: "포르투갈", age: 31, rating: 74 },
            { name: "곤살루 이나시우", position: "DF", country: "포르투갈", age: 23, rating: 84 },
            { name: "우스망 디오망데", position: "DF", country: "코트디부아르", age: 21, rating: 83 },
            { name: "비엘 테이셰이라", position: "FW", country: "포르투갈", age: 20, rating: 67 },
            { name: "지에구 칼라이", position: "GK", country: "브라질", age: 21, rating: 66 },
            { name: "모르텐 히울만", position: "MF", country: "덴마크", age: 26, rating: 83 },
            { name: "히카르두 이스가이우", position: "DF", country: "포르투갈", age: 32, rating: 69 },
            { name: "지오바니 켄다", position: "FW", country: "포르투갈", age: 18, rating: 83 },
            { name: "에두아르두 콰레스마", position: "DF", country: "포르투갈", age: 23, rating: 79 },
            { name: "라파엘 넬", position: "FW", country: "포르투갈", age: 19, rating: 66 },
            { name: "아폰수 모레이라", position: "FW", country: "포르투갈", age: 20, rating: 67 }
        ],
        description: "리스본의 사자들이 다시 한번 포효하는 스포르팅의 부활"
    },

    "벤피카": {
        league: 2,
        players: [
            { name: "아나톨리 트루빈", position: "GK", country: "우크라이나", age: 24, rating: 79 },
            { name: "알바로 카레라스", position: "DF", country: "스페인", age: 22, rating: 83 },
            { name: "안토니우 실바", position: "DF", country: "포르투갈", age: 21, rating: 84 },
            { name: "알렉산데르 바", position: "DF", country: "덴마크", age: 27, rating: 82 },
            { name: "아마르 데디치", position: "DF", country: "보스니아", age: 22, rating: 72 },
            { name: "프레드리크 아우르스네스", position: "MF", country: "노르웨이", age: 29, rating: 84 },
            { name: "프란조 이바노비치", position: "FW", country: "크로아티아", age: 21, rating: 73 },
            { name: "오르쿤 쾨크취", position: "MF", country: "튀르키예", age: 24, rating: 85 },
            { name: "엔조 바레네체아", position: "MF", country: "아르헨티나", age: 24, rating: 82 },
            { name: "반젤리스 파블리디스", position: "FW", country: "그리스", age: 26, rating: 86 },
            { name: "마누 실바", position: "MF", country: "포르투갈", age: 24, rating: 81 },
            { name: "케렘 아크튀르크올루", position: "FW", country: "튀르키예", age: 26, rating: 84 },
            { name: "레안드루 바헤이루", position: "MF", country: "룩셈부르크", age: 25, rating: 77 },
            { name: "안드레아 벨로티", position: "FW", country: "이탈리아", age: 31, rating: 75 },
            { name: "안드레아스 시엘데루프", position: "MF", country: "노르웨이", age: 21, rating: 73 },
            { name: "사무엘 소아르스", position: "GK", country: "포르투갈", age: 23, rating: 74 },
            { name: "잔루카 프레스티아니", position: "FW", country: "아르헨티나", age: 19, rating: 71 },
            { name: "사무엘 달", position: "DF", country: "노르웨이", age: 22, rating: 77 },
            { name: "브루마", position: "FW", country: "포르투갈", age: 30, rating: 82 },
            { name: "니콜라스 오타멘디", position: "DF", country: "아르헨티나", age: 37, rating: 78 },
            { name: "토마스 아라우주", position: "DF", country: "포르투갈", age: 23, rating: 81 },
            { name: "티아구 고베이아", position: "FW", country: "포르투갈", age: 24, rating: 69 },
            { name: "플로렌티누 루이스", position: "MF", country: "포르투갈", age: 25, rating: 82 },
            { name: "안드레 고메스", position: "GK", country: "포르투갈", age: 20, rating: 67 },
            { name: "구스타부 마르케스", position: "DF", country: "브라질", age: 22, rating: 68 },
            { name: "아드리안 바이마리", position: "MF", country: "스위스", age: 22, rating: 67 },
            { name: "주앙 벨로소", position: "MF", country: "포르투갈", age: 20, rating: 69 },
            { name: "헤나투 산체스", position: "MF", country: "포르투갈", age: 27, rating: 82 },
            { name: "리차르드 리오스", position: "MF", country: "콜롬비아", age: 25, rating: 71 }
        ],
        description: "이글스의 자존심과 전통을 이어가는 벤피카의 도전"
    },

    "셀틱": {
        league: 2,
        players: [
            { name: "카스페르 슈마이켈", position: "GK", country: "덴마크", age: 38, rating: 72 },
            { name: "앨리스테어 존스턴", position: "DF", country: "캐나다", age: 26, rating: 81 },
            { name: "리암 스케일스", position: "DF", country: "아일랜드", age: 26, rating: 76 },
            { name: "오스턴 트러스티", position: "DF", country: "미국", age: 26, rating: 70 },
            { name: "조타", position: "FW", country: "포르투갈", age: 26, rating: 76 },
            { name: "베니아민 뉘그렌", position: "FW", country: "스웨덴", age: 24, rating: 72 },
            { name: "아담 이다", position: "FW", country: "아일랜드", age: 24, rating: 73 },
            { name: "빌랴미 시니살로", position: "GK", country: "핀란드", age: 23, rating: 73 },
            { name: "양현준", position: "FW", country: "대한민국", age: 23, rating: 71 },
            { name: "루크 매코완", position: "MF", country: "스코틀랜드", age: 27, rating: 75 },
            { name: "야마다 신", position: "FW", country: "일본", age: 25, rating: 69 },
            { name: "칼럼 오스먼드", position: "FW", country: "오스트레일리아", age: 19, rating: 66 },
            { name: "캐머런 카터비커스", position: "DF", country: "미국", age: 27, rating: 74 },
            { name: "마르코 틸리오", position: "FW", country: "오스트레일리아", age: 23, rating: 71 },
            { name: "조니 케니", position: "FW", country: "아일랜드", age: 22, rating: 66 },
            { name: "이나무라 하야토", position: "DF", country: "일본", age: 24, rating: 75 },
            { name: "아르네 엥얼스", position: "MF", country: "벨기에", age: 21, rating: 67 },
            { name: "파울루 베르나르두", position: "MF", country: "포르투갈", age: 23, rating: 69 },
            { name: "로스 두핸", position: "GK", country: "스코틀랜드", age: 27, rating: 68 },
            { name: "마에다 다이젠", position: "FW", country: "일본", age: 27, rating: 77 },
            { name: "하타테 레오", position: "MF", country: "일본", age: 27, rating: 74 },
            { name: "칼럼 맥그리거", position: "MF", country: "스코틀랜드", age: 32, rating: 76 },
            { name: "자마이 심슨-퓨시", position: "DF", country: "잉글랜드", age: 19, rating: 69 },
            { name: "제임스 포레스트", position: "FW", country: "스코틀랜드", age: 34, rating: 67 },
            { name: "안토니 랄스턴", position: "DF", country: "스코틀랜드", age: 26, rating: 73 },
            { name: "스티븐 웰시", position: "DF", country: "스코틀랜드", age: 25, rating: 70 },
            { name: "키어런 티어니", position: "DF", country: "스코틀랜드", age: 28, rating: 76 }
        ],
        description: "글래스고의 녹색과 흰색 호프스를 위한 셀틱의 전통"
    },

    "페예노르트": {
        league: 2,
        players: [
            { name: "저스틴 베일로", position: "GK", country: "네덜란드", age: 27, rating: 67 },
            { name: "바르트 니우코프", position: "DF", country: "네덜란드", age: 29, rating: 71 },
            { name: "토마스 베일런", position: "DF", country: "네덜란드", age: 23, rating: 77 },
            { name: "와타나베 츠요시", position: "DF", country: "일본", age: 28, rating: 73 },
            { name: "헤이스 스말", position: "DF", country: "네덜란드", age: 27, rating: 76 },
            { name: "황인범", position: "MF", country: "대한민국", age: 28, rating: 83 },
            { name: "야쿠프 모데르", position: "MF", country: "폴란드", age: 26, rating: 82 },
            { name: "퀸턴 팀버르", position: "MF", country: "네덜란드", age: 24, rating: 82 },
            { name: "우에다 아야세", position: "FW", country: "일본", age: 26, rating: 73 },
            { name: "칼빈 스텡스", position: "FW", country: "네덜란드", age: 26, rating: 75 },
            { name: "아넬 아흐메도지치", position: "DF", country: "보스니아", age: 26, rating: 76 },
            { name: "곤살로 보르즈스", position: "FW", country: "포르투갈", age: 24, rating: 74 },
            { name: "루시아노 발렌테", position: "MF", country: "네덜란드", age: 21, rating: 78 },
            { name: "게르노트 트라우너", position: "DF", country: "오스트리아", age: 33, rating: 73 },
            { name: "훌리안 카란사", position: "FW", country: "아르헨티나", age: 25, rating: 72 },
            { name: "제일란드 미첼", position: "DF", country: "코스타리카", age: 20, rating: 66 },
            { name: "플라멘 안드레예프", position: "GK", country: "불가리아", age: 21, rating: 65 },
            { name: "티몬 벨렌로이터", position: "GK", country: "독일", age: 29, rating: 75 },
            { name: "아니스 하지 무사", position: "FW", country: "알제리", age: 23, rating: 79 },
            { name: "셈 스테인", position: "MF", country: "네덜란드", age: 23, rating: 84 },
            { name: "실로 트잔트", position: "MF", country: "네덜란드", age: 21, rating: 69 },
            { name: "히베로 레아트", position: "DF", country: "네덜란드", age: 19, rating: 78 },
            { name: "카스퍼르 텡스테트", position: "FW", country: "덴마크", age: 25, rating: 76 },
            { name: "우사마 타갈린", position: "MF", country: "모로코", age: 22, rating: 73 },
            { name: "조르당 로통바", position: "DF", country: "스위스", age: 26, rating: 74 },
            { name: "스테파노 카리요", position: "FW", country: "멕시코", age: 19, rating: 68 },
            { name: "크리스-케빈 나제", position: "MF", country: "프랑스", age: 24, rating: 71 },
            { name: "리암 보신", position: "GK", country: "벨기에", age: 29, rating: 68 }
        ],
        description: "로테르담의 자존심을 되찾기 위한 페예노르트의 열정"
    },

    // "PSV": {
    //     league: 2,
    //     players: [
    //         { name: "니크 올레이", position: "GK", country: "네덜란드", age: 30, rating: 75 },
    //         { name: "아르만도 오비스포", position: "DF", country: "네덜란드", age: 26, rating: 72 },
    //         { name: "이반 페리시치", position: "MF", country: "크로아티아", age: 36, rating: 82 },
    //         { name: "라이언 플라밍고", position: "DF", country: "네덜란드", age: 22, rating: 80 },
    //         { name: "루번 판보멀", position: "FW", country: "네덜란드", age: 20, rating: 79 },
    //         { name: "세르지뇨 데스트", position: "DF", country: "미국", age: 24, rating: 75 },
    //         { name: "리카르도 페피", position: "FW", country: "미국", age: 22, rating: 79 },
    //         { name: "알라산 플레아", position: "FW", country: "프랑스", age: 32, rating: 77 },
    //         { name: "마체이 코바르시", position: "GK", country: "체코", age: 25, rating: 73 },
    //         { name: "마우루 주니오르", position: "MF", country: "브라질", age: 26, rating: 83 },
    //         { name: "올리비에 보스칼리", position: "DF", country: "프랑스", age: 27, rating: 81 },
    //         { name: "에스미르 바즈락타레비치", position: "FW", country: "미국", age: 20, rating: 68 },
    //         { name: "휘스 틸", position: "MF", country: "네덜란드", age: 27, rating: 84 },
    //         { name: "쿠하이브 드리우시", position: "FW", country: "모로코", age: 23, rating: 72 },
    //         { name: "예르디 스하우턴", position: "MF", country: "네덜란드", age: 28, rating: 78 },
    //         { name: "조이 페이르만", position: "MF", country: "네덜란드", age: 26, rating: 85 },
    //         { name: "닉 스힉스", position: "GK", country: "네덜란드", age: 19, rating: 69 },
    //         { name: "킬리안 실디야", position: "DF", country: "프랑스", age: 23, rating: 81 },
    //         { name: "아이삭 바바디", position: "MF", country: "네덜란드", age: 20, rating: 76 },
    //         { name: "루카스 페레스", position: "FW", country: "스페인", age: 36, rating: 74 },
    //         { name: "티호 랜드", position: "MF", country: "네덜란드", age: 19, rating: 70 },
    //         { name: "이스마엘 세이바리", position: "MF", country: "모로코", age: 24, rating: 83 },
    //         { name: "야레크 가시오로프스키", position: "DF", country: "스페인", age: 20, rating: 74 },
    //         { name: "아다모 나갈로", position: "DF", country: "부르키나파소", age: 22, rating: 69 },
    //         { name: "타이 아베드", position: "MF", country: "이스라엘", age: 21, rating: 71 }
    //     ],
    //     description: "아인트호벤의 빨간 군단이 되살리는 PSV의 전통"
    // },

    "올랭피크 드 마르세유": {
        league: 2,
        players: [
            { name: "헤로니모 룰리", position: "GK", country: "아르헨티나", age: 33, rating: 78 },
            { name: "파쿤도 메디나", position: "DF", country: "아르헨티나", age: 26, rating: 83 },
            { name: "C-J 이건라일리", position: "DF", country: "잉글랜드", age: 22, rating: 80 },
            { name: "레오나르도 발레르디", position: "DF", country: "아르헨티나", age: 26, rating: 85 },
            { name: "울리세스 가르시아", position: "DF", country: "스위스", age: 29, rating: 78 },
            { name: "앙겔 고메스", position: "MF", country: "잉글랜드", age: 24, rating: 76 },
            { name: "닐 모페", position: "FW", country: "프랑스", age: 28, rating: 72 },
            { name: "아민 구이리", position: "FW", country: "프랑스", age: 25, rating: 81 },
            { name: "메이슨 그린우드", position: "FW", country: "잉글랜드", age: 23, rating: 87 },
            { name: "아민 하릿", position: "MF", country: "모로코", age: 28, rating: 78 },
            { name: "제프리 더랭", position: "GK", country: "네덜란드", age: 27, rating: 71 },
            { name: "데릭 코넬리우스", position: "DF", country: "캐나다", age: 27, rating: 75 },
            { name: "이고르 파이샹", position: "FW", country: "브라질", age: 25, rating: 84 },
            { name: "조너선 로우", position: "FW", country: "잉글랜드", age: 22, rating: 74 },
            { name: "조프레 콘도그비아", position: "MF", country: "중앙아프리카공화국", age: 32, rating: 79 },
            { name: "티모시 웨아", position: "FW", country: "미국", age: 25, rating: 79 },
            { name: "이스마엘 베나세르", position: "MF", country: "알제리", age: 27, rating: 78 },
            { name: "피에르에밀 호이비에르", position: "MF", country: "덴마크", age: 30, rating: 85 },
            { name: "아드리앙 라비오", position: "MF", country: "프랑스", age: 30, rating: 86 },
            { name: "빌랄 나디르", position: "MF", country: "프랑스", age: 21, rating: 69 },
            { name: "폴 리롤라", position: "DF", country: "스페인", age: 27, rating: 73 },
            { name: "루벤 블랑코", position: "GK", country: "스페인", age: 30, rating: 70 },
            { name: "피에르 에메릭 오바메양", position: "FW", country: "가봉", age: 36, rating: 83 },
            { name: "야니스 셀라미", position: "MF", country: "프랑스", age: 18, rating: 66 },
            { name: "가엘 라퐁", position: "MF", country: "프랑스", age: 19, rating: 67 },
            { name: "케일리안 압달라", position: "FW", country: "프랑스", age: 19, rating: 66 },
            { name: "대릴 바콜라", position: "MF", country: "프랑스", age: 17, rating: 68 },
            { name: "아미르 무리요", position: "DF", country: "파나마", age: 29, rating: 82 },
            { name: "아마르 데디치", position: "DF", country: "보스니아 헤르체고비나", age: 23, rating: 72 }
        ],
        description: "지중해의 열정과 프랑스의 자존심을 대표하는 마르세유"
    },

    // 3부 리그 시작
    "FC 서울": {
        league: 3,
        players: [
            { name: "이상민", position: "DF", country: "대한민국", age: 27, rating: 75 },
            { name: "야잔", position: "DF", country: "요르단", age: 29, rating: 78 },
            { name: "정승원", position: "MF", country: "대한민국", age: 28, rating: 79 },
            { name: "이승모", position: "MF", country: "대한민국", age: 27, rating: 76 },
            { name: "조영욱", position: "FW", country: "대한민국", age: 26, rating: 74 },
            { name: "린가드", position: "MF", country: "잉글랜드", age: 32, rating: 82 },
            { name: "천성훈", position: "FW", country: "대한민국", age: 24, rating: 72 },
            { name: "손승범", position: "FW", country: "대한민국", age: 21, rating: 71 },
            { name: "김현덕", position: "DF", country: "대한민국", age: 20, rating: 69 },
            { name: "최준", position: "DF", country: "대한민국", age: 26, rating: 73 },
            { name: "정태욱", position: "DF", country: "대한민국", age: 28, rating: 75 },
            { name: "강주혁", position: "FW", country: "대한민국", age: 18, rating: 67 },
            { name: "이한도", position: "DF", country: "대한민국", age: 31, rating: 76 },
            { name: "최철원", position: "GK", country: "대한민국", age: 31, rating: 74 },
            { name: "김진수", position: "DF", country: "대한민국", age: 33, rating: 73 },
            { name: "조영광", position: "DF", country: "대한민국", age: 21, rating: 68 },
            { name: "임준섭", position: "GK", country: "대한민국", age: 21, rating: 67 },
            { name: "허동민", position: "MF", country: "대한민국", age: 21, rating: 69 },
            { name: "문선민", position: "FW", country: "대한민국", age: 33, rating: 72 },
            { name: "바또", position: "FW", country: "코트디부아르", age: 19, rating: 70 },
            { name: "류재문", position: "MF", country: "대한민국", age: 31, rating: 74 },
            { name: "김주성", position: "DF", country: "대한민국", age: 24, rating: 71 },
            { name: "강현무", position: "GK", country: "대한민국", age: 30, rating: 73 },
            { name: "클리말라", position: "FW", country: "폴란드", age: 26, rating: 76 },
            { name: "배현서", position: "DF", country: "대한민국", age: 20, rating: 67 },
            { name: "김지원", position: "DF", country: "대한민국", age: 21, rating: 68 },
            { name: "정한민", position: "FW", country: "대한민국", age: 24, rating: 71 },
            { name: "박성훈", position: "DF", country: "대한민국", age: 22, rating: 69 },
            { name: "황도윤", position: "MF", country: "대한민국", age: 22, rating: 70 },
            { name: "둑스", position: "FW", country: "크로아티아", age: 31, rating: 77 },
            { name: "박수일", position: "DF", country: "대한민국", age: 29, rating: 72 },
            { name: "최준영", position: "DF", country: "대한민국", age: 20, rating: 67 },
            { name: "안데르손", position: "FW", country: "브라질", age: 27, rating: 75 },
            { name: "윤기욱", position: "GK", country: "대한민국", age: 18, rating: 65 },
            { name: "민지훈", position: "MF", country: "대한민국", age: 20, rating: 68 },
            { name: "루카스", position: "FW", country: "브라질", age: 25, rating: 74 },
            { name: "박장한결", position: "MF", country: "대한민국", age: 21, rating: 68 }
        ],
        description: "대한민국 수도의 자존심, 끊임없는 도전정신"
    },

    "갈라타사라이": {
        league: 3,
        players: [
            { name: "페르난도 무슬레라", position: "GK", country: "우루과이", age: 39, rating: 74 },
            { name: "이스마일 자콥스", position: "DF", country: "세네갈", age: 25, rating: 76 },
            { name: "에위프 아이든", position: "MF", country: "튀르키예", age: 21, rating: 71 },
            { name: "다빈손 산체스", position: "DF", country: "콜롬비아", age: 29, rating: 78 },
            { name: "롤런드 셜러이", position: "FW", country: "헝가리", age: 28, rating: 77 },
            { name: "케렘 데미르바이", position: "MF", country: "독일", age: 32, rating: 76 },
            { name: "마우로 이카르디", position: "FW", country: "아르헨티나", age: 32, rating: 79 },
            { name: "리로이 사네", position: "MF", country: "독일", age: 29, rating: 82 },
            { name: "유누스 아크귄", position: "MF", country: "튀르키예", age: 25, rating: 74 },
            { name: "데릭 쾬", position: "DF", country: "독일", age: 30, rating: 75 },
            { name: "베르칸 쿠틀루", position: "MF", country: "튀르키예", age: 27, rating: 74 },
            { name: "귀나이 귀벤츠", position: "GK", country: "튀르키예", age: 34, rating: 72 },
            { name: "가브리에우 사라", position: "MF", country: "브라질", age: 26, rating: 76 },
            { name: "아흐메드 쿠투주", position: "FW", country: "튀르키예", age: 25, rating: 74 },
            { name: "칸 아이한", position: "DF", country: "튀르키예", age: 30, rating: 73 },
            { name: "엘리아스 엘러르트", position: "DF", country: "덴마크", age: 22, rating: 73 },
            { name: "카를로스 쿠에스타", position: "DF", country: "콜롬비아", age: 26, rating: 74 },
            { name: "프셰미스와프 프랑코프스키", position: "DF", country: "폴란드", age: 30, rating: 73 },
            { name: "유수프 데미르", position: "MF", country: "오스트리아", age: 22, rating: 72 },
            { name: "루카스 토레이라", position: "MF", country: "우루과이", age: 29, rating: 76 },
            { name: "압둘케림 바르닥치", position: "DF", country: "튀르키예", age: 30, rating: 73 },
            { name: "빅터 오시멘", position: "FW", country: "나이지리아", age: 26, rating: 85 },
            { name: "잔카트 일마즈", position: "GK", country: "튀르키예", age: 20, rating: 68 },
            { name: "바르쉬 알페르 일마즈", position: "MF", country: "튀르키예", age: 25, rating: 72 },
            { name: "바란 데미로글루", position: "MF", country: "튀르키예", age: 20, rating: 70 },
            { name: "알리 예실유르트", position: "DF", country: "튀르키예", age: 20, rating: 68 },
            { name: "알리 투랍 불뷸", position: "DF", country: "튀르키예", age: 20, rating: 68 },
            { name: "알바로 모라타", position: "FW", country: "스페인", age: 32, rating: 78 },
            { name: "함자 아크만", position: "MF", country: "튀르키예", age: 20, rating: 69 },
            { name: "에페 아크만", position: "MF", country: "튀르키예", age: 19, rating: 68 },
            { name: "카짐칸 카라타스", position: "DF", country: "튀르키예", age: 27, rating: 72 },
            { name: "아르다 윈야이", position: "DF", country: "튀르키예", age: 20, rating: 69 },
            { name: "마리오 르미나", position: "MF", country: "가봉", age: 31, rating: 74 }
        ],
        description: "이스탄불의 사자들이 보여주는 터키 축구의 자존심"
    },

    "알 힐랄": {
        league: 3,
        players: [
            { name: "야신 부누", position: "GK", country: "모로코", age: 34, rating: 79 },
            { name: "모하메드 알 오와이스", position: "GK", country: "사우디아라비아", age: 33, rating: 76 },
            { name: "칼리두 쿨리발리", position: "DF", country: "세네갈", age: 34, rating: 81 },
            { name: "알리 알 불라이히", position: "DF", country: "사우디아라비아", age: 35, rating: 74 },
            { name: "칼리파 알 다우사리", position: "DF", country: "사우디아라비아", age: 26, rating: 73 },
            { name: "테오 에르난데스", position: "DF", country: "프랑스", age: 27, rating: 84 },
            { name: "주앙 칸셀루", position: "DF", country: "포르투갈", age: 31, rating: 82 },
            { name: "야세르 알 샤흐라니", position: "DF", country: "사우디아라비아", age: 33, rating: 72 },
            { name: "하산 알 탐박티", position: "DF", country: "사우디아라비아", age: 26, rating: 72 },
            { name: "하마드 알 야미", position: "DF", country: "사우디아라비아", age: 26, rating: 71 },
            { name: "알리 라자미", position: "DF", country: "사우디아라비아", age: 29, rating: 72 },
            { name: "후벵 네베스", position: "MF", country: "포르투갈", age: 28, rating: 83 },
            { name: "세르게이 밀린코비치-사비치", position: "MF", country: "세르비아", age: 30, rating: 82 },
            { name: "모하메드 칸노", position: "MF", country: "사우디아라비아", age: 30, rating: 74 },
            { name: "살렘 알 다우사리", position: "MF", country: "사우디아라비아", age: 33, rating: 73 },
            { name: "무사브 알 주와이르", position: "MF", country: "사우디아라비아", age: 22, rating: 70 },
            { name: "나세르 알 다우사리", position: "MF", country: "사우디아라비아", age: 26, rating: 71 },
            { name: "알렉산다르 미트로비치", position: "FW", country: "세르비아", age: 30, rating: 81 },
            { name: "마우콩", position: "FW", country: "브라질", age: 28, rating: 77 },
            { name: "마르코스 레오나르두", position: "FW", country: "브라질", age: 22, rating: 75 },
            { name: "압둘라 알 함단", position: "FW", country: "사우디아라비아", age: 25, rating: 71 },
            { name: "압데라작 함달라", position: "FW", country: "모로코", age: 34, rating: 74 },
            { name: "카이오 세자르", position: "FW", country: "브라질", age: 21, rating: 72 },
            { name: "모테브 알 하르비", position: "DF", country: "사우디아라비아", age: 25, rating: 70 },
            { name: "모하메드 알 야미", position: "GK", country: "사우디아라비아", age: 27, rating: 69 }
        ],
        description: "사우디아라비아의 킹 클럽이 보여주는 중동 축구의 힘"
    },

    "알 이티하드": {
        league: 3,
        players: [
            { name: "카림 벤제마", position: "FW", country: "프랑스", age: 37, rating: 83 },
            { name: "은골로 캉테", position: "MF", country: "프랑스", age: 34, rating: 80 },
            { name: "파비뉴", position: "MF", country: "브라질", age: 31, rating: 79 },
            { name: "루이스 펠리피", position: "DF", country: "이탈리아", age: 28, rating: 77 },
            { name: "아흐메드 헤가지", position: "DF", country: "이집트", age: 34, rating: 73 },
            { name: "로마리뉴", position: "FW", country: "브라질", age: 34, rating: 75 },
            { name: "조타", position: "FW", country: "포르투갈", age: 26, rating: 76 },
            { name: "압데라작 함달라", position: "FW", country: "모로코", age: 34, rating: 74 },
            { name: "마르셀루 그로헤", position: "GK", country: "브라질", age: 38, rating: 71 },
            { name: "압둘라 알 마이유프", position: "GK", country: "사우디아라비아", age: 38, rating: 69 },
            { name: "파와즈 알 카르니", position: "GK", country: "사우디아라비아", age: 33, rating: 68 },
            { name: "아흐메드 샤라힐리", position: "DF", country: "사우디아라비아", age: 30, rating: 71 },
            { name: "무한나드 알 샹키티", position: "DF", country: "사우디아라비아", age: 25, rating: 70 },
            { name: "오마르 하우사위", position: "DF", country: "사우디아라비아", age: 40, rating: 67 },
            { name: "아흐메드 바마수드", position: "DF", country: "사우디아라비아", age: 29, rating: 70 },
            { name: "자카리아 알 하우사위", position: "DF", country: "사우디아라비아", age: 24, rating: 69 },
            { name: "파와즈 알 사구르", position: "DF", country: "사우디아라비아", age: 32, rating: 69 },
            { name: "술탄 파르한", position: "MF", country: "사우디아라비아", age: 28, rating: 71 },
            { name: "아와드 알 나슈리", position: "MF", country: "사우디아라비아", age: 23, rating: 70 },
            { name: "파르한 알 샴라니", position: "MF", country: "사우디아라비아", age: 26, rating: 70 },
            { name: "마르완 알 사하피", position: "MF", country: "사우디아라비아", age: 21, rating: 69 },
            { name: "압둘하미드", position: "MF", country: "사우디아라비아", age: 26, rating: 70 },
            { name: "탈랄 하지", position: "FW", country: "사우디아라비아", age: 17, rating: 66 },
            { name: "하룬 카마라", position: "FW", country: "사우디아라비아", age: 27, rating: 70 },
            { name: "압둘라만 알 아부드", position: "FW", country: "사우디아라비아", age: 30, rating: 71 }
        ],
        description: "벤제마가 이끄는 알 이티하드의 새로운 도전"
    },

    "알 나스르": {
        league: 3,
        players: [
            { name: "크리스티아누 호날두", position: "FW", country: "포르투갈", age: 40, rating: 86 },
            { name: "사디오 마네", position: "FW", country: "세네갈", age: 33, rating: 82 },
            { name: "마르셀루 브로조비치", position: "MF", country: "크로아티아", age: 32, rating: 80 },
            { name: "아이메릭 라포르테", position: "DF", country: "스페인", age: 31, rating: 81 },
            { name: "오타비우", position: "MF", country: "포르투갈", age: 30, rating: 78 },
            { name: "안데르송 탈리스카", position: "FW", country: "브라질", age: 31, rating: 78 },
            { name: "알렉스 텔레스", position: "DF", country: "브라질", age: 32, rating: 76 },
            { name: "유세프 엔네시리", position: "FW", country: "모로코", age: 28, rating: 77 },
            { name: "다비드 오스피나", position: "GK", country: "콜롬비아", age: 36, rating: 74 },
            { name: "나와프 알 아키디", position: "GK", country: "사우디아라비아", age: 25, rating: 70 },
            { name: "술탄 알 간남", position: "DF", country: "사우디아라비아", age: 31, rating: 72 },
            { name: "압둘라 알 암리", position: "DF", country: "사우디아라비아", age: 28, rating: 71 },
            { name: "압둘라흐만 가리브", position: "FW", country: "사우디아라비아", age: 28, rating: 72 },
            { name: "압둘마지드 알 술라이힘", position: "MF", country: "사우디아라비아", age: 31, rating: 71 },
            { name: "사미 알 나지", position: "MF", country: "사우디아라비아", age: 28, rating: 71 },
            { name: "알리 알 하산", position: "MF", country: "사우디아라비아", age: 28, rating: 71 },
            { name: "아이만 야히아", position: "MF", country: "사우디아라비아", age: 24, rating: 70 },
            { name: "모하메드 마란", position: "FW", country: "사우디아라비아", age: 24, rating: 70 },
            { name: "압둘아지즈 알 알리와", position: "FW", country: "사우디아라비아", age: 25, rating: 70 },
            { name: "칼리드 알 간남", position: "FW", country: "사우디아라비아", age: 24, rating: 69 },
            { name: "무함마드 알 파틸", position: "DF", country: "사우디아라비아", age: 33, rating: 70 },
            { name: "압둘레라 알 암리", position: "DF", country: "사우디아라비아", age: 28, rating: 70 },
            { name: "나와프 알 부샬", position: "DF", country: "사우디아라비아", age: 25, rating: 69 },
            { name: "압둘라히 마두", position: "DF", country: "사우디아라비아", age: 32, rating: 69 },
            { name: "모하메드 카심", position: "DF", country: "사우디아라비아", age: 30, rating: 69 }
        ],
        description: "크리스티아누 호날두가 새로운 도전을 펼치는 무대"
    },

    "아르헨티나 연합": {
        league: 3,
        players: [
            { name: "프랑코 아르마니", position: "GK", country: "아르헨티나", age: 38, rating: 74 },
            { name: "세르히오 로메로", position: "GK", country: "아르헨티나", age: 38, rating: 73 },
            { name: "세바스티안 메사", position: "GK", country: "아르헨티나", age: 25, rating: 72 },
            { name: "엔소 디아스", position: "DF", country: "아르헨티나", age: 29, rating: 76 },
            { name: "루카스 블론델", position: "DF", country: "아르헨티나", age: 28, rating: 75 },
            { name: "마르코스 로호", position: "DF", country: "아르헨티나", age: 35, rating: 74 },
            { name: "파브리시오 부스토스", position: "DF", country: "아르헨티나", age: 29, rating: 76 },
            { name: "니콜라스 발렌티니", position: "DF", country: "아르헨티나", age: 24, rating: 75 },
            { name: "에마누엘 맘마나", position: "DF", country: "아르헨티나", age: 29, rating: 75 },
            { name: "가브리엘 로하스", position: "DF", country: "아르헨티나", age: 28, rating: 74 },
            { name: "레오나르도 시갈리", position: "DF", country: "아르헨티나", age: 38, rating: 70 },
            { name: "아구스틴 팔라베시노", position: "MF", country: "아르헨티나", age: 28, rating: 77 },
            { name: "에세키엘 바르코", position: "MF", country: "아르헨티나", age: 26, rating: 76 },
            { name: "크리스티안 메디나", position: "MF", country: "아르헨티나", age: 23, rating: 74 },
            { name: "에키 페르난데스", position: "MF", country: "아르헨티나", age: 22, rating: 73 },
            { name: "엔소 페레스", position: "MF", country: "아르헨티나", age: 39, rating: 72 },
            { name: "이그나시오 페르난데스", position: "MF", country: "아르헨티나", age: 35, rating: 73 },
            { name: "후안 나르도니", position: "MF", country: "아르헨티나", age: 23, rating: 72 },
            { name: "페데리코 만쿠에요", position: "MF", country: "아르헨티나", age: 36, rating: 71 },
            { name: "미겔 보르자", position: "FW", country: "콜롬비아", age: 32, rating: 76 },
            { name: "에딘손 카바니", position: "FW", country: "우루과이", age: 38, rating: 75 },
            { name: "다리오 베네데토", position: "FW", country: "아르헨티나", age: 35, rating: 74 },
            { name: "후안 페르난도 킨테로", position: "FW", country: "콜롬비아", age: 32, rating: 75 },
            { name: "아담 바레이로", position: "FW", country: "파라과이", age: 29, rating: 73 },
            { name: "파쿤도 콜리디오", position: "FW", country: "아르헨티나", age: 25, rating: 74 }
        ],
        description: "아르헨티나 축구의 열정과 전통을 대표하는 팀"
    },

    "미국 연합": {
        league: 3,
        players: [
            { name: "리오넬 메시", position: "FW", country: "아르헨티나", age: 38, rating: 88 },
            { name: "루이스 수아레스", position: "FW", country: "우루과이", age: 38, rating: 81 },
            { name: "세르히오 부스케츠", position: "MF", country: "스페인", age: 37, rating: 79 },
            { name: "조르디 알바", position: "DF", country: "스페인", age: 36, rating: 76 },
            { name: "로드리고 데 파울", position: "MF", country: "아르헨티나", age: 31, rating: 83 },
            { name: "드레이크 캘린더", position: "GK", country: "미국", age: 27, rating: 72 },
            { name: "벤자민 크레마스키", position: "MF", country: "미국", age: 20, rating: 69 },
            { name: "니콜라스 프레이레", position: "DF", country: "아르헨티나", age: 31, rating: 74 },
            { name: "로만 첼렌타노", position: "GK", country: "미국", age: 24, rating: 70 },
            { name: "마르텐 파에스", position: "GK", country: "네덜란드", age: 27, rating: 73 },
            { name: "워커 짐머만", position: "DF", country: "미국", age: 32, rating: 74 },
            { name: "맷 미아즈가", position: "DF", country: "미국", age: 30, rating: 73 },
            { name: "마일스 로빈슨", position: "DF", country: "미국", age: 28, rating: 74 },
            { name: "카이 바그너", position: "DF", country: "독일", age: 32, rating: 75 },
            { name: "라이언 홀링스헤드", position: "DF", country: "미국", age: 34, rating: 72 },
            { name: "루시아노 아코스타", position: "MF", country: "아르헨티나", age: 31, rating: 76 },
            { name: "카를레스 길", position: "MF", country: "스페인", age: 32, rating: 75 },
            { name: "하니 무크타르", position: "MF", country: "독일", age: 30, rating: 74 },
            { name: "리키 푸치", position: "MF", country: "스페인", age: 25, rating: 73 },
            { name: "티아고 알마다", position: "MF", country: "아르헨티나", age: 24, rating: 75 },
            { name: "쿠초 에르난데스", position: "FW", country: "콜롬비아", age: 26, rating: 76 },
            { name: "데니스 부앙가", position: "FW", country: "가봉", age: 30, rating: 75 },
            { name: "크리스티안 벤테케", position: "FW", country: "벨기에", age: 34, rating: 76 },
            { name: "로렌초 인시녜", position: "FW", country: "이탈리아", age: 34, rating: 77 },
            { name: "요르고스 야쿠마키스", position: "FW", country: "그리스", age: 30, rating: 74 }
        ],
        description: "메시의 마법이 펼쳐지는 MLS의 화려한 무대"
    },

    "멕시코 연합": {
        league: 3,
        players: [
            { name: "세르히오 라모스", position: "DF", country: "스페인", age: 39, rating: 78 },
        { name: "루이스 말라곤", position: "GK", country: "멕시코", age: 28, rating: 74 },
        { name: "나우엘 구스만", position: "GK", country: "아르헨티나", age: 39, rating: 72 },
        { name: "에스테반 안드라다", position: "GK", country: "아르헨티나", age: 34, rating: 73 },
        { name: "헤수스 가야르도", position: "DF", country: "멕시코", age: 30, rating: 74 },
        { name: "케빈 알바레스", position: "DF", country: "멕시코", age: 26, rating: 73 },
        { name: "이고르 리치노프스키", position: "DF", country: "칠레", age: 31, rating: 75 },
        { name: "에릭 아기레", position: "DF", country: "멕시코", age: 28, rating: 73 },
        { name: "빅토르 구스만", position: "DF", country: "멕시코", age: 30, rating: 74 },
        { name: "카를로스 살세도", position: "DF", country: "멕시코", age: 31, rating: 74 },
        { name: "이스라엘 레예스", position: "DF", country: "멕시코", age: 25, rating: 72 },
        { name: "기도 피사로", position: "MF", country: "아르헨티나", age: 35, rating: 75 },
        { name: "루이스 로모", position: "MF", country: "멕시코", age: 30, rating: 74 },
        { name: "디에고 발데스", position: "MF", country: "칠레", age: 31, rating: 75 },
        { name: "에릭 산체스", position: "MF", country: "멕시코", age: 25, rating: 72 },
        { name: "페르난도 고리아란", position: "MF", country: "우루과이", age: 30, rating: 74 },
        { name: "장 메네세스", position: "MF", country: "칠레", age: 32, rating: 74 },
        { name: "빅토르 구스만", position: "MF", country: "멕시코", age: 30, rating: 74 },
        { name: "알바로 피달고", position: "MF", country: "스페인", age: 28, rating: 73 },
        { name: "헨리 마르틴", position: "FW", country: "멕시코", age: 32, rating: 75 },
        { name: "앙드레 피에르 지냐크", position: "FW", country: "프랑스", age: 39, rating: 73 },
        { name: "기예르모 마르티네스", position: "FW", country: "멕시코", age: 30, rating: 74 },
        { name: "훌리안 키뇨네스", position: "FW", country: "멕시코", age: 28, rating: 73 },
        { name: "니콜라스 이바녜스", position: "FW", country: "아르헨티나", age: 30, rating: 74 }
        ],
        },
            "브라질 연합": {
        league: 3,
        players: [
            { name: "베베르통", position: "GK", country: "브라질", age: 37, rating: 74 },
            { name: "카시우", position: "GK", country: "브라질", age: 38, rating: 72 },
            { name: "존 빅토르", position: "GK", country: "브라질", age: 29, rating: 75 },
            { name: "구스타부 고메스", position: "DF", country: "파라과이", age: 32, rating: 80 },
            { name: "무리루 세르케이라", position: "DF", country: "브라질", age: 28, rating: 76 },
            { name: "레오 오르티스", position: "DF", country: "브라질", age: 29, rating: 77 },
            { name: "기예르메 아라나", position: "DF", country: "브라질", age: 28, rating: 78 },
            { name: "마르사우", position: "DF", country: "브라질", age: 36, rating: 73 },
            { name: "페드루 엔히키", position: "DF", country: "브라질", age: 30, rating: 76 },
            { name: "파브리시우 브루누", position: "DF", country: "브라질", age: 29, rating: 75 },
            { name: "아드리엘송", position: "DF", country: "브라질", age: 27, rating: 74 },
            { name: "하파에우 베이가", position: "MF", country: "브라질", age: 30, rating: 79 },
            { name: "히오르히안 데 아라스카에타", position: "MF", country: "우루과이", age: 31, rating: 82 },
            { name: "제르송", position: "MF", country: "브라질", age: 28, rating: 76 },
            { name: "안드레", position: "MF", country: "브라질", age: 24, rating: 77 },
            { name: "에베르통 히베이루", position: "MF", country: "브라질", age: 36, rating: 74 },
            { name: "알란 파트릭", position: "MF", country: "브라질", age: 34, rating: 75 },
            { name: "제 하파에우", position: "MF", country: "브라질", age: 32, rating: 76 },
            { name: "이고르 코로나두", position: "MF", country: "브라질", age: 32, rating: 75 },
            { name: "헐크", position: "FW", country: "브라질", age: 39, rating: 79 },
            { name: "치키뉴 소아레스", position: "FW", country: "브라질", age: 34, rating: 76 },
            { name: "헤르만 카노", position: "FW", country: "아르헨티나", age: 37, rating: 75 },
            { name: "가브리에우 바르보사", position: "FW", country: "브라질", age: 28, rating: 80 },
            { name: "페드루", position: "FW", country: "브라질", age: 28, rating: 78 },
            { name: "예페르손 소텔도", position: "FW", country: "베네수엘라", age: 28, rating: 77 }
        ],
        description: "브라질 축구의 삼바 리듬과 남미 특급 선수들의 축제"
    },

    "전북 현대": {
        league: 3,
        players: [
            { name: "김정훈", position: "GK", country: "대한민국", age: 24, rating: 72 },
            { name: "김영빈", position: "DF", country: "대한민국", age: 33, rating: 74 },
            { name: "최우진", position: "DF", country: "대한민국", age: 21, rating: 69 },
            { name: "박진섭", position: "MF", country: "대한민국", age: 29, rating: 76 },
            { name: "감보아", position: "MF", country: "브라질", age: 28, rating: 78 },
            { name: "한국영", position: "MF", country: "대한민국", age: 35, rating: 73 },
            { name: "티아고", position: "FW", country: "브라질", age: 31, rating: 79 },
            { name: "송민규", position: "FW", country: "대한민국", age: 25, rating: 74 },
            { name: "이승우", position: "MF", country: "대한민국", age: 27, rating: 80 },
            { name: "강상윤", position: "MF", country: "대한민국", age: 21, rating: 71 },
            { name: "전진우", position: "MF", country: "대한민국", age: 25, rating: 73 },
            { name: "성진영", position: "FW", country: "대한민국", age: 22, rating: 72 },
            { name: "박재용", position: "FW", country: "대한민국", age: 25, rating: 73 },
            { name: "진태호", position: "MF", country: "대한민국", age: 19, rating: 68 },
            { name: "이준호", position: "DF", country: "대한민국", age: 22, rating: 70 },
            { name: "츄마시", position: "FW", country: "가나", age: 31, rating: 74 },
            { name: "권창훈", position: "MF", country: "대한민국", age: 31, rating: 75 },
            { name: "김태환", position: "DF", country: "대한민국", age: 36, rating: 71 },
            { name: "박규민", position: "DF", country: "대한민국", age: 24, rating: 70 },
            { name: "최철순", position: "DF", country: "대한민국", age: 38, rating: 68 },
            { name: "홍정호", position: "DF", country: "대한민국", age: 35, rating: 72 },
            { name: "이규동", position: "MF", country: "대한민국", age: 21, rating: 69 },
            { name: "이영재", position: "MF", country: "대한민국", age: 30, rating: 74 },
            { name: "송범근", position: "GK", country: "대한민국", age: 27, rating: 71 },
            { name: "엄승민", position: "FW", country: "대한민국", age: 22, rating: 70 },
            { name: "장남웅", position: "MF", country: "대한민국", age: 21, rating: 68 },
            { name: "강현종", position: "FW", country: "대한민국", age: 21, rating: 69 },
            { name: "윤주영", position: "DF", country: "대한민국", age: 20, rating: 67 },
            { name: "황정구", position: "DF", country: "대한민국", age: 20, rating: 66 },
            { name: "이한결", position: "GK", country: "대한민국", age: 18, rating: 65 },
            { name: "한석진", position: "MF", country: "대한민국", age: 17, rating: 64 },
            { name: "김수형", position: "DF", country: "대한민국", age: 18, rating: 65 },
            { name: "서정혁", position: "DF", country: "대한민국", age: 19, rating: 66 },
            { name: "이재준", position: "DF", country: "대한민국", age: 18, rating: 65 },
            { name: "황승준", position: "DF", country: "대한민국", age: 19, rating: 66 },
            { name: "김민재", position: "MF", country: "대한민국", age: 21, rating: 68 },
            { name: "김태현", position: "DF", country: "대한민국", age: 28, rating: 73 },
            { name: "전지완", position: "GK", country: "대한민국", age: 21, rating: 67 },
            { name: "윤현석", position: "MF", country: "대한민국", age: 21, rating: 68 },
            { name: "정상운", position: "FW", country: "대한민국", age: 22, rating: 69 },
            { name: "공시현", position: "GK", country: "대한민국", age: 20, rating: 66 },
            { name: "연제운", position: "DF", country: "대한민국", age: 30, rating: 72 },
            { name: "콤파뇨", position: "FW", country: "이탈리아", age: 29, rating: 78 },
            { name: "김진규", position: "MF", country: "대한민국", age: 28, rating: 74 },
            { name: "임준휘", position: "FW", country: "대한민국", age: 20, rating: 67 },
            { name: "김창훈", position: "FW", country: "대한민국", age: 20, rating: 68 }
        ],
        description: "한국 축구의 명문, 전북의 자부심과 전통"
    },

    "울산 현대": {
        league: 3,
        players: [
            { name: "조현택", position: "DF", country: "대한민국", age: 24, rating: 72 },
            { name: "강민우", position: "DF", country: "대한민국", age: 19, rating: 67 },
            { name: "서명관", position: "DF", country: "대한민국", age: 22, rating: 70 },
            { name: "정우영", position: "MF", country: "대한민국", age: 35, rating: 74 },
            { name: "보야니치", position: "MF", country: "스웨덴", age: 30, rating: 77 },
            { name: "고승범", position: "MF", country: "대한민국", age: 31, rating: 75 },
            { name: "말컹", position: "FW", country: "브라질", age: 31, rating: 78 },
            { name: "엄원상", position: "MF", country: "대한민국", age: 26, rating: 73 },
            { name: "강상우", position: "DF", country: "대한민국", age: 31, rating: 74 },
            { name: "이진현", position: "MF", country: "대한민국", age: 27, rating: 73 },
            { name: "정승현", position: "DF", country: "대한민국", age: 31, rating: 75 },
            { name: "이희균", position: "MF", country: "대한민국", age: 27, rating: 73 },
            { name: "루빅손", position: "MF", country: "스웨덴", age: 31, rating: 76 },
            { name: "허율", position: "FW", country: "대한민국", age: 24, rating: 72 },
            { name: "김영권", position: "DF", country: "대한민국", age: 35, rating: 73 },
            { name: "조현우", position: "GK", country: "대한민국", age: 33, rating: 76 },
            { name: "김민혁", position: "MF", country: "대한민국", age: 32, rating: 74 },
            { name: "문정인", position: "GK", country: "대한민국", age: 27, rating: 71 },
            { name: "윤종규", position: "DF", country: "대한민국", age: 26, rating: 72 },
            { name: "박민서", position: "DF", country: "대한민국", age: 24, rating: 71 },
            { name: "이청용", position: "MF", country: "대한민국", age: 37, rating: 72 },
            { name: "이재익", position: "DF", country: "대한민국", age: 26, rating: 72 },
            { name: "윤재석", position: "MF", country: "대한민국", age: 21, rating: 69 },
            { name: "류성민", position: "GK", country: "대한민국", age: 21, rating: 67 },
            { name: "라카바", position: "MF", country: "베네수엘라", age: 22, rating: 73 },
            { name: "트로야크", position: "DF", country: "폴란드", age: 31, rating: 74 },
            { name: "백인우", position: "MF", country: "대한민국", age: 18, rating: 66 },
            { name: "최석현", position: "DF", country: "대한민국", age: 22, rating: 69 },
            { name: "에릭", position: "MF", country: "브라질", age: 28, rating: 75 }
        ],
        description: "공업도시 울산의 자존심, 현대의 힘찬 질주"
    },

    "포항 스틸러스": {
        league: 3,
        players: [
            { name: "윤평국", position: "GK", country: "대한민국", age: 33, rating: 74 },
            { name: "어정원", position: "DF", country: "대한민국", age: 26, rating: 72 },
            { name: "이동희", position: "DF", country: "대한민국", age: 25, rating: 71 },
            { name: "전민광", position: "DF", country: "대한민국", age: 32, rating: 73 },
            { name: "아스프로", position: "DF", country: "오스트레일리아", age: 29, rating: 75 },
            { name: "김종우", position: "MF", country: "대한민국", age: 31, rating: 74 },
            { name: "김인성", position: "FW", country: "대한민국", age: 35, rating: 73 },
            { name: "오베르단", position: "MF", country: "브라질", age: 30, rating: 76 },
            { name: "조르지", position: "FW", country: "브라질", age: 26, rating: 77 },
            { name: "백성동", position: "FW", country: "대한민국", age: 33, rating: 72 },
            { name: "주닝요", position: "FW", country: "브라질", age: 27, rating: 76 },
            { name: "조재훈", position: "FW", country: "대한민국", age: 22, rating: 70 },
            { name: "강민준", position: "DF", country: "대한민국", age: 22, rating: 69 },
            { name: "박승욱", position: "DF", country: "대한민국", age: 28, rating: 72 },
            { name: "이규민", position: "FW", country: "대한민국", age: 19, rating: 68 },
            { name: "신광훈", position: "DF", country: "대한민국", age: 38, rating: 69 },
            { name: "강현제", position: "FW", country: "대한민국", age: 22, rating: 69 },
            { name: "이호재", position: "FW", country: "대한민국", age: 24, rating: 70 },
            { name: "안재준", position: "FW", country: "대한민국", age: 24, rating: 70 },
            { name: "황인재", position: "GK", country: "대한민국", age: 31, rating: 72 },
            { name: "홍지우", position: "MF", country: "대한민국", age: 22, rating: 69 },
            { name: "이동협", position: "DF", country: "대한민국", age: 22, rating: 68 },
            { name: "한현서", position: "DF", country: "대한민국", age: 21, rating: 67 },
            { name: "차준영", position: "DF", country: "대한민국", age: 21, rating: 67 },
            { name: "박수빈", position: "FW", country: "대한민국", age: 19, rating: 66 },
            { name: "백승원", position: "FW", country: "대한민국", age: 19, rating: 66 },
            { name: "조성욱", position: "DF", country: "대한민국", age: 30, rating: 71 },
            { name: "홍윤상", position: "FW", country: "대한민국", age: 23, rating: 69 },
            { name: "기성용", position: "MF", country: "대한민국", age: 36, rating: 72 },
            { name: "이헌재", position: "FW", country: "대한민국", age: 19, rating: 66 },
            { name: "이창우", position: "DF", country: "대한민국", age: 19, rating: 66 },
            { name: "황서웅", position: "MF", country: "대한민국", age: 20, rating: 67 },
            { name: "완델손", position: "DF", country: "브라질", age: 36, rating: 70 },
            { name: "홍성민", position: "GK", country: "대한민국", age: 18, rating: 64 },
            { name: "김동진", position: "MF", country: "대한민국", age: 22, rating: 68 },
            { name: "김동민", position: "MF", country: "대한민국", age: 20, rating: 67 },
            { name: "권능", position: "GK", country: "대한민국", age: 19, rating: 65 },
            { name: "조상혁", position: "FW", country: "대한민국", age: 21, rating: 67 }
        ],
        description: "철강도시 포항의 강철 같은 의지와 투혼"
    },

    "광주 FC": {
        league: 3,
        players: [
            { name: "김경민", position: "GK", country: "대한민국", age: 33, rating: 73 },
            { name: "조성권", position: "DF", country: "대한민국", age: 24, rating: 70 },
            { name: "이민기", position: "DF", country: "대한민국", age: 32, rating: 72 },
            { name: "변준수", position: "DF", country: "대한민국", age: 23, rating: 69 },
            { name: "안영규", position: "DF", country: "대한민국", age: 35, rating: 70 },
            { name: "아사니", position: "FW", country: "북마케도니아", age: 27, rating: 78 },
            { name: "이강현", position: "MF", country: "대한민국", age: 27, rating: 73 },
            { name: "최경록", position: "MF", country: "대한민국", age: 30, rating: 73 },
            { name: "가브리엘", position: "FW", country: "브라질", age: 23, rating: 74 },
            { name: "노희동", position: "GK", country: "대한민국", age: 23, rating: 68 },
            { name: "박정인", position: "FW", country: "대한민국", age: 24, rating: 71 },
            { name: "유제호", position: "MF", country: "대한민국", age: 24, rating: 70 },
            { name: "정지훈", position: "MF", country: "대한민국", age: 21, rating: 68 },
            { name: "헤이스", position: "FW", country: "브라질", age: 32, rating: 74 },
            { name: "박인혁", position: "FW", country: "대한민국", age: 29, rating: 72 },
            { name: "진시우", position: "DF", country: "대한민국", age: 22, rating: 68 },
            { name: "강희수", position: "MF", country: "대한민국", age: 22, rating: 68 },
            { name: "김한길", position: "MF", country: "대한민국", age: 30, rating: 72 },
            { name: "김진호", position: "DF", country: "대한민국", age: 25, rating: 70 },
            { name: "권성윤", position: "MF", country: "대한민국", age: 24, rating: 69 },
            { name: "곽성훈", position: "DF", country: "대한민국", age: 19, rating: 66 },
            { name: "안혁주", position: "MF", country: "대한민국", age: 20, rating: 67 },
            { name: "김동화", position: "GK", country: "대한민국", age: 22, rating: 67 },
            { name: "민상기", position: "DF", country: "대한민국", age: 33, rating: 71 },
            { name: "신창무", position: "FW", country: "대한민국", age: 32, rating: 71 },
            { name: "김태준", position: "GK", country: "대한민국", age: 24, rating: 68 },
            { name: "김윤호", position: "FW", country: "대한민국", age: 18, rating: 65 },
            { name: "하승운", position: "FW", country: "대한민국", age: 27, rating: 72 },
            { name: "오후성", position: "MF", country: "대한민국", age: 25, rating: 70 },
            { name: "주세종", position: "MF", country: "대한민국", age: 34, rating: 71 },
            { name: "문민서", position: "MF", country: "대한민국", age: 21, rating: 67 },
            { name: "심상민", position: "DF", country: "대한민국", age: 32, rating: 70 },
            { name: "홍용준", position: "MF", country: "대한민국", age: 22, rating: 68 },
            { name: "박태준", position: "MF", country: "대한민국", age: 26, rating: 70 },
            { name: "두현석", position: "MF", country: "대한민국", age: 29, rating: 72 }
        ],
        description: "광주의 열정과 호남의 축구 정신을 이어가는 팀"
    },

    "리옹": {
        league: 3,
        players: [
            { name: "루카스 페리", position: "GK", country: "브라질", age: 27, rating: 76 },
            { name: "니콜라스 탈리아피코", position: "DF", country: "아르헨티나", age: 32, rating: 78 },
            { name: "폴 아쿠오쿠", position: "MF", country: "코트디부아르", age: 27, rating: 76 },
            { name: "조르당 베레투", position: "MF", country: "프랑스", age: 32, rating: 75 },
            { name: "코랑탱 톨리소", position: "MF", country: "프랑스", age: 30, rating: 79 },
            { name: "알렉상드르 라카제트", position: "FW", country: "프랑스", age: 34, rating: 81 },
            { name: "말릭 포파나", position: "MF", country: "벨기에", age: 20, rating: 74 },
            { name: "태너 테스만", position: "MF", country: "미국", age: 23, rating: 75 },
            { name: "아브네르 비니시우스", position: "DF", country: "브라질", age: 25, rating: 77 },
            { name: "라얀 셰르키", position: "MF", country: "프랑스", age: 21, rating: 87 },
            { name: "무사 니아카테", position: "DF", country: "세네갈", age: 29, rating: 76 },
            { name: "샤엘 쿰베디", position: "DF", country: "프랑스", age: 20, rating: 73 },
            { name: "클린톤 마타", position: "DF", country: "앙골라", age: 32, rating: 74 },
            { name: "티아고 알마다", position: "MF", country: "아르헨티나", age: 24, rating: 75 },
            { name: "와흐메드 오마리", position: "DF", country: "코모로스", age: 25, rating: 74 },
            { name: "네마냐 마티치", position: "MF", country: "세르비아", age: 37, rating: 75 },
            { name: "마하마두 디아와라", position: "MF", country: "프랑스", age: 20, rating: 71 },
            { name: "어니스트 누아마", position: "FW", country: "가나", age: 21, rating: 72 },
            { name: "레미 데캉", position: "GK", country: "프랑스", age: 29, rating: 72 },
            { name: "두예 찰레타차르", position: "DF", country: "크로아티아", age: 28, rating: 75 },
            { name: "조르지 미카우타제", position: "FW", country: "조지아", age: 24, rating: 76 },
            { name: "에인슬리 메이틀랜드나일스", position: "DF", country: "잉글랜드", age: 27, rating: 74 }
        ],
        description: "프랑스 축구의 명문 리옹의 영광 재건을 위한 도전"
    }
    }

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
    gameData.currentLeague = allTeams[teamKey].league; // 팀의 리그 설정
    
    applyTeamTheme(teamKey);
    document.getElementById('teamName').textContent = teamKey; // 한국어 팀명 직접 표시
    
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
    
    // 개인기록 시스템 초기화
    if (typeof recordsSystem !== 'undefined') {
        recordsSystem.initialize();
    }
    
    // 상대팀 설정 (같은 리그에서)
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
            case 'records':
            if (typeof updateRecordsTab === 'function') {
            updateRecordsTab();
            }
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
    // 같은 리그의 팀들 중에서 상대 선택
    const sameLeagueTeams = Object.keys(allTeams).filter(teamKey => 
        allTeams[teamKey].league === gameData.currentLeague && teamKey !== gameData.selectedTeam
    );
    gameData.currentOpponent = sameLeagueTeams[Math.floor(Math.random() * sameLeagueTeams.length)];
    updateDisplay();
}

function initializeLeagueData() {
    ['division1', 'division2', 'division3'].forEach(divisionKey => {
        gameData.leagueData[divisionKey] = {};
        // 각 리그의 팀들에 대해 초기화
        Object.keys(allTeams).forEach(teamKey => {
            if (allTeams[teamKey].league === parseInt(divisionKey.slice(-1))) {
                gameData.leagueData[divisionKey][teamKey] = {
                    matches: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    points: 0,
                    goalsFor: 0,
                    goalsAgainst: 0
                };
            }
        });
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
