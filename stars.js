// stars.js

// Function to check if it's 5 AM
function isFiveAM() {
    const now = new Date();
    const hours = now.getHours();
    return hours === 5 && now.getMinutes() === 0; // 5 AM with 0 minutes
}

// Function to reload the page
function reloadPageAtFiveAM() {
    if (isFiveAM()) {
        location.reload();
    }
}

// Call the function initially
reloadPageAtFiveAM();

// Set interval to check every minute and reload if it's 5 AM
setInterval(reloadPageAtFiveAM, 60000); // Check every minute (adjust as needed)
