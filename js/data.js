const votes = { "EI": 0, "SN": 0, "FT":0, "PJ":0};
const quizzes = [
   {
      question: "Q1/12 </br>미림여자정보과학고 입학 첫 날!</br>새로운 친구들을 만났을 때 나는?",
      selections: [
         { text: "친구는 많으면 많을수록 좋지!</br>친구들을 사귈 생각에 너무 설레!!", idx: "EI", delta: 1 },
         { text: "너무 떨리고 긴장 돼 아무도 나에게 말을</br>안 걸어주면 어쩌지?", idx: "EI", delta: -1 }
      ]
   },
   {
      question: "Q2/12 </br>기말고사가 점점 다가오는데 공부가</br> 손에 안 잡혀ㅠㅠ 이때 고민에 빠진 나는?",
      selections: [
         { text: "지난 시험 문제는 어떻게 나왔지?</br>효율적인 암기 방법은 뭐가 있을까?", idx: "SN", delta: 1 },
         { text: "시험 없는 세상은 없을까..?</br>시험은 왜 존재하고..왜 봐야만 하는 걸까..", idx: "SN", delta: -1 }
      ]
   },
   {
      question: "Q3/12 </br>'와 대박! 너 과제 별로 열심히 안 하는 것</br> 같던데 진짜 잘했다! 완전 재능충이네'</br>라는 말을 들었을 때 나는?",
      selections: [
         { text: "(내 재능을 칭찬하다니.. 기분 좋다..ㅎㅎ)", idx: "FT", delta: 1 },
         { text: "(지금 나랑 싸우자는 거? 내가 과제를</br>얼마나 열심히 했는데 니가 뭘 알아...)", idx: "FT", delta: -1 }
      ]
   },
   {
      question: "Q4/12 </br>다음주까지 해야하는 JAVA과제가 있다!</br> 이때 나는??",
      selections: [
         { text: "아 뭐야~ 시간 많이 남았네~~ 지금은 놀자~!!!</br>당일치기가 최고지ㅋㅋㅋ!", idx: "PJ", delta: 1 },
         { text: "이번주 내로 if문까지 하고... 다음주는 반복문까지...<br/>이렇게 하면 이 날까지 끝낼 수 있을거야!", idx: "PJ", delta: -1 }
      ]
   },
   {
      question: "Q5/12 </br>몰아치는 수행평가와 과제를 끝내고난 뒤 </br>에너지가 빠질대로 빠진 나! </br>빠진 에너지를 채우기 위해 나는?",
      selections: [
         { text: "역시 친구와 노는게 최고!</br>친구와 만나 즐겁게 논다", idx: "EI", delta: 1 },
         { text: "아...피곤해 누워서 쉬고싶어</br> 집에서 혼자 휴식을 즐긴다", idx: "EI", delta: -1 }
      ]
   },
   {
      question: "Q6/12 </br>동아리 부원들과 새로운 프로젝트를</br>시작하려고 한다! 이때 나는?",
      selections: [
         { text: "이전까지 해온 방식이 더 좋지.</br>이미 보장되어 있는 방법이니까 더 잘 할 것 같아!", idx: "SN", delta: 1 },
         { text: "이번엔 새로운 방식으로 해볼까? </br>이게 더 좋은 방법일지도 몰라!", idx: "SN", delta: -1 }
      ]
   },
   {
      question: "Q7/12 </br>갑자기 '헉!'소리가 들리더니 </br>'나 과제 날아갔어'라는 말이 들렸다.</br>이때 나는?" ,
      selections: [
         { text:"헐... 괜찮아?'라고 물으면서 나의 ctrl+s를 누른다.", idx: "FT", delta: 1 },
         { text: "'저장했어?'라고 물으며 조용히 나의 ctrl+s를 누른다.", idx: "FT", delta: -1 }
      ]
   },
   {
      question: "Q8/12 </br>오늘은 진로의 날이다. 학교 끝나고</br>친구들과 점심을 먹기로했다. 이때 나는?",
      selections: [
         { text: "일단 피곤하니까 잠부터 자고 내일의</br>내가 알아서 하겠지~", idx: "PJ", delta: 1 },
         { text: "12시 30분에 학교를 마치고 식당까지</br> 1시에 도착한다고 생각하면... 미림마라탕이 좋겠어!", idx: "PJ", delta: -1 }
      ]
   },
   {
      question: "Q9/12 </br>드디어 기다리고 기다리던 여름방학이다!</br> 일주일에 내가 약속 잡는 횟수는?",
      selections: [
         { text: "일주일에 3번 만나는건 어때??</br> 우리 카페가서 회의할까? 점심은 뭐 먹을까?", idx: "EI", delta: 1 },
         { text: "일주일에 3번? 일주일에 3번은 너무 많은거 아니야?", idx: "EI", delta: -1 }
      ]
   },
   {
      question: "Q10/12 </br>선생님께서 취업하신 선배님의 이야기를 해주시며 취업에 대해 상상해보라고</br>하셨다. 이때 나는?",
      selections: [
         { text: "아직 취업하려면 한참 남았는데</br>벌써부터 상상해보라고?", idx: "SN", delta: 1 },
         { text: "나는 어디 회사로 들어가려나...</br>회사 구내식당은 맛있을까..?", idx: "SN", delta: -1 }
      ]
   },
   {
      question: "Q11/12 </br>나 공모전 붙었어! 라고 말하는 친구에</br>반응에 나는?",
      selections: [
         { text: "축하해!! 고생한 보람이있네", idx: "FT", delta: 1 },
         { text: "무슨 공모전인데? 축하해!!", idx: "FT", delta: -1 }
      ]
   },
   {
      question: "Q12/12 </br>매일 아침 버스를 타고 학교에 와야 한다</br>이때 나는?",
      selections: [
         { text: "버스 타야지 오늘 날씨 좋네 나이스~", idx: "PJ", delta: 1 },
         { text: "헐... 어떡해 버스 시간 3분 남았네 늦겠다.", idx: "PJ", delta: -1 }
      ]
   }
];

