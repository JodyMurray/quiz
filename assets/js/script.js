var quizSection = document.getElementById('quiz');
var resultsSection = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz(questions, quizSection, resultsSection, submitButton){

    function showQuestions(questions, quizSection){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers=[];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    +'<input type="radio" name="question'+i+'"value="'+letter+'">'
                    + letter+' '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question"> ' + questions[i].question + '</div>'
                +'<div class="answers">' + answers.join('') + '</div>'
            );
        }
            quizSection.innerHTML = output.join('');
    }
showQuestions(questions, quizSection);

    function showResults(questions, quizSection, resultsSection){
        var answerSections = quizSection.querySelectorAll('.answers');
    
    var userAns ='';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){
        userAns = (answerSections[i].queryselector('input[name=question'+i+']:checked') ||{}).value
    
    //correct answer
    if(userAns===answerSections[i].correctAnswer){
        numCorrect++;
        
        answerSections[i].style.color = 'lightblue';
    } else {
        answerSections[i].style.color = 'pink';
    }
    }
    resultsSection.innerHTML =numCorrect + 'out of'+ questions.length;
    }

    showQuestions(questions, quizSection);

    submitButton.onclick = function(){
        showResults(questions, quizSection, resultsSection);
    }
}
//questions and answers
var allQuestions = [
    {
        question: "Who is Bilbo Baggins?",
        answers: {
            a: "The elf",
            b: "The dwarf",
            c: "The hobbit",
    },
    correctAnswer: "c"
},
    {
        question: "What happened to the Fellowship of the Ring soon after they've left Lothlórien?",
        answers: {
            a: "The group was trapped in a cave",
            b: "The leader of the group got lost",
            c: "The group was attacked by orcs",
    },
    correctAnswer: "c"
    },
    {
        question: "What is the name of the wizard who always helps Frodo?",
        answers: {
            a:"Gandalf",
            b: "Saruman",
            c: "Sauron",
    },
    correctAnswer: "a"
},
    {
        question: "What was the gift Galadriel gave to Frodo?",
        answers: {
            a: "A sword",
            b: "A starlight",
            c: "A strand of her hair",
    },
    correctAnswer: "b"
},
    {
        question: "Who was the heir to the throne in Minas Tirith?",
        answers: {
            a:"Sauron",
            b: "Legolas",
            c: "Aragorn",
        correctAnswer: "C"
    },
    correctAnswer: "c"
},
    {
        question: "Who wanted to take over the kingdom of Rohan?",
        answers: {
            a:"Gandalf",
            b: "Sauron",
            c: "Saruman",
    },
    correctAnswer: "c"
},
    {
        question: "Who has been following Sam and Frodo on their way from Moria to Mordor?",
            answers: {
            a: "Gollum",
            b: "Gimli",
            c: "Legolas",
    },
    correctAnswer: "a"
},
    {
        question: "What is the title of the first book of the series?",
        answers: {
            a: "The Two Towers",
            b: "The Return of the King",
            c: "The Fellowship of the Ring",
    },
    correctAnswer: "c"
    },
    {
        question: "What are exactly the Two Watchers?",
        answers: {
            a: "Carved statues on the entrance to the Cirith Ungol Tower",
            b: "Massive statues of Anarion and Isildur standing on the River Anduin",
            c: "Two rivers flowing through and creating the borders in the Gap of Rohan",
    },
    correctAnswer: "a"
    },
    {
        question: "What are Palantiri?",
        answers: {
            a: "3 powerful given to the Elves.",
            b: "7 seeing stones",
            c: "3 jewels made by Fëanor",
    },
    correctAnswer: "b"
    },
    {
        question: "Which of those isn't a public inn in the Middle Earth?",
        answers: {
            a: "The Prancing Pony",
            b: "The Green Dragon",
            c: "The Southern Star",
    },
    correctAnswer: "c"
    },
    {
        question: "Who is not affected by the Ring?",
        answers: {
            a:"Galadriel",
            b: "Bilbo",
            c: "Sam",
    },
    correctAnswer: "c"
    },
    {
        question: "What is Bilbo's home called?",
        answers: {
            a: "Bag End",
            b: "Bag Shot",
            c: "Overhill",
    },
    correctAnswer: "a"
},
]

buildQuiz(allQuestions, quizSection, resultsSection, submitButton);