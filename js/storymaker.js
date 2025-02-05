// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');



// Constants for p tag to display query selectors
const storyDisplay = document.querySelector("#story");
const noun1Display = document.querySelector("#choosenNoun1");
const verbDisplay = document.querySelector("#choosenVerb");
const adjectiveDisplay = document.querySelector("#choosenAdjective");
const noun2Display = document.querySelector("#choosenNoun2");
const settingDisplay = document.querySelector("#choosenSetting");


// Variables for pre-defined arrays
let nouns1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
let verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
let adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];


// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;
let playbackCount = 0;


/* Functions
-------------------------------------------------- */
function noun1_on_click() {

    // variable to get array element and displaying it
    noun1Display.textContent = nouns1[noun1Count];
    // increment count
    noun1Count++;

    // if-else to change count setting
    if (noun1Count === nouns1.length) {

        noun1Count = 0;

    }
}

function verb_on_click() {

    verbDisplay.textContent = verbs[verbCount];
    verbCount++;

    if (verbCount === verbs.length) {

        verbCount = 0;

    }
    
}

function adjective_on_click() {

    adjectiveDisplay.textContent = adjectives[adjectiveCount];
    adjectiveCount++;

    if (adjectiveCount === adjectives.length) {

        adjectiveCount = 0;

    }
    
}

function noun2_on_click() {

    noun2Display.textContent = nouns2[noun2Count];
    noun2Count++;

    if (noun2Count === nouns2.length) {

        noun2Count = 0;

    }
    
}

function setting_on_click() {

    settingDisplay.textContent = settings[settingCount];
    settingCount++;

    if (settingCount === settings.length) {

        settingCount = 0;

    }
    
}

// concatenate the user story and display
function playback_on_click() {
    
    storyDisplay.textContent = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}.`;

}

// grabbing random element from arrays, concatenate and display
function random_on_click() {

    storyDisplay.textContent = `${getRandomWord(nouns1)} ${getRandomWord(verbs)} ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(settings)}.`;
    
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Display student name and ID dynamically
document.getElementById("studentId").textContent = "Student Name: Ebhool Lamichhane | ID: 200593232"; 

