document.addEventListener("DOMContentLoaded", function () {
    const quizQuestions = [
        {
            question: "How much gravitational potential energy is gained by a 5kg cat being lifted 2m into the air?",
            options: ["49J", "98J", "196J", "245J"],
            answer: "98J"
        },
        {
            question: "Mike and Jenny lift a 20kg box from the floor onto a shelf 3m above the floor. How much gravitational potential energy has the box gained?",
            options: ["147J", "294J", "588J", "735J"],
            answer: "588J"
        },
        {
            question: "Olivia put her bag on the desk at school. The desk was 1.5m high and her bag had a mass of 3kg. How much gravitational potential energy did the bag have when it was on the table?",
            options: ["44.1J", "66.2J", "33.3J", "77.5J"],
            answer: "44.1J"
        },
        {
            question: "Maria kicked a football down the pitch. At its highest point it was 8m above the ground. The ball had a mass of 0.4kg. What was the maximum gravitational potential energy that the ball had when it was in the air?",
            options: ["15.6J", "25.2J", "31.36J", "39.2J"],
            answer: "31.36J"
        },
        {
            question: "A cat jumped on to a 2m high shelf. The cat had a mass of 6kg. What was it's gravitational potential energy when it was asleep on the shelf?",
            options: ["78.4J", "88.6J", "117.6J", "102.5J"],
            answer: "117.6J"
        },
        {
            question: "An object when lifted gained 980J of gravitational potential energy. The object had a mass of 20kg. How far had it been lifted?",
            options: ["4m", "5m", "6m", "7m"],
            answer: "5m"
        },
        {
            question: "An object when lifted gained 29.4J of gravitational potential energy. The object had a mass of 2kg. How far had it been lifted?",
            options: ["1m", "1.5m", "2m", "2.5m"],
            answer: "1.5m"
        },
        {
            question: "An object had 41.16J of energy when placed on a plinth. The object weighed 3kg. What was the height of the plinth?",
            options: ["1.2m", "1.3m", "1.4m", "1.5m"],
            answer: "1.4m"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');

    function generateQuiz() {
        quizQuestions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question';

            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `${index + 1}. ${q.question}`;
            questionElement.appendChild(questionTitle);

            q.options.forEach(option => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question${index}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                questionElement.appendChild(label);
                questionElement.appendChild(document.createElement('br'));
            });

            quizContainer.appendChild(questionElement);
        });
    }

    function calculateResults() {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });
        resultContainer.textContent = `Your score: ${score} out of ${quizQuestions.length}`;
    }

    document[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Hami-Lemon/note/tree/8e7ae5b41e53c2cf9d2c6418e30c87123b8037b4/Java%2Fweb%E5%BC%80%E5%8F%91%2F%E5%89%8D%E7%AB%AF.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")