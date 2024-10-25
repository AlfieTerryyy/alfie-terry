// script.js

// Function to check answers and transition to the next stage
function checkAnswer(stage, correctAnswer) {
    const userAnswer = document.getElementById(`answer${stage}`).value.toLowerCase().trim();
    
    if (userAnswer === correctAnswer) {
        alert("Correct!");

        // Hide the current stage with a fade-out effect
        document.getElementById(`stage${stage}`).classList.add('hidden');
        
        // Show the next stage or final message with a fade-in effect
        setTimeout(() => {
            if (stage < 3) {
                document.getElementById(`stage${stage + 1}`).classList.remove('hidden');
            } else {
                document.getElementById('finalMessage').classList.remove('hidden');
            }
        }, 500);
    } else {
        alert("Oops, try again!");
    }
}

// Function to toggle hint visibility
function showHint(stage) {
    const hint = document.getElementById(`hint${stage}`);
    if (hint.classList.contains('hidden')) {
        hint.classList.remove('hidden');
    } else {
        hint.classList.add('hidden');
    }
}
