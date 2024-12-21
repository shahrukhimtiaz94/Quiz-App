const quizData = [
  {
    question: "1. What does HTML stand for?",
    id: 1,
    options: [
      "Hyper text markup language",
      "Hyperlinks and text markup language",
      "Home tool markup language",
      "Other",
    ],
    answer: "Hyper text markup language",
  },
  {
    question: "2. Who is making the Web standards?",
    id: 2,
    options: ["Mozilla", "Google", "Microsoft", "None of them"],
    answer: "Google",
  },
  {
    question: "3. Choose the correct HTML element for the largest heading:",
    id: 3,
    options: ["<heading>", "<h1>", "<h6>", "None of them"],
    answer: "<h1>",
  },
  {
    question: "4. What is the correct HTML element for inserting a line break?",
    id: 4,
    options: ["<blr>", "<break>", "<br>", "None of them"],
    answer: "<br>",
  },
  {
    question: "5. What is the correct HTML for adding a background color?",
    id: 5,
    options: [
      "<body bg='yellow'>",
      "<background>yellow</background>",
      "<body style='background-color: red'>",
      "None of them",
    ],
    answer: "<body style='background-color: red'>",
  },
  {
    question: "6. Choose the correct HTML element to define important text",
    id: 6,
    options: ["<strong>", "<important>", "<bold>", "None of them"],
    answer: "<strong>",
  },
  {
    question: "7. Choose the correct HTML element to define emphasized text",
    id: 7,
    options: ["<i>", "<em>", "<italic>", "None of them"],
    answer: "<em>",
  },
  {
    question: "8. What is the correct HTML for creating a hyperlink?",
    id: 8,
    options: [
      "<a>www.google.com</a>",
      "<a link='www.google.com'>",
      "<a href='www.google.com'></a>",
      "None of them",
    ],
    answer: "<a href='www.google.com'></a>",
  },
  {
    question: "9. Which character is used to indicate an end tag?",
    id: 9,
    options: ["/", "<", "!", "None of them"],
    answer: "/",
  },
  {
    question: "10. How can you open a link in a new tab/browser window?",
    id: 10,
    options: [
      "<a href='url' target='new'>",
      "<a href='url' target='_blank'>",
      "<a newTab='url'>",
      "None of them",
    ],
    answer: "<a href='url' target='_blank'>",
  },
  {
    question: "11. What tag is used to define a hyperlink in HTML?",
    id: 11,
    options: ["<a>", "<link>", "<href>", "None of them"],
    answer: "<a>",
  },
  {
    question: "12. why do we use br tag?",
    id: 12,
    options: [
      "Start a new paragraph",
      "Create a list",
      " for break line",
      "None of them",
    ],
    answer: "for break line",
  },
  {
    question: "13. How do you add an image to a webpage?",
    id: 13,
    options: [
      "<img src='url'>",
      "<src='url'>",
      "<media src='url'>",
      "None of them",
    ],
    answer: "<img src='url'>",
  },
  {
    question: "14. Which HTML tag is used to define a table cell?",
    id: 14,
    options: ["<table>", "<td>", "<tr>", "None of them"],
    answer: "<td>",
  },
  {
    question: "15.What does the <ul> tag represent?",
    id: 15,
    options: [
      "Ordered list",
      "Unordered list",
      "Universal list",
      "None of them",
    ],
    answer: "Unordered list",
  },
  {
    question: "16. Choose the correct HTML element for the largest heading:",
    id: 16,
    options: ["<heading>", "<h1>", "<h6>", "None of them"],
    answer: "<h1>",
  },
  {
    question: "17. Who is making the Web standards?",
    id: 17,
    options: ["Mozilla", "Google", "Microsoft", "None of them"],
    answer: "Google",
  },
  {
    question: "18. What is the correct HTML for creating a hyperlink?",
    id: 18,
    options: [
      "<a>www.google.com</a>",
      "<a link='www.google.com'>",
      "<a href='www.google.com'></a>",
      "None of them",
    ],
    answer: "<a href='www.google.com'></a>",
  },
  {
    question: "19. why do we use br tag?",
    id: 19,
    options: [
      "Start a new paragraph",
      "Create a list",
      " for break line",
      "None of them",
    ],
    answer: "for break line",
  },
  {
    question: "20. Which character is used to indicate an end tag?",
    id: 20,
    options: ["/", "<", "!", "None of them"],
    answer: "/",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

// function showQuestion() {
//   const question = quizData[currentQuestion];
//   questionElement.innerText = question.question;
//   optionsElement.innerHTML = ""; // Clear previous options
//   let hideBtn = document.getElementById("botn");
//   let showBtn = document.getElementById("botm");
//   if (question.id > 1) {
//     hideBtn.style.display = "block";
//   }
//   if (question.id < 20) {
//     showBtn.style.display = "block";
//   }
//   question.options.forEach((option) => {
//     const button = document.createElement("button");
//     button.innerText = option;
//     optionsElement.appendChild(button);
//     button.addEventListener("click", selectAnswer); // Attach event to select the answer
//     button.setAttribute("class", "buttons");
//   });
// }
function showQuestion() {
  const question = quizData[currentQuestion];

  // Display the question text
  questionElement.innerText = question.question;

  // Clear previous options
  optionsElement.innerHTML = "";

  // Generate options for the current question
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.setAttribute("class", "buttons");

    // Add click event to highlight the selected button
    button.addEventListener("click", (e) => {
      // Clear background of all buttons first
      const allButtons = optionsElement.querySelectorAll("button");
      allButtons.forEach((btn) => (btn.style.backgroundColor = ""));

      // Set background color for the selected button
      e.target.style.backgroundColor = "lightblue";

      // Check the selected answer
      selectAnswer(e);
    });

    optionsElement.appendChild(button);
  });

  // Handle navigation buttons
  const prevBtn = document.getElementById("botn");
  const nextBtn = document.getElementById("botm");

  if (prevBtn) {
    prevBtn.style.display = currentQuestion > 0 ? "block" : "none";
  }
  if (nextBtn) {
    nextBtn.style.display = currentQuestion < quizData.length - 1 ? "block" : "none";
  }
}



