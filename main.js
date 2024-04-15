const questionData = [
    {
        question: "What is the capital of Madagascar?",
        option: ["Mahajanga", "Antananarivo", "Nosy-Be"],
        answer: "Antananarivo"
    },
    {
        question: "Which one is the opposite of happy?",
        option: ["Sad", "Confused", "Shocked"],
        answer: "Sad"
    },
    {
        question: "In binary, 1 + 1 = ?",
        option: ["2", "1", "10"],
        answer: "10"
    },
    {
        question: "Which planet is known as the Red planet?",
        option: ["Venus", "Jupyter", "Mars"],
        answer: "Mars"
    },
    {
        question: "When did the Revolutionary War begin?",
        option: ["1775", "1783", "1779"],
        answer: "1775"
    },
    {
        question: "What geometric shape is generally used for stop signs?",
        option: ["Octagon", "Polygon", "Square"],
        answer: "Octagon"
    },
    {
        question: "What is the name of the biggest technology company in South Korea?",
        option: ["Huawei", "Apple", "Samsung"],
        answer: "Samsung"
    },
    {
        question: "What was the first soft drink in space?",
        option: ["Coca Cola", "Fanta", "Sprite"],
        answer: "Coca Cola"
    },
    {
        question: "Which country invented ice cream?",
        option: ["France", "China", "Italy"],
        answer: "China"
    },
    {
        question: "'Stars and Stripes' is the nickname of the flag of which country?",
        option: ["USA", "Afghanistan", "Lybie"],
        answer: "USA"
    },
    {
        question: "How many colors are there in the rainbow?",
        option: ["9", "5", "7"],
        answer: "7"
    },
    {
        question: "What's the city with the most diversity in terms of language?",
        option: ["Roma", "New York City", "Paris"],
        answer: "New York City"
    }
]
let data = Array(5);
let i = 0, score = 0;

function createRandomQuestion(data) {
    let j = 0;
    while (j < data.length) {
        let val = Math.floor(Math.random() * 12);
        if (!(data.slice(0, j)).includes(val)) {
            data[j] = val;
            j++;
        }
        console.log(data);
    }
    return data.map(i => questionData[i]);
}

const displayQuestion = () => {
    document.querySelector(".question-title").textContent = "Question "+ (i + 1) + "/5";
    document.querySelector(".card-title").textContent = data[i].question;
    document.querySelectorAll(".form-check-label").forEach((item, index) => item.textContent = data[i].option[index]);
}

const checkAnswer = () => {
    const prop = document.querySelector('input[name="radioOptions"]:checked');
    if (prop.nextElementSibling.textContent == data[i].answer)
        score += 20;
}

const nextQuestion = () => {
    checkAnswer();
    if(i < data.length - 1) {
        i++;
        displayQuestion();
        document.querySelector('input[name="radioOptions"]:checked').checked = false;
    }
    else {
        document.querySelector(".list").style.display = "none";
        let divScore = `<div class="score ">
                <div class="card text-center mx-auto col-lg-4 col-md-6 col-12 shadow">
                    <div class="card-header">
                        <h3 class="fw-bold">Score</h3>
                    </div>
                    <div class="card-body pb-5">
                        <h1 class="card-title final-score text-success mb-3">${score} %</h1>
                        <h2 class="appreciation">Congratulations!</h2>
                    </div>
                </div>
            </div>`;
        document.querySelector(".container").innerHTML += divScore;
    }
}


document.querySelector(".btn-start").addEventListener("click", () => { 
    data = createRandomQuestion(data);

    console.log(data);

    document.querySelector(".menu").style.display = "none";
    document.querySelector(".list").style.display = "block";
    displayQuestion();
});

document.querySelector(".btn-next").addEventListener("click", () => nextQuestion())

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter")
        nextQuestion();
})
