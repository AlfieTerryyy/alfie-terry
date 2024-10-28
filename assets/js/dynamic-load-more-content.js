// Function to simulate fetching more content
function fetchMoreContent() {
    // Simulating an API call or fetching data
    return new Promise((resolve) => {
        setTimeout(() => {
            const newContent = document.createElement('div');
            newContent.classList.add('grid-item'); // Assuming you are using grid items
            newContent.innerHTML = `
                <h2>New Content</h2>
                <p>This is more content loaded dynamically.</p>
            `;
            resolve(newContent);
        }, 1000); // Simulating a delay
    });
}