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
        question: "What does the Elvish word 'mellon' mean?",
        a: "Friend",
        b: "Enemy",
        c: "Man",
        correctAnswer: "a"
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
        question: "On which finger is Sauron seen wearing the Ring?",
        a: "Middle finger",
        b: "Index finger",
        c: "Thumb",
        correctAnswer: "b"
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
// const text1 = document.getElementById('player-name');
// const button = document.getElementById('start');
// const out1 = document.getElementById('output1');



var count = 20;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

let currentQuiz = 0;
let score = 0;
 //start quiz function
startQuiz()
function startQuiz(){
    deselectAns()
    const currentQuizData = questionData[currentQuiz];

    questionP.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
}
function deselectAns() 
{
    answers.forEach(answers=> answers.checked =false)
}

function getSelected() 
{
    let answer
    answers.forEach(answers => {
        if (answers.checked) {
            answer = answers.id;
        }
    });

    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected()
        if(answer === questionData[currentQuiz].correctAnswer){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < questionData.length) {
            startQuiz()
        } else {
            quiz.innerHTML =`<h2>You answered ${score}/${questionData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    } 
);
var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'https://i.guim.co.uk/img/media/fd1398dcde9ef858d15a5cbacd2d4d13fae94ee2/447_0_1986_1192/master/1986.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=a40ac39a948faf6f15c44d69fdb0e850';
images[1] = 'https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/the_lord_of_the_rings_the_fellowship_of_the_ring_banner.jpeg';
images[2] = 'https://static.dw.com/image/15912725_101.jpg';
images[3] = 'https://assets.reedpopcdn.com/-1629897048023.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/-1629897048023.jpg';
images[4] = 'https://ychef.files.bbci.co.uk/976x549/p04mbz2p.jpg';
images[5] = 'https://www.dsogaming.com/wp-content/uploads/2020/12/The-Lord-of-the-Rings-The-Shire-Unreal-Engine-4.jpg';
images[6] = 'https://c4.wallpaperflare.com/wallpaper/793/812/996/the-lord-of-the-rings-bag-end-the-shire-interiors-house-wallpaper-thumb.jpg';
images[7] = 'https://4.bp.blogspot.com/-0_0N_ImKgNk/UDFHRCscN8I/AAAAAAAAAH4/ubjGvvV2Zv4/w1200-h630-p-k-no-nu/middle-earth-map.jpg';




function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;