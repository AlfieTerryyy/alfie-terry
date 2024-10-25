// script.js

// Array of questions and answers structured as { index: number, question: string, answer: string }
const questions = [
    { index: 0, question: "What is the most beautiful memory you have from our time together?", answer: "" },
    { index: 1, question: "If you could have any superpower, what would it be and why?", answer: "" },
    { index: 2, question: "What's one song that always makes you think of us?", answer: "" },
    { index: 3, question: "Describe your perfect day from morning to night.", answer: "" },
    { index: 4, question: "What’s your favorite thing about our relationship?", answer: "" },
    { index: 5, question: "If we could travel anywhere together, where would you want to go?", answer: "" },
    { index: 6, question: "What’s a dream you hope to achieve in the next few years?", answer: "" },
    // Add more questions as needed...
];

// Function to load the question of the day based on the week number
function loadQuestion() {
    // Get today's date
    const today = new Date();
    const weekNumber = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24 * 7));
    
    // Calculate the index for the question
    const questionIndex = weekNumber % questions.length; // Use modulus to loop back to the start if needed

    const todayQuestion = questions.find(q => q.index === questionIndex);
    
    if (todayQuestion) {
        document.getElementById("questionBox").innerText = todayQuestion.question;
        loadAnswer(questionIndex); // Load the saved answer if it exists
    } else {
        document.getElementById("questionBox").innerText = "Sorry, no question available for today.";
    }
}

// Function to load an answer from localStorage
function loadAnswer(index) {
    const savedAnswer = localStorage.getItem(`answer_${index}`);
    if (savedAnswer) {
        // Display the saved answer in the answerDisplay div
        document.getElementById("answerDisplay").innerText = "Your answer: " + savedAnswer;
        document.getElementById("answerInput").value = savedAnswer; // Pre-fill the input field
        document.getElementById("statusMessage").innerText = "Your answer is saved!";
    } else {
        document.getElementById("answerDisplay").innerText = ""; // Clear the answer display if no answer is saved
        document.getElementById("statusMessage").innerText = ""; // Clear the message if no answer is saved
    }
}

// Save answer to localStorage when "Save Answer" button is clicked
document.getElementById("saveAnswerButton").addEventListener("click", () => {
    const answer = document.getElementById("answerInput").value;
    const today = new Date();
    const weekNumber = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24 * 7));
    
    const questionIndex = weekNumber % questions.length; // Calculate the index again for saving the answer
    
    if (answer) {
        localStorage.setItem(`answer_${questionIndex}`, answer);
        document.getElementById("answerDisplay").innerText = "Your answer: " + answer; // Display the saved answer immediately
        document.getElementById("statusMessage").innerText = "Answer saved!";
    } else {
        document.getElementById("statusMessage").innerText = "Please enter an answer before saving.";
    }
});

// Load the question and answer when the page is loaded
window.onload = loadQuestion;
