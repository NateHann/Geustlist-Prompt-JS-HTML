// Create a list to keep track of your guests
let guestList = [];

// Ask for names up to 10 guests or until the user decides to stop
for (let i = 0; i < 11; i++) {
    // Get a guest's name or finish by clicking Cancel
    let name = prompt("Enter a name for your guest list (or click Cancel to finish):");

    // Check if Cancel is clicked or an empty name is entered
    if (name === null || name === "") {
        break; // Stop if the user is done entering names
    } else if (guestList.length === 10) {
        // If more than 10 guests are entered, show a message
        alert('Oops! You have entered more than ten guests.');

        // Ask the user if they want to remove someone before entering the eleventh name
        let replaceDecision = prompt("Now, if you want to add an 11th name to the array, would you like to replace someone? (y/n):");

        if (replaceDecision.toLowerCase() === 'y') {
            // Ask which guest's name to replace
            let replaceName = prompt('Enter the name to replace in the guest list:');

            // Find where that guest is in the list
            let indexOfPersonToReplace = guestList.indexOf(replaceName);

            // Check if the name is found in the list; if so, replace it
            if (indexOfPersonToReplace !== -1) {
                // Remove replaceName and insert the new name at that index
                guestList.splice(indexOfPersonToReplace, 1, name);

                // Display the updated guest list
                console.log("Updated Guest List:", guestList);
                alert("Here is your updated guest list: " + guestList.join(', '));

                // Stop the loop as the replacement is done
                break;
            } else {
                // Show a message if the specified guest is not found
                alert('Oops! That person is not in the guest list. No replacement made.');
            }
        }
    }

    // Add the entered name to the guest list
    guestList.push(name);
}

// Display the final guest list
console.log("Final Guest List:", guestList);
alert("Here is your final guest list: " + guestList.join(', '));
