const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
question.style.textAlign="center";
question.style.fontSize="30px";

var br = document.createElement("br");
document.body.appendChild(br);


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


let questions = [
    {
        question: '여유로운 주말, \n 무엇으로 시간을 보낼까요?',
        choice1: '디저트 베이킹',
        choice2: '일기 쓰기',
        choice3: '소설책 읽기',
        choice4: '영화 보기',
        answer: 1,
    },
    {
        question: "편의점에서 \n 어떤 간식을 사고 싶나요?",
        choice1: "사탕",
        choice2: "매운 라면",
        choice3: "견과류",
        choice4: "나쵸",
        answer: 2,
    },
    {
        question: "인테리어에 도전! \n 어떤 물품을 살까요?",
        choice1: "파스텔 컬러의 드림캐쳐",
        choice2: "감성 LP판",
        choice3: "푹신한 바디필로우",
        choice4: "빈티지 액자",
        answer: 2,
    },
    {
        question: '아침에 일어났을 때 \n어떤 날씨가 좋을까요?',
        choice1: '햇살이 환하게 비치는 날씨',
        choice2: '안개가 짙게 깔린 날씨',
        choice3: '비가 고요하게 내리는 날씨',
        choice4: '햇빛이 구름에 가려 시원한 날씨',
        answer: 3,
    },
    {
        question: '창가에 두는 화분으로는 \n 어떤 것이 좋을까요?',
        choice1: '허브',
        choice2: '선인장',
        choice3: '데이지',
        choice4: '스투키',
        answer: 2,
    },
    {
        question: '친구와 다툰 후, \n 당신의 대처는?',
        choice1: '일단 생각부터 긍정적으로!',
        choice2: '서운했던 이유 설명!',
        choice3: '냉철하게 문제 분석!',
        choice4: '깔끔하게 화를 낸 후 화해!',
        answer: 4,
    },
    {
        question: '스트레스로 폭발 직전! \n 어떤 노래를 들을까요?',
        choice1: '아이돌 가수의 신나는 댄스 뮤직',
        choice2: '눈물이 핑 도는 이별 발라드',
        choice3: '그루브 타게 되는 R&B',
        choice4: '귀에 꽂히는 빠른 힙합과 락',
        answer: 4,
    },
    {
        question: '쇼핑에서 \n 어떤 옷을 새로 살까요?',
        choice1: '밝은 색의 후드집업',
        choice2: '무채색 가디건',
        choice3: '톤다운 컬러의 맨투맨',
        choice4: '깔끔한 화이트 셔츠',
        answer: 4,
    },
    {
        question: '브런치를 먹는 당신이\n 선택한 음료는?',
        choice1: '오렌지 주스',
        choice2: '콜라',
        choice3: '얼그레이 티',
        choice4: '커피',
        answer: 4,
    },

];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 9;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();
