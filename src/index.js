
let quiz = [
    {
        number: 1,
        question: "What color does a Saiyan's hair become when turning into a Super Saiyan?",
        choice1: "red",
        choice2: "blue",
        choice3: "green",
        choice4: "yellow",
        answer: "yellow",
    }
    ,
    {
        number: 2,
        question: "Who was the first character to achieve Super Saiyan 2?",
        choice1: "Goku",
        choice2: "Gohan",
        choice3: "Vegeta",
        choice4: "Trunks",
        answer: "Gohan",
    }
    ,
    {
        number: 3,
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

let choice_1 = document.getElementById("text-1");
let choice_2 = document.getElementById("text-2");
let choice_3 = document.getElementById("text-3");
let choice_4 = document.getElementById("text-4");
let choices = document.getElementsByClassName("answer");
// console.log(choices)

console.log(choice_1);
console.log(choice_2);
console.log(choice_3);
console.log(choice_4);

let submit = document.getElementById("submit")
let current_question = 0;
let score = 0;

question.textContent = (current_question + 1) + "." + quiz[current_question].question;
choice_1.textContent = quiz[current_question].choice1;
choice_2.textContent = quiz[current_question].choice2;
choice_3.textContent = quiz[current_question].choice3;
choice_4.textContent = quiz[current_question].choice4;