const fs = require('fs');

const htmlWorking = fs.readFileSync('scratch/check_output_working.html', 'utf8');
const htmlFailed = fs.readFileSync('scratch/check_output.html', 'utf8');

const workingIndex = htmlWorking.indexOf('copy-layout-link');
if (workingIndex !== -1) {
    console.log('=== WORKING HTML CONTEXT ===');
    console.log(htmlWorking.substring(workingIndex - 300, workingIndex + 400));
} else {
    console.log('Could not find copy button in working HTML.');
}

// Let's search for the main action container in the failed HTML.
// Typically they have a card/action block containing the buttons. Let's find "favorite-overlay-btn" in both.
const failedFavIndex = htmlFailed.indexOf('favorite-overlay-btn');
if (failedFavIndex !== -1) {
    console.log('\n=== FAILED HTML CONTEXT ===');
    console.log(htmlFailed.substring(failedFavIndex - 300, failedFavIndex + 1200));
} else {
    console.log('Could not find favorite-overlay-btn in failed HTML.');
}
