//murder mystery

// Initial data
let room = "ballroom";
let weapon = "";
let solved = false;
let suspect = "";

// Set weapon based on room
if (room === "ballroom") {
    weapon = "poison";
} else if (room === "library") {
    weapon = "book";
} else if (room === "billiards room") {
    weapon = "pool stick";
} else if (room === "dining room") {
    weapon = "knife";
}

// Check if the room matches the suspect's room
if (room === "ballroom" && suspect === "Ms. Mora") {
    solved = true;
} else if (room === "library" && suspect === "Mrs. Ali") {
    solved = true;
} else if (room === "billiards room" && suspect === "Mr. Chen") {
    solved = true;
} else if (room === "dining room" && suspect === "Dr. Johnson") {
    solved = true;
}

// Print the solution if the mystery was solved
if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else {
    console.log("The mystery was not solved.");
}


//Checking your balance

//declare necessary variables
let balance = 5.5693;
let isActive = true;
let checkBalance = true;

//Check if checkBalance is true
if (checkBalance) {
    //check if the account is active and has money in it
    if (isActive && balance > 0) {
        console.log(`Your balance is $${balance.toFixed(2)}.`);
    }
    //check if account is inactive
    else if (!isActive) {
        console.log('Your account is no longer active.');
    }
    //check if the balance is 0
    else if (balance === 0) {
        console.log("Your acount is empty");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
} else (
    console.log('Thank you. Have a nice day!')
);


// Clothing size

let shirtWidth = 19;
let shirtLength = 28.30;
let shirtSleeve = 8.21;
let shirtSize;

if (shirtWidth === 22 && shirtLength === 30 && shirtSleeve === 8.63){
    shirtSize = "L";
} else if (shirtWidth>= 20 && shirtLength >= 29 && shirtSleeve>= 8.38) {
    shirtSize = "M";
} else if (shirtWidth>= 18 && shirtLength >= 28 && shirtSleeve>= 8.13) {
    shirtSize = "S" ;
} else {
    shirtSize = "N/A"
}

console.log (shirtSize)