function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
function showPreviousQuestion() {
  if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
  }
}

function showNextQuestion() {
  if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      showQuestion();
  }
}

function showResult() {
  let hideDiv = document.getElementById("hideDiv");
  let hideDiv2 = document.getElementById("hideDiv2");
  let hidepagination = document.getElementById("alc");
  let cont = document.getElementById("cont");

  hideDiv.style.display = "none";
  hideDiv2.style.display = "none";
  hidepagination.style.display = "none";
  cont.style.justifyContent = "center";

  let quiz = document.getElementById("quiz");
  quiz.style.display = "block";
  var plName = document.getElementById("inpName");

  // Calculate percentage
  let percentage = (score / quizData.length) * 100;

  // Calculate grade
  let grade = "";
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display the result
  quiz.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>${plName.innerText} score: ${score}/${quizData.length}</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
      <p>Grade: ${grade}</p>
      <p id="heading3"></p>
    `;

  // Set feedback based on score
  let elm = document.getElementById("heading3");
  if (score <= 5) {
    elm.innerText = "Sorry :( You have to Learn Again";
  }
  if (score <= 10 && score > 5) {
    elm.innerText = "Not bad, but I know you can do better!";
  }
  if (score <= 15 && score > 10) {
    elm.innerText = "Well, You're Passed!";
  }
  if (score <= 20 && score > 15) {
    elm.innerText = "Great, keep it up!";
  }
  if (score <= 25 && score > 20) {
    elm.innerText = "Sounds good, you can make it even better!";
  }
  if (score <= 30 && score > 25) {
    elm.innerText = "Congrats :) , You've won the quiz!";
  }
}

showQuestion();
let all_questions = () => {
  let quesDiv = document.getElementById("alb");
  quesDiv.innerHTML = ""; // Clear any existing buttons to avoid duplicates

  for (let i = 0; i < quizData.length; i++) {
    let ques = quizData[i].id;

    // Create a button for each question
    let questionDiv = document.createElement("button");
    questionDiv.setAttribute("class", "button-s");

    // Set the button text based on question number
    if (ques < 10) {
      questionDiv.innerText = `Question - 0${ques}`;
    } else {
      questionDiv.innerText = `Question - ${ques}`;
    }

    // Add an event listener to display the selected question on click
    questionDiv.addEventListener("click", () => {
      currentQuestion = i; // Set the current question index
      showQuestion(); // Show the corresponding question
    });

    // Append the button to the container
    quesDiv.appendChild(questionDiv);
  }
};

// Call the function to create the buttons
all_questions();


