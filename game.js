const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
question.style.textAlign="center";

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
        choice1: '베이킹',
        choice2: '일기쓰기',
        choice3: '소설책 읽기',
        choice4: '영화 감상',
        answer: 1,
    },
    {
        question:
            "편의점에서 \n 어떤 간식을 사고 싶나요?",
        choice1: "사탕",
        choice2: "초콜릿",
        choice3: "말린 과일",
        choice4: "나쵸",
        answer: 2,
    },
    {
        question: "인테리어에 도전! \n 어떤 물품을 살까요?",
        choice1: "파스텔 컬러 벽지",
        choice2: "풀음향장비",
        choice3: "인테리어용 책",
        choice4: "수납용품",
        answer: 2,
    },
    {
        question: '아침에 일어났을 때 \n 날씨가 어떠면 좋을까요?',
        choice1: '햇살이 비치는 날씨',
        choice2: '구름이 깔린 날씨',
        choice3: '비가 조용하게 내리는 날씨',
        choice4: '햇빛이 없는 시원한 날씨',
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
        question: '친구와의 쇼핑에서 \n 어떤 옷을 살까요?',
        choice1: '밝은 색의 티셔츠',
        choice2: '와이드팬츠',
        choice3: '맨투맨',
        choice4: '펑키 프린팅 티셔츠',
        answer: 4,
    }
];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 6;


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
