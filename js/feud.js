var questionStorage = [];
var answers;
var x1 = false, x2 = false, x3 = false;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userSubmit").addEventListener("click", playerSubmit);
    getGameData();
});

function getGameData() {
    var questionList = new QuestionList();
    questionList.setQuestions();
    questionStorage = questionList.getQuestions();
    askQuestion();
}

function askQuestion() {
    if (questionStorage.length > 0) {
        var questionElement = document.getElementById("question");
        let rndQ = Math.floor(Math.random() * 100); 
        var question = questionStorage[rndQ];
        var questionText = question.text;
        answers = question.answers;
        questionElement.textContent = questionText; // Use textContent for security
        resetX();
        resetAnswers();
    } else {
        document.getElementById("question").textContent = "You Won!";
    }
}

function playerSubmit() {
    var playerAnswer = document.getElementById("userAnswer").value;
    var answered = 0;
    var correct = false;
    for (let i = 0; i < 8; i++) {
        if (document.getElementById("ans" + (i + 1)).textContent.length > 2) {
            answered++;
        }
    }
    if (answered === 7) {
        askQuestion();
    }
    for (let i = 0; i < answers.length; i++) {
        if (playerAnswer === answers[i]) {
            document.getElementById("ans" + (i + 1)).textContent = answers[i];
            correct = true;
            break; // Exit loop after finding the answer
        }
    }
    if (!correct) {
        if (!x1) {
            x1 = true;
            document.getElementById("x1").style.color = "red";
        } else if(!x2) {
            x2 = true;
            document.getElementById("x2").style.color = "red";
        } else if (!x3) {
            x3 = true
            document.getElementById("x3").style.color = "red";
        }
        else{
            askQuestion();
        }
    }
}

function resetX(){
    x1 = false;
    x2 = false;
    x3 = false;

    document.getElementById("x1").style.color = "black";
    document.getElementById("x2").style.color = "black";
    document.getElementById("x3").style.color = "black";
}

function resetAnswers(){
    document.getElementById("ans1").innerHTML = "1";
    document.getElementById("ans2").innerHTML = "2";
    document.getElementById("ans3").innerHTML = "3";
    document.getElementById("ans4").innerHTML = "4";
    document.getElementById("ans5").innerHTML = "5";
    document.getElementById("ans6").innerHTML = "6";
    document.getElementById("ans7").innerHTML = "7";
    document.getElementById("ans8").innerHTML = "8";
}