// .map .forEach .filter .reduce .sort .find .indexOf

// rule 1: use loop methods whenever possible
// rule 2: only use for loops in JavaScript for finger counting (not when iterating, but when counting)
// rule 3: use map over forEach if you need the data afterwards

const numbers = [1, 2, 3, 4, 5];

// task: double the numbers

// .map maps 1:1 to a new array

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);

const balloonAnimals = [
    { type: "Koala", diffuculty: 5.0 },
    { type: "Dog", diffuculty: 2.5 },
    { type: "Giraffe", diffuculty: 1.5, isTall: true },
]; 

// Make all the diffuculty levels for the ballon animals 3.0 except for the Koala

const diffucultyAdjustedBallonAnimals = balloonAnimals.map((ballonAnimal) => {
    if (ballonAnimal.type !== "Koala") {
        ballonAnimal.diffuculty = 3.0;
    }
        return ballonAnimal;
});

console.log(diffucultyAdjustedBallonAnimals);

// one-liner:
const diffucultyAdjustedBallonAnimalsOneLiner = balloonAnimals.map((balloonAnimals) => ({
     diffuculty: balloonAnimals.type !== "Koala" ? 3.0 : balloonAnimals.diffuculty,
     ... balloonAnimals
}));

console.log(diffucultyAdjustedBallonAnimalsOneLiner);

numbers.map((element, index, originalArray) => console.log(element, index, originalArray));