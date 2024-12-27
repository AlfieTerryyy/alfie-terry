document.addEventListener('DOMContentLoaded', () => {
    // Enable scrolling
    document.body.style.overflow = 'auto';
    console.log('Scrolling enabled');
    
    // Update scroll progress bar
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        if (!scrollProgress) return;
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // Update footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Function to handle infinite scrolling
function handleScroll() {
    const scrollThreshold = 100; // Threshold from the bottom to trigger loading more content
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollThreshold;
    if (nearBottom) {
        loadMoreContent();
    }
}

// Load more content and append it to the container
async function loadMoreContent() {
    // You can show a loading spinner here if you want
    const container = document.querySelector('.grid-container'); // Adjust to your container class
    const newContent = await fetchMoreContent(); // Define this function based on how you fetch new content
    container.appendChild(newContent);
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const scrollbarThumb = document.querySelector("::-webkit-scrollbar-thumb");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        // Dynamically change scrollbar thumb's glow color
        const hue = Math.round((scrollPercent / 100) * 240); // Range: 0-240 (blue to red)
        const dynamicColor = `hsl(${hue}, 90%, 50%)`;

        root.style.setProperty("--primary-light", dynamicColor);
    });
});















// Error page  ------------------------------------------------------------------------------------------------------------------------------------------->

// Define the roasts for each error type
const roasts = {
    '404': [
        "404 Error: Congrats, you’ve reached the digital abyss. Did you think this page existed?",
        "404 Error: Well, well, well... Look who went looking for a page that doesn’t exist. Try again!",
        "404 Error: Oops! This page is as lost as your sense of direction."
        "404 Error: This page is like your last Tinder date—didn’t show up. Let’s swipe back to safety!."
    ],
    '500': [
        "500 Error: Whoa, you broke it. The server’s currently in therapy, processing the trauma you’ve caused.",
        "500 Error: Congratulations, you’ve crashed the server. We’re pretty sure it’s filing for unemployment now.",
        "500 Error: The server is on strike after what you’ve done. Please negotiate with its therapist.",
        "500 Error: This server just gave up, and honestly, we can’t blame it. You broke it, deal with it!"
    ],
    '403': [
        "403 Error: Forbidden. Yeah, you’re not getting in. Not with those credentials, buddy.",
        "403 Error: Nice try, but you’re not VIP enough to enter. Maybe try again when you’ve levelled up.",
        "403 Error: Access denied. What did you think, that the internet would just hand you everything?",
        "403 Error: Your credentials are as useful as a paper umbrella in a storm. Try again later."
    ],
     '400': [
        "400 Error: Bad Request. It’s like you asked for a pizza and got a broken Wi-Fi signal instead.",
        "400 Error: The request was so bad, even your browser is judging you.",
        "400 Error: This is a mess. You couldn’t even make a proper request, and now we’re all suffering.",
        "400 Error: Your request is like trying to put a square peg in a round hole. Nice try, though."
    ],
    '401': [
        "401 Error: Unauthorized. Did you really think you’d get in with those credentials? Cute.",
        "401 Error: You don’t have permission. Try harder, or maybe just try harder in life.",
        "401 Error: Unauthorized. Guess what? You don’t belong here. Go home.",
        "401 Error: Nice try. Your credentials are about as useful as a password written on a sticky note."
    ]
};

// Function to randomly select a roast
function getRandomRoast(errorCode) {
    const roastsForError = roasts[errorCode];
    if (!roastsForError) {
        return "Error: I’ve got no insults for this one. Sorry!";
    }
    const randomIndex = Math.floor(Math.random() * roastsForError.length);
    return roastsForError[randomIndex];
}

// Function to replace the <roast-user-XXXX> tags with a random roast
function roastUser() {
    const elements = document.querySelectorAll('roast-user');
    elements.forEach(element => {
        const errorCode = element.tagName.split('-')[2]; // Extracts the error code from tag, e.g., "500" from <roast-user-500>
        const roastMessage = getRandomRoast(errorCode);
        element.innerText = roastMessage;
    });
}

// Run the roast function when the page loads
document.addEventListener("DOMContentLoaded", roastUser);


// end roasts --------------------------------------------------------------------------------------------------------------------------------------------->