const infoList = {
   ENFJ: {
     name: '김명준 선생님',
     desc: '인간 골든 리트리버st',
     desc2: "#윤선희T",
     img: 'ENFJ.png',
     qrimg: 'QR_ENFJ.png'
   },
   ENFP: {
      name: '미림엔 없궁...',
      desc: '인싸 of 인싸st',
      desc2: "",
      img: 'ENFP.png',
      qrimg: 'QR_ENFP.png'
      
    },
    ENTJ: {
      name: '정하나 선생님',
      desc: '자기관리 끝판왕st',
      desc2: "",
      img: 'ENTJ.png',
      qrimg: 'QR_ENTJ.png'
    },
   ENTP: {
     name: '유병석 선생님',
     desc: '물음표 살인마st',
     desc2: "",
     img: 'ENTP.png',
     qrimg: 'QR_ENTP.png'
   },
   ESFJ: {
      name: '미림엔 없궁..',
      desc: '사교성 100%st',
      desc2: "",
      img: 'ESFJ.png',
      qrimg: 'QR_ESFJ.png'
    },
   ESFP: {
     name: '이하얀 선생님',
     desc: '인간 햇살st',
     desc2: "",
     img: 'ESFP.png',
     qrimg: 'QR_ESFP.png'
   },
   ESTJ: { 
     name: '최규정 선생님',
     desc: '부러지는 휴먼st',
     desc2: "#백현정T",
     img: 'ESTJ.png',
     qrimg: 'QR_ESTJ.png'
   },
   ESTP: { 
     name: '이재민 선생님',
     desc: '미림 뼈그맨st',
     desc2: "",
     img: 'ESTP.png',
     qrimg: 'QR_ESTP.png'
   },
   INFJ: {
     name: '신혜정 선생님',
     desc: '불타는 열정st',
     desc2: "",
     img: 'INFJ.png',
     qrimg: 'QR_INFJ.png'
   },
   INFP: { 
     name: '이형섭 선생님',
     desc: '범접불가 4차원st',
     desc2: "#오수연T",
     img: 'INFP.png',
     qrimg: 'QR_INFP.png'
   },
   INTJ: { 
     name: '함기훈 선생님',
     desc: '진정한 플랜맨st',
     desc2: "",
     img: 'INTJ.png',
     qrimg: 'QR_INTJ.png'
   },
   INTP: {
     name: '임정훈 선생님',
     desc: '고독한 츤데레st',
     desc2: "#박지우T",
     img: 'INTP.png',
     qrimg: 'QR_INTP.png'
   },
   ISFJ: {
      name: '미림엔 없궁...',
      desc: '인간계의 놀러온 천사st',
      desc2: "",
      img: 'ISFJ.png',
      qrimg: 'QR_ISFJ.png'
    },
   ISFP: { 
     name: '장민주 선생님',
     desc: '인간 고양이st',
     desc2: "",
     img: 'ISFP.png',
     qrimg: 'QR_ISFP.png'
   },
   ISTJ: { 
     name: '민주리 선생님',
     desc: '얼음 심장st',
     desc2: "",
     img: 'ISTJ.png',
     qrimg: 'QR_ISTJ.png'
   },
   ISTP: { 
     name: '권오재 선생님',
     desc: '쿨함의 정석st',
     desc2: "",
     img: 'ISTP.png',
     qrimg: 'QR_ISTP.png'
   }
}


