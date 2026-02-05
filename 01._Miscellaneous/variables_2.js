// "use strict";

// missing declaration type
// NEVER EVER do this
totalGlobalVariable = "";

// Don´t ever do this
var globalVariable = "This is defined in the global scope";

// const public = "this variable is named public";

{ // block scope
    var someVariable = true;
    {
        var someVariable = false;
    }
    // console.log(someVariable);
}

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable);
}

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// brug altid "let" frem for "var", da "var" bløder igennem functionen.
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}