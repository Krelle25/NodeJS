// import express
const express = require('express');

// instantiate express
const app = express();

app.use(express.json()); // built-in middleware to parse JSON bodies

// one-liner version:
// const app = require('express')();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html');
});

// create a new route called snowstorms, it should respond with a warning
app.get('/snowstorms', (req, res) => {
    res.send({ data: "Snowstorm is coming!" });
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

app.get('/proxy', (req, res) => {
    /* assignment
       Create a proxy to https://www.google.com/
       You have all the knowledge you need to solve this task already
       */

       fetch("https://www.google.com/")
       .then((response) => response.text())
       .then((buffer) => {
         const decoder = new TextDecoder("ISO-8859-1");
        const text = decoder.decode(buffer);
        res.send(text);
    });

});

app.post('/dinasours', (req, res) => {
    console.log(req.body);

    res.send(req.body);
});

/*
    Status codes:
2xx: Success
3xx: Redirection
4xx: Client error
5xx: Server error
*/

// task: create a POST route with the endpoint /energydrinks that adds energy drinks to an array
const energyDrinks = [];
app.post('/energydrinks', (req, res) => {
    energyDrinks.push(req.body);
    console.log(energyDrinks);
    res.send(req.body);
});

// standart port for Tomcat
app.listen(8080);