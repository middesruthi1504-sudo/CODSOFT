const quiz = [
{
    question:"What does HTML stand for?",
    options:[
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "None"
    ],
    answer:0
},
{
    question:"Which language is used for styling?",
    options:[
        "HTML",
        "CSS",
        "Java",
        "Python"
    ],
    answer:1
},
{
    question:"Which language is used for interactivity?",
    options:[
        "CSS",
        "HTML",
        "JavaScript",
        "SQL"
    ],
    answer:2
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

    const q = quiz[currentQuestion];

    document.getElementById("question").innerText =
        q.question;

    const optionsDiv =
        document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach((option,index)=>{

        optionsDiv.innerHTML += `
        <label class="option">
            <input type="radio"
            name="option"
            value="${index}">
            ${option}
        </label>`;
    });
}

function nextQuestion(){

    const selected =
    document.querySelector(
        'input[name="option"]:checked'
    );

    if(!selected){
        alert("Select an answer");
        return;
    }

    if(parseInt(selected.value) ===
       quiz[currentQuestion].answer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quiz.length){
        loadQuestion();
    }else{
        document.getElementById(
        "quiz-container").classList.add("hidden");

        document.getElementById(
        "result").classList.remove("hidden");

        document.getElementById(
        "score").innerText =
        score + "/" + quiz.length;
    }
}

loadQuestion();