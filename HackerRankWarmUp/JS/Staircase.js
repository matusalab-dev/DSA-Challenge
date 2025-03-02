// Import readline-sync
const readline = require('readline-sync');

// Read user input
const n = parseInt(readline.question('Enter the height of the staircase: '));

// Define the staircase function
function staircase(n) {
    // Loop through each level of the staircase
    for(let i = 1; i <= n; i++){
        // Create a string with 'n - i' spaces and 'i' hashes
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}

// Call the staircase function with the input value
staircase(n);
