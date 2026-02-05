
// hoisting
console.log(getRandomInt(4, 8));

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// ";" efter statement
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// "=>" Arrow function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// JavaScript: functions as first-class citizens
                            // string, function reference
function genericActionPerformer(name, action) {
    return action(name);
}

// task: eat, Valdemar
// create a callback function below called eatinAction
// and use the genericActionPerformer to
// console.log Valdemar is eating

function eatinAction (name) {
    return `${name} is eating`;
}

console.log(genericActionPerformer('Valdemar', eatinAction));
console.log(genericActionPerformer('Kristian', eatinAction));

// task, run, Sidi
// declare an anonymous function called runningAction
// make it return `Sidi is running`
// console.log it

const runningAction = function (name) {
    return `${name} is running`;
}

console.log(genericActionPerformer('Sidi', runningAction));

// task: extra challenge
// In a single line below wrtie
// Kristian is laughing

console.log(genericActionPerformer('Kristian', (name) => `${name} is laughing`));