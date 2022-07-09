const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint= 12;

function addAnswer(answerText, qIdx, idx, delta){ //승빈
    let section = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-2');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    section.appendChild(answer); //answer이라는 변수가 section에 소속됨을 의미
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        votes[idx] += delta;
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
          children[i].disabled = true;
          children[i].style.WebkitAnimation = "fadeOut 0.5s";
          children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
         for (let i = 0; i < children.length; i++) {
            children[i].style.display = 'none';
          }
          goNext(++qIdx);
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
  