// script.js

function checkAnswer(stage, correctAnswer) {
    const userAnswer = document.getElementById(`answer${stage}`).value.toLowerCase().trim();
    
    if (userAnswer === correctAnswer) {
        alert("Correct!");
        
        // Hide the current stage
        document.getElementById(`stage${stage}`).classList.add('hidden');
        
        // Show the next stage or final message
        if (stage < 3) {
            document.getElementById(`stage${stage + 1}`).classList.remove('hidden');
        } else {
            document.getElementById('finalMessage').classList.remove('hidden');
        }
    } else {
        alert("Oops, try again!");
    }
}
