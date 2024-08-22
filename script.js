var benderScore = 0; // Store the airbender score
var nonbenderScore = 0; // Store the firebender score

var questionCount = 0; // Store the number of answers clicked on

// // Store HTML elements using the DOM

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");





var button = document.getElementById("restart");

q1a1.addEventListener("click", bender);
q1a2.addEventListener("click", nonbender);

q2a1.addEventListener("click", bender);
q2a2.addEventListener("click", nonbender);

q3a1.addEventListener("click", bender);
q3a2.addEventListener("click", nonbender);

button.addEventListener("click", updateAnswer);




//Track bender score and check if quiz is complete
function bender() {
    benderScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " benderScore = " + benderScore);

    if(questionCount == 3) {
        console.log("You have finished the quiz!")
        updateResult();
    }
}



//Track nonbender score and check if quiz is complete
function nonbender() {
    nonbenderScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " nonbenderScore = " + nonbenderScore);

    if(questionCount == 3) {
        console.log("You have finished the quiz!")
        updateResult();
    }
}

//Update quiz score
if (benderScore >= 2) {
    console.log("You are a bender! You can bend one of the elements (water, earth, fire, or air) and you’re pretty good at it. Some awesome benders include Katara, Aang, Toph, Zuko, Azula, Korra, and Iroh. Congrats!");
} else if(nonbenderScore >= 2) {
    console.log("You are a nonbender! Swords, fans, knives, tecnology, and acrobatics are your friends. You’re a skilled and hard worker. Some talented nonbenders include Sokka, Ty Lee, Mai, Asami, and Varrick! Congrats!")
}


function updateResult() {
    if (benderScore >= 2) {
        result.innerHTML = "You are a bender! You can bend one of the elements (water, earth, fire, or air) and you’re pretty good at it. Some awesome benders include Katara, Aang, Toph, Zuko, Azula, Korra, and Iroh. Congrats!"
        console.log("You are a bender! You can bend one of the elements (water, earth, fire, or air) and you’re pretty good at it. Some awesome benders include Katara, Aang, Toph, Zuko, Azula, Korra, and Iroh. Congrats!");
    } else if(nonbenderScore >= 2) {
        result.innerHTML = "You are a nonbender! Swords, fans, knives, tecnology, and acrobatics are your friends. You’re a skilled and hard worker. Some talented nonbenders include Sokka, Ty Lee, Mai, Asami, and Varrick! Congrats!";
        console.log("You are a nonbender! Swords, fans, knives, tecnology, and acrobatics are your friends. You’re a skilled and hard worker. Some talented nonbenders include Sokka, Ty Lee, Mai, Asami, and Varrick! Congrats!")
    }
}


//Restart quiz
function updateAnswer() {
    result.innerHTML = "Your result is..";
    questionCount = 0;
    benderScore = 0;
    nonbenderScore = 0;
    console.log("questionCount = " + questionCount + "\t" + "benderScore = " + benderScore + "\t" + "nonbenderScore = " + nonbenderScore);
}

