// script.js

// Function to load the question of the day
function loadQuestion() {
    // Get today's date in DD-MM-YY format
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = String(today.getFullYear()).slice(-2);
    const fileName = `q/${day}-${month}-${year}.txt`;

    // Fetch the question file
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error("Question not found for today.");
            }
            return response.text();
        })
        .then(questionText => {
            // Display the question in the questionBox
            document.getElementById("questionBox").innerText = questionText;
        })
        .catch(error => {
            document.getElementById("questionBox").innerText = "Sorry, no question available for today.";
            console.error("Error loading question:", error);
        });
}

// Load the question when the page is loaded
window.onload = loadQuestion;
