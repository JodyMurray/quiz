

//questions and answers
var questionData = [
    {
        question: "Who is Bilbo Baggins?",
        a: "The elf",
        b: "The dwarf",
        c: "The hobbit",
        correctAnswer: "C"
    },   
    {
        question: "What happened to the Fellowship of the Ring soon after they've left Lothlórien?",
        answerA: "The group was trapped in a cave",
        answerB: "The leader of the group got lost",
        answerC: "The group was attacked by orcs",
        correctAnswer: "c"
    },
    {
        question: "What is the name of the wizard who always helps Frodo?",
        a:"Gandalf",
        b: "Saruman",
        c: "Sauron",
        correctAnswer: "a"
    },
    {
        question: "What was the gift Galadriel gave to Frodo?",
        a: "A sword",
        b: "A starlight",
        c: "A strand of her hair",
        correctAnswer: "c"

    },
    {
        question: "Who was the heir to the throne in Minas Tirith?",
        a: "Sauron",
        b: "Legolas",
        c: "Aragorn",
        correctAnswer: "c"
    },
    {
        question: "Who wanted to take over the kingdom of Rohan?",
        a:"Gandalf",
        b: "Sauron",
        c: "Saruman",
        correctAnswer: "c"
    },
    {
        question: "Who has been following Sam and Frodo on their way from Moria to Mordor?",
        a: "Gollum",
        b: "Gimli",
        c: "Legolas",
        correctAnswer: "a"
    },
    {
        question: "What is the title of the first book of the series?",
        a: "The Two Towers",
        b: "The Return of the King",
        c: "The Fellowship of the Ring",
        correctAnswer: "c"
    },  
    {
        question: "What are exactly the Two Watchers?",
        a: "Carved statues on the entrance to the Cirith Ungol Tower",
        b: "Massive statues of Anarion and Isildur standing on the River Anduin",
        c: "Two rivers flowing through and creating the borders in the Gap of Rohan",
        correctAnswer: "a"
    },
    {
        question: "What are Palantiri?",
        a: "3 powerful given to the Elves.",
        b: "7 seeing stones",
        c: "3 jewels made by Fëanor",
        correctAnswer: "b"
    },
    {
        question: "Which of those isn't a public inn in the Middle Earth?",
        a: "The Prancing Pony",
        b: "The Green Dragon",
        c: "The Southern Star",
        correctAnswer: "c"
    },
    {
        question: "Who is not affected by the Ring?",
        a:"Galadriel",
        b: "Bilbo",
        c: "Sam",
        correctAnswer: "c"
    },
    {
        question: "What is Bilbo's home called?",
        a: "Bag End",
        b: "Bag Shot",
        c: "Overhill",
        correctAnswer: "a"
    },
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionP = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
 
startQuiz()

function startQuiz(){
    deselectAns()
    const currentQuizData = questionData[currentQuiz]

    questionP.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
}
function deselectAns() {
    answers.forEach(answers=> answers.checked =false)
}
function getSelected(){
    let answers;
    answers.forEach(answers => {
        if(answers.checked){
            answer = answers.id;
        }
    });
    return answer
}
submitButton.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === questionData[currentQuiz].correctAnswer){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < questionData.length) {
            startQuiz();
        } else {
            quiz.innerHTML =`<h2>You answeered ${score}/${questionData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})