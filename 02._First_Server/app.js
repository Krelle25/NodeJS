// import express
const express = require('express');

// instantiate express
const app = express();

// one-liner version:
// const app = require('express')();

app.get('/', (req, res) => {
    res.send({ data: "Welcome to the first server!" })
});

// create a new route called snowstorms, it should respond with a warning
app.get('/snowstorms', (req, res) => {
    res.send({ data: "Snowstorm is coming!" })
});

// QUESTION: how can we send data in a GET request?

// path variable
// a callback function is a function that is passed as an argument to a another function
app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params);
    res.send({ data:`
        Your ${req.params.carModel} is very nice.
        Is it from the year ${req.params.year}?
    `});
});

// query string / query parameters
// 
app.get('/bag', (req, res) => {
    res.send({ data: req.query });
});


// standart port for Tomcat
app.listen(8080);