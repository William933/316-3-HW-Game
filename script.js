const question = window.prompt("What window method am I using?");
const correctAnswer= "window.prompt"
let userAnswer = window.alert(`Your answer: ${question}`);
if (userAnswer = correctAnswer){
    window.alert ("Correct!!!");
}
else { 
    window.alert ("Incorrect. Please try again")
}