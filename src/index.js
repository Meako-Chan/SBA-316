
let menuLinks = [
    {text: "Home", href: "./home"},
    {text: "Quiz", href: "./index.html"},
]


let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "green";
topMenuEl.classList.add("flex-around");

menuLinks.forEach(function createLink(link){
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link.href);
    anchor.textContent = link.text;
    topMenuEl.appendChild(anchor);
});


let quiz = [
    {
        question: "What color does a Saiyan's hair become when turning into a Super Saiyan?",
        choice1: "red",
        choice2: "blue",
        choice3: "green",
        choice4: "yellow",
        answer: "yellow",
    }
    ,
    {
        question: "Who was the first character to achieve Super Saiyan 2?",
        choice1: "Goku",
        choice2: "Gohan",
        choice3: "Vegeta",
        choice4: "Trunks",
        answer: "Gohan",
    }
    ,
    {
        question: "Who is the current Guardian of Earth at the end of Dragon Ball Z?",
        choice1: "Kami",
        choice2: "Piccolo",
        choice3: "Grand Elder Guru",
        choice4: "Dende",
        answer: "Dende",
    }
]

//Note: Remember to use DocumentFragment
let question = document.getElementById("question");
console.log(question.innerHTML);

let choice_1 = document.getElementById("choice-1").nextElementSibling;
let choice_2 = document.getElementById("choice-2").nextElementSibling;
let choice_3 = document.getElementById("choice-3").nextElementSibling;
let choice_4 = document.getElementById("choice-4").nextElementSibling;
let choices = document.getElementsByClassName("answer");
// console.log(choices)

console.log(choice_1);
console.log(choice_2);
console.log(choice_3);
console.log(choice_4);

let submit = document.getElementById("submit")
let current_question = 0;
let score = 0;

question.textContent = (current_question+1) + "." + quiz[current_question].question;
choice_1.textContent = quiz[current_question].choice1;
choice_2.textContent = quiz[current_question].choice2;
choice_3.textContent = quiz[current_question].choice3;
choice_4.textContent = quiz[current_question].choice4;