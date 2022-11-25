const quizDB = [
  {
    question: "Q1: where is my birth place located? ",
    a: "Jammu",
    b: "Bhopal",
    c: "Gwalior",
    d: "Shimla",
    ans: "ans2",
  },
  {
    question: "Q2:My Favorite Food? ",
    a: "DalBati & Bhaple",
    b: "Idli",
    c: "Non-veg",
    d: "All",
    ans: "ans4",
  },
  {
    question: "Q3: what is my Sport? ",
    a: "Boxing",
    b: "Cricket",
    c: "Basketball",
    d: "Football",
    ans: "ans1",
  },
  {
    question: "Q4: What is my current location? ",
    a: "Jammu",
    b: "Bhopal",
    c: "Chandigarth",
    d: "Shimla",
    ans: "ans1",
  },
];

//get all elements

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");



//variables
let questionCount = 0;

let score = 0;
//question put into html 
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
//call
loadQuestion();
//if answer match return id 
const getCheckAnswer = () => {
  let answer;

  answers.forEach((currAnsElm) => {
    if (currAnsElm.checked) {
      answer = currAnsElm.id;
    }
  });
  return answer;
};

//deselet selected for  next answer
const deselectAll = () => {
  answers.forEach((currAnsElm) => {
    currAnsElm.checked = false;
  });
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
//   console.log(checkedAnswer);
//answer  match score increase
  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;//increase  question count
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();//jump to next question
  } else {
    showScore.innerHTML = `<h3>  You Scored  
         ${score}/${quizDB.length}</h3>
         <button class="btn"  onclick="location.reload()">Play Again</button>
        `;
    showScore.classList.remove("scoreArea");  //remove class  so display none remove
  }
});
