// Import checkForName function if needed for additional checks
import { checkForName } from './nameChecker';

// If working on Udacity workspace, update this with the Server API URL
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api';

// Get the form element
const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid using a regular expression
    if (!isValidURL(formText)) {
        alert('Please enter a valid URL');
        return;
    }

    // If the URL is valid, send it to the server
    sendDataToServer(formText);
}

// Function to validate the URL using a simple regular expression
function isValidURL(url) {
    const regex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    return regex.test(url);
}

// Function to send data to the server
async function sendDataToServer(url) {
    try {
        const response = await fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Server response:', result);
        
        // Optionally: handle the response data, update the UI with the response
    } catch (error) {
        console.error('There was an error with the fetch operation:', error);
    }
}

// Export the handleSubmit function so it can be used in other parts of the project
export { handleSubmit };
