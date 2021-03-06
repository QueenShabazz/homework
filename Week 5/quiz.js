
// need to have divs and id's of quiz results and submit
const quizcontainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){}
// variable to store the html output
const output =[];

// for each question..

const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },

    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "Typescript",
            c: "npm"
        },
        correctAnswer: "c"
    },

    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    },
    {
        question: "An Array is primarily used to contain what in JavaScript?",
        answers: {
            a: "Variables",
            b: "Functions",
            c: "Strings, Numbers and Booleans"
        },
        correctAnswer: "c"
    },

    {
        question: "?",
        answers: {
            a: "",
            b:"",
            c: "",
            d: ""
        },
        correctAnswer: "b"
    }
]

myQuestions.forEach(
    (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer..
        
        for(letter in currentQuestions.answers){

            //  add an HTML radio button

            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
            );
        }

        // add this question and its answers to the output

        output.push(
            `<div class="question"> ${currentQuestion.question}</div>

            <div class="answers"> ${answers.join('')}></div>`
        );
        }
);

// finally combine our output list into one string of html and piut it on the page
quizContainer.innerHTML = output.join('');
    

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        // thecode we want to run for each question goes here
    });

function showResults(){}

// display quiz right away 
buildQuiz();


// on submit, show results
submitButton.addEventListener('click' , showResults);


;







// var questions = [
//     {
//       title: "Commonly used data types DO NOT include:",
//       choices: ["strings", "booleans", "alerts", "numbers"],
//       answer: "alerts"
//     },
//     {
//       title: "The condition in an if / else statement is enclosed within ____.",
//       choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//       answer: "parentheses"
//     },
//     ///etc.
//   ];
  