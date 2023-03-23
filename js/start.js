const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint= 12;

// 승빈
function addAnswer(answerText, qIdx, idx, delta){   // 4개의 파라미터를 받은 함수 선언
  let section = document.querySelector('.answerBox');  // section 변수에 querySelector() 선택자로 Html에 있는 클래스 값이 .answerBox인 첫번째 요소에 접근한다.
  // createElement() : 원하는 태그를 생성해주는 기능을 함
  let answer = document.createElement('button'); // answer라는 변수를 createElement() 선택자를 사용하여 버튼을 만든다.
  // classList.add() : 클래스를 추가하는 메서드이다.
  answer.classList.add('answerList'); // 버튼이 추가되었을 때 classList.add()라는 메서드를 통해 ansewerList라는 이름의 클래스 추가
  answer.classList.add('my-5'); // 버튼이 추가되었을 때 classList.add()로 'my-5' 추가 margin값
  answer.classList.add('py-2'); //버튼이 추가되었을 때 classList.add()로 'py-2' 추가 padding값
  answer.classList.add('mx-auto'); // 버튼이 추가되었을 때 classList.add()로 'mx-auto' 추가 기본값
  answer.classList.add('fadeIn'); // 버튼이 추가되었을 때 classList.add()로 'fadeIn' 추가

  // appendChild란 함수를 통해서 answer라는 button이 section안에 소속되는 관계를 만들어줌
  section.appendChild(answer); //answer이라는 변수가 section에 소속됨을 의미
  answer.innerHTML = answerText; // answer에 innerHTML을 사용하여 start.js의 text의 값을 가져온다

  // createElement라는 선택자를 이용하여 버튼을 만들어주었기 때문에 on click이라는 속성을 addEventListener()라는 js 함수를 이용하여 만들어준다.
  // addEventListener() : 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정함
  answer.addEventListener("click", function() { // answer 버튼에 eventListener를 추가
      votes[idx] += delta; // votes : EI, SN, FT, PJ의 초기값, idx 값에 따라 delta의 값이 더해짐
      // querySelectorAll() : CSS선택자와 일치하는 요소 목록을 모두 찾음(문서 객체를 가져오는 복수 메서드)
      var children = document.querySelectorAll('.answerList'); // children 변수에 버튼 3개를 전부를 담으려 하는데 querySelectorAll()로 다 선택을하기 위해서는 class나 id값이 필요하므로 answerList의 클래스를 가져옴
      for (let i = 0; i < children.length; i++) { // 0 ~ children의 길이만큼 i가 증가함
        // disabled : 태그를 사용한 버튼을 활성화/비활성화 할 때는 disabled속성을 이용함
        children[i].disabled = true; // 변수에 요소마다 disabled의 값에 true 값을 주어 선택된 버튼을 제외한 나머지 버튼은 비활성화 시킴
        children[i].style.WebkitAnimation = "fadeOut 0.5s"; // children에서 style의 WebkitAnimation에 "fadeOut 0.5s" 지정
        children[i].style.animation = "fadeOut 0.5s"; // 그냥 animation도 "fadeOut 0.5s" 지정
      }
      setTimeout(() => { // setTimeout()함수를 만들어 버튼이 사라진 450초 쯤 이후 다시 반복문을 돌면서 버튼에 대한 style의 display를 none으로 바꿈
       for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'none'; // 요소마다 style의 display에 none을 주게되면 선택된 버튼을 제외한 모든 버튼이 사라짐 
        }
        // 반복문이 끝난 뒤 goNext() 함수를 넣음
        goNext(++qIdx); // goNext()함수의 qIdx값을 1씩 증가 시키며 호출
      }, 450)
  }, false);
}

function getMBTI() {  //민영
  // 화살표 함수 이용 
    let result = "";

    result += votes["EI"] >= 0 ? "E" : "I"; // 양수 E출력, 음수 I출력
    console.log(result);
    result += votes["SN"] >= 0 ? "S" : "N"; // 양수 S출력, 음수 N출력
    console.log(result);
    result += votes["FT"] >= 0 ? "F" : "T"; // 양수 F출력, 음수 T출력
    console.log(result);
    result += votes["PJ"] >= 0 ? "P" : "J"; // 양수 P출력, 음수 J출력
    console.log(result);

    return result; // result 값 안에 votes 값에서 최종선택된 값 출력

}

function goResult(person) { //은진
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
      }, 450)})
      console.log(result);
      setResult(person);
  }

function setResult(person){ //은진
    let resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    let imgURL = 'img/' + person.img;
    resultImg.src = imgURL;

    let qrImg = document.createElement('img');
    const imgDiv2 = document.querySelector('#qrImg');
    let imgURL2 = 'img/' + person.qrimg;
    qrImg.src = imgURL2;

    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    qrImg.classList.add('img-fluid');
    imgDiv2.appendChild(qrImg);

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = person.name;
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = person.desc;
    const resultDesc2 = document.querySelector('.resultDesc2');
    resultDesc2.innerHTML = person.desc2;
  }

function goNext(qIdx){ //민영
    if(qIdx === endPoint){ // qIdx(문항넘버)와 endpoint 값이 같다면
        const MBTI = getMBTI();//getMBTI함수에서 MBTI값 MBTI변수에 넣어줌
        //console.log(infoList[MBTI]);
        goResult(infoList[MBTI]);// goresult에 MBTI값 infolist 출력
        return;
    }
    let q = document.querySelector('.qBox'); //qbox를 q로 선택함
    q.innerHTML = quizzes[qIdx].question;//q안에 문항넘버별로의 질문들 넣음
    for(let s of quizzes[qIdx].selections){
        //idx는 gonext() 함수에서 나온 for 반복문의 카운터 s
        addAnswer(s.text, qIdx, s.idx, s.delta); //카운터 s에 따라서 addAnswer항목들 출력
    }
}
var isStartButtonClicked = 0;
function begin(){ //신흥
    if(isStartButtonClicked == 0){
      //alert("처음!");
      isStartButtonClicked = 1;
      main.style.WebkitAnimation = "fadeOut 0.3s";
    main.style.animation = "fadeOut 0.3s";
    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block"
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
    }else{
      //alert("이미 눌렀는데");
    }
  }
  