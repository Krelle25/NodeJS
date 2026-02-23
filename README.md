# Full Stack Node.js – Documentation

This repository contains my personal documentation for the **Full Stack Node.js** course.
The purpose of this documentation is to continuously document what I learn, what I implement, and the reasoning behind design and coding decisions.

This documentation is written as part of **Mandatory I** and is updated throughout the course.

---

## Day 1 – JavaScript Fundamentals & REST API Design

**Date:** January 29th

---

## JavaScript Fundamentals

### Variables: `const` vs `let`

A key rule introduced on day one:

* Use `const` by default
* Use `let` only when reassignment is required

Example:

```js
const luckyNumber = 4;
console.log(luckyNumber);
```

Using `const` prevents reassignment of the variable itself. However, when working with objects and arrays, their contents can still be changed.

---

## Objects

Objects store data as **key–value pairs**.

Example:

```js
const person = {
    name: "Kristian"
};

person.name = "Knud";
person.age = 100;
```

This demonstrates that:

* Object properties can be changed
* New properties can be added
* Declaring an object with `const` does **not** make it immutable

---

## Arrays

Arrays are also mutable, even when declared with `const`.

Example:

```js
const people = [];
people.push("Krelle");
```

Although the array itself cannot be reassigned, its contents can still be modified.

---

## JavaScript Data Types

The following data types were introduced and discussed:

* String
* Number
* Boolean
* BigInt
* Object
* Symbol
* null
* undefined

### JSON vs JavaScript Objects

The difference between JSON and JavaScript objects was explained:

* JSON **requires quotation marks** around keys
* JavaScript objects do **not** require quotation marks around keys

---

## Type Coercion & Equality

JavaScript automatically converts values between types when performing comparisons. This behavior is known as **type coercion** and can lead to bugs if not handled carefully.

To avoid unexpected behavior:

* Prefer **strict equality (`===`)**
* Be explicit when converting types (e.g. `parseInt`, `parseFloat`)

---

## Strings in JavaScript

There are three common ways to define strings in JavaScript:

```js
"double quotes"
'single quotes'
`template literals`
```

Template literals allow **string interpolation**, which makes it easier to embed variables inside strings:

```js
`My name is ${name}`
```

---

## Automatic Semicolon Insertion (ASI)

JavaScript automatically inserts semicolons in many cases.
This feature is called **Automatic Semicolon Insertion (ASI)**.

Relying on ASI is discouraged, as it can sometimes cause unexpected behavior. Writing clear and consistent code is preferred.

---

## Introduction Exercises

After the lecture, a set of JavaScript exercises were completed. These exercises reinforced core JavaScript concepts needed for backend development.

### 1. Basics

Covered topics:

* Variables and constants
* Console output
* Type conversion using `parseInt` and `parseFloat`

---

### 2. Strings

Covered topics:

* String interpolation
* Replacing characters in strings
* Accessing characters by index

---

### 3. Objects

Covered topics:

* Retrieving values by key
* Creating objects
* Adding properties
* Removing properties

---

### 4. Arrays

Covered topics:

* Finding values and indices
* Adding elements
* Removing elements
* Copying arrays
* Looping with `for`
* Conditional logic inside loops

---

## REST API Design Exercise

### Topic: Beers 🍺

The task was to **design**, not implement, a CRUD-based REST API based on the topic *Beers*.

---

### Design Goals

* Follow REST conventions
* Use the correct HTTP method for each action
* Use clear, pluralized endpoint naming
* Ensure endpoints reflect underlying collections

---

### API Design

| HTTP Method | Endpoint    | Description           |
| ----------- | ----------- | --------------------- |
| GET         | /beers      | Retrieve all beers    |
| GET         | /beers{id}  | Retrieve a beer by id |
| POST        | /beers      | Create a bew beer     |
| PUT         | /beers/{id} | Update an entire beer |
| PATCH       | /beers/{id} | Update part of a beer |
| DELETE      | /beers/{id} | Delete a beer         |

This exercise helped solidify understanding of:

* REST structure
* HTTP verb responsibility
* Predictable and standardized API design

---

## Git & Workflow Notes

* All exercises were submitted via **GitHub Classroom**
* Changes were committed and pushed regularly
* Files that should not be tracked by Git (such as `node_modules` and IDE-specific folders) were avoided or added to `.gitignore`

---

## Reflections (Day 1)

* JavaScript fundamentals are critical for both frontend and backend development
* Clean code matters, even in small exercises
* REST APIs should be **designed before being implemented**
* Documentation should be written continuously, not retroactively

---

## Day 2 - First Server (Express), Functions & NPM

**Date:** February 5th

---

## Overview

Day 2 focused on moving from pure JavaScript into the backend world by creating the **first Node.js server using Express**. In addition, deeper JavaScript concepts such as scoping, functions, callbacks, and strict mode were introduced.

The day also introduced **build tools and package managers**, specifically NPM, and how to manually set up a Node.js project using `package.json`.

---

## Project Structure (Day 2)

New files and folders were added to structure backend-related work:

```text
02._First_Server/
├── app.js
├── package.json
├── package-lock.json
```

Additional JavaScript practice files were added:

```text
variables_2.js
functions.js
```

---

## Clean Code: Strict Mode (and why it matters)

Strict mode helps catch mistakes that JavaScript otherwise allows.

Example (bad practice): creating variables without declaring them:

```js
// "use strict";

// missing declaration type
// NEVER EVER do this
totalGlobalVariable = "";
```

This creates an implicit global variable (easy to miss, hard to debug). With strict mode enabled, this would throw an error.

---

## Scoping in JavaScript: `var` vs `let`

### Why `var` is risky

`var` is function-scoped and can “bleed through” blocks, which can cause surprising behavior.

```js
{ // block scope
    var someVariable = true;
    {
        var someVariable = false;
    }
    // someVariable is now false
}
```

### Prefer `let` (block scope)

`let` is block-scoped, which makes code easier to reason about:

```js
{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable); // true
}
```

### `var` inside loops + async callbacks

When using `var` in a loop with callbacks (like `setTimeout`), the callback sees the final value of `i`:

```js
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Using `let` fixes this because each iteration gets its own block-scoped `i`:

```js
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

**Rule reinforced:** Use `const` if possible, otherwise `let`. Avoid `var`.


## Functions in JavaScript

### Hoisting

Function declarations are hoisted, meaning they can be called before they appear in the file:

```js
console.log(getRandomInt(4, 8));

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
```

### Function syntaxes covered

#### 1) Function declaration

```js
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
```

#### 2) Anonymous function expression

```js
const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};
```

#### 3) Arrow function

```js
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};
```

---

## Callback Functions (Functions as First-Class Citizens)

JavaScript allows functions to be passed around like values. We practiced this via a “generic action performer” that takes a name and an action (callback):

```js
function genericActionPerformer(name, action) {
    return action(name);
}
```

### Example: named callback

```js
function eatinAction (name) {
    return `${name} is eating`;
}

console.log(genericActionPerformer('Valdemar', eatinAction));
console.log(genericActionPerformer('Kristian', eatinAction));
```

### Example: anonymous function callback

```js
const runningAction = function (name) {
    return `${name} is running`;
}

console.log(genericActionPerformer('Sidi', runningAction));
```

### Example: inline arrow callback (one-liner)

```js
console.log(genericActionPerformer('Kristian', (name) => `${name} is laughing`));
```

---

## Build Tools & Package Managers: NPM + `package.json`

We created an Express project and installed dependencies with NPM.

### What `package.json` is for

* Describes the project
* Tracks dependencies and their versions
* Allows others to install what the project needs using `npm install`

### Why `node_modules` should not be pushed

* It’s generated content
* It can be recreated from `package.json` + `package-lock.json`
* It’s huge and will bloat Git history

---

## Creating the First Express Server

### Express setup

An Express server was created from scratch in `app.js`.

Key steps:

1. Import Express
2. Instantiate the app
3. Define routes
4. Start the server on a port

```js
const express = require('express');
const app = express();
```

### Routes created

#### GET /

Returns a welcome message:

```js
app.get('/', (req, res) => {
    res.send({ data: "Welcome to the first server!" })
});
```

#### GET /snowstorms

Returns a warning message:

```js
app.get('/snowstorms', (req, res) => {
    res.send({ data: "Snowstorm is coming!" })
});
```

---

## Sending Data with GET Requests

We covered two common ways to send data in GET requests:

### 1) Path variables (route params)

Example route:

```js
app.get('/cars/:carModel/:year', (req, res) => {
    console.log(req.params);
    res.send({ data:`
        Your ${req.params.carModel} is very nice.
        Is it from the year ${req.params.year}?
    `});
});
```

* `:carModel` and `:year` are dynamic values
* These values are available in `req.params`

### 2) Query string parameters

Example route:

```js
app.get('/bag', (req, res) => {
    res.send({ data: req.query });
});
```

* Data is sent after `?` in the URL
* Example: `/bag?item=apple&amount=2`
* These values are available in `req.query`

---

## Running the Server

The server listens on port **8080**:

```js
app.listen(8080);
```

To run it locally:

```bash
node app.js
```

---

## Movies API – Part I (GET Only)

As part of the ongoing REST API exercises, a simple Movies API was implemented using Express. The focus of this task was to design and implement the R (Read) part of CRUD, while strictly following REST conventions.

The implementation intentionally avoids databases, validation, and fixed schemas, and instead stores data in memory using JavaScript variables.

---

### Implemented Endpoints

#### GET /

Returns a welcome message to verify that the server is running:

```js
app.get('/', (req, res) => {
    res.send({ data: "Welcome to the Movie Server! :)" });
});
```

---

#### GET /movies

Returns all movies in the collection:

```js
app.get('/movies', (req, res) => {
    res.send({ data: movies });
});
```

This endpoint returns the full in-memory collection without filtering or validation.

---

#### GET /movies/:id

Returns a single movie based on its unique identifier:

```js
app.get('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find(m => m.id === id);
    res.send({ data: movie });
});
```

* The `id` is passed as a **path parameter**
* The server controls the identifier
* No assumptions are made about the structure of the movie object

---

## Reflections (Day 2)

* Scoping rules (`var` vs `let`) explain a lot of "weird" JavaScript behavior.
* Callbacks are everywhere in Node/Express, so understanding them early is important.
* `package.json` + dependency management is a core part of working professionally.
* Express routing makes it simple to return data and handle inputs via params and query strings.

---

## Day 3 - Loop Methods, MOVIES CRUD REST API (Continued), URLs & XSS

**Date:** February 12th

---

## Overview
Day 3 focused on writing more functional JavaScript, expanding the REST API, understanding how URLs are structured, serving HTML with Express, and learning about XSS (Cross-Site Scripting).

The main shift was moving from basic loops to functional loop methods, and from simple GET routes to a more CRUD-oriented REST structure.

---

## Loop Methods in JavaScript

Instead of using traditional `for` loops, the focus was on using built-in array methods:

* `.map()`
* `.filter()`
* `.reduce()`
* `.find()`
* `.sort()`
* `.indexOf()`

### Core Rules

1. Use loop methods whenever possible.
2. Only use `for` loops for "finger counting" (not for data transformations).
3. Use `.map()` instead of `.forEach()` if you need the returned data.

### Example: Using `.map()`

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
```

`.map()` creates a new array and maps 1:1 from the original array.

---

## CRUDable REST API – Part II

The Movies API has now been fully completed and supports full CRUD functionality.

The following endpoints are implemented:

* GET /movies → Retrieve all movies
* GET /movies/:id → Retrieve a movie by id
* POST /movies → Create a new movie (returns 201 Created)
* PATCH /movies/:id → Update an existing movie
* DELETE /movies/:id → Delete a movie

### ID Handling (Simulating Relational Databases)

The most important technical challenge in this assignment was handling IDs correctly.

IDs are generated server-side by:

* Finding the current maximum ID in the collection
* Incrementing it by 1

Finding the current maximum ID in the collection

Incrementing it by 1

```js
const currentMaxId = movies.length === 0
    ? 0
    : Math.max(...movies.map(movie => movie.id));

const nextId = currentMaxId + 1;
```

This simulates how relational databases such as MySQL implement auto-incrementing primary keys.

Key characteristics:

* IDs are never provided by the client
* IDs are always unique
* Deleted IDs are not reused
* The server controls resource identity

### Edge Case Handling

All edge cases have been tested, including:

* Invalid IDs (non-numeric or negative values)
* Non-existing resources (404 Not Found)
* Invalid request bodies (400 Bad Request)

The API now follows REST conventions and properly uses status codes such as:

* 200 OK
* 201 Created
* 400 Bad Request
* 404 Not Found

---

## Anatomy of a URL

We broke down the structure of a URL into its components:

Example:

```
https://www.google.com/search?hl=en&q=cool%20search
```

### URL Parts

* Protocol → `https://`
* Subdomain → `www`
* Domain → `google`
* Top-level domain → `.com`
* Path → `/search`
* Path variable → `/search/1`
* Query string → `?hl=en&q=cool%20search`

Understanding URL anatomy is important when designing REST APIs.

---

## Serving HTML with Express

Instead of only sending JSON, we served HTML files using Express.

```js
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
```

This demonstrated how backend and frontend connect.

In `index.html`, a `fetch()` call was used to request data from `/snowstorms` and dynamically update the DOM.

This reinforced:

* Client → Server communication
* Fetch API usage
* DOM manipulation

---

## Serving HTML with Express

Instead of only sending JSON, we served HTML files using Express.

```js
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
```

This demonstrated how backend and frontend connect.

In index.html, a fetch() call was used to request data from /snowstorms and dynamically update the DOM.

This reinforced:

* Client → Server communication
* Fetch API usage
* DOM manipulation

---

## Status Codes in Express

Status codes were actively used to indicate the result of HTTP requests.

Example (404 – Not Found):

```js
app.get('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find(movie => movie.id === providedMovieId);


    if (!foundMovie) {
        return res.status(404).send({
            errorMessage: `No movie found by ID: ${req.params.id}`
        });
    }


    res.send(foundMovie);
});
```

Status Code Categories

* 2xx → Success (e.g. 200 OK)
* 3xx → Redirection
* 4xx → Client errors (e.g. 404 Not Found)
* 5xx → Server errors

Using proper status codes makes the API more predictable and aligned with REST principles.

---

## Parsing JSON bodies with Express Middleware

To handle POST requests correctly, built-in Express middleware was enabled:

```js
app.use(express.json());
```

Why this is necessary

* Parses incoming JSON request bodies
* Makes the data available on req.body
* Without it, req.body would be undefined

Example usage:

```js
app.post('/energydrinks', (req, res) => {
    energyDrinks.push(req.body);
    res.send(req.body);
});
```

This demonstrates how Express middleware processes requests before they reach route handlers.

---

## Nodemon

Nodemon was introduced as a development tool that automatically restarts the server when files change.

Important:

* It is used only in development.
* It should not be used in production.

---

## XSS (Cross-Site Scripting)

A basic example of XSS was demonstrated using `innerHTML`.

```js
containerDiv.innerHTML = `<img src='x' onerror="alert('XSS')">`;
```

This shows how malicious scripts can be injected into a webpage.

### Prevention Strategy

* Avoid using `innerHTML` when possible
* Sanitize input by escaping special characters

Example sanitization approach:

```js
function sanitizeXSS(string) {
    return string
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}
```

---

## Reflections (Day 3)

* Functional loop methods encourage cleaner, more predictable code.
* REST APIs become clearer when URL anatomy is fully understood.
* Understanding how the client and server communicate is essential for full-stack development.
* Security considerations (like XSS) must be understood early, even in small projects.

---

## Day 4 - HTML, Time, Fetch & Deployment

**Date:** February 19th

---

## Overview
Day 4 focused on these areas:

* Completing the CRUDable REST API (Part II)
* Working with time in JavaScript (``Date``)
* Connecting frontend and backend
* Preparing and deploying a Node/Express application

The goal was to understand how a backend can serve both JSON data and HTML, and how time can be handled correctly in JavaScript.

---

## Working with Time in JavaScript

JavaScript provides the built-in ``Date`` object for handling time.

### Different ways to get time:

```js
new Date();     // Current date + time (UTC internally)
Date();         // Local time as string
Date.now();     // Unix Epoch time (milliseconds since Jan 1, 1970)
```

Understanding Unix Epoch time is important because:

* It is how time is stored and calculated internally
* It allows easy subtraction between two dates
* It is the foundation of most time calculations

---

### Creating Routes with Date

The task was to create routes that return the current month and day.

#### Month - Version 1 (Manual Array)

```js
const months = ["January", "February", "March", "April",
                "May", "June", "July", "August", 
                "September", "October", "November", "December"
];

app.get('/months/v1', (req, res) => {
    const currentMonth = new Date().getMonth();
    res.send({ data: months[currentMonth] });
});
```

Here:
* ``getMonth()`` returns a number (0-11)
* We map that number to a readable string 

#### Month - Version 2 (Locale-Based)
```js
app.get('/months/v2', (req, res) => {
    const currentMonth = new Date().toLocaleString('en-uk', { month: 'long' });
    res.send({ data: currentMonth });
});
```

This version:

* Uses built-in localization
* Avoids manual arrays
* Is cleaner and more scalable

---

### Day Routes

#### Day - Version 1 (Manual Array)

```js
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday',];

app.get('/days/v1', (req, res) => {
    res.send({ data: days[new Date().getDay()] });
});
```

#### Day - Version 2 (Locale-Based)

```js
app.get('/days/v2', (req, res) => {
    const weekday = new Date().toLocaleString('en-uk', { weekday: 'long' });
    res.send({ data: weekday });
});
```

Again, the second version is preferred because it uses built-in localization instead of manual mapping.

---

## Falsy Values in JavaScript

The following values are considered falsy:

* ``false``
* ``null``
* ``undefined``
* ``NaN``
* ``""`` (empty strings)

Understanding falsy values is important when validating input or checking conditions.

---

## Assignment: Time To Deploy!

https://github.com/anderslatif/EK_DAT_Node.js_2026_Spring/blob/main/00._Course_Material/01._Assignments/04._Time/Time_To_Deploy.md

## My Solution: Age in Time

I implemented the assignment as “Age in Time” — a small webpage where the user inputs their birthday and the UI continuously shows how much time has passed since then.

### Features

* User selects a birthday (<input type="date">)
* Calculates elapsed time as:
    * seconds
    * minutes
    * hours
* Updates automatically every second
* Handles invalid input (e.g., a future date)

### Core time calculation

Time is calculated by subtracting two Date objects (difference in milliseconds), then converting:

```js
const difference = now - birthDate;

const totalSeconds = Math.floor(difference / 1000);
const totalMinutes = Math.floor(totalSeconds / 60);
const totalHours   = Math.floor(totalMinutes / 60);
```

### Live updates (internal handling)

To avoid stacking intervals, the timer is cleared before starting a new one:

```js
function stopTimer() {
  if (timer !== null) clearInterval(timer);
  timer = null;
}
```

---

## Deployment – Hosted on Vercel

The application was deployed using **Vercel**.

Vercel uses a **serverless architecture**, meaning:

* The server is only started when a route is requested
* The server shuts down automatically when idle
* In-memory variables are not persistent between invocations

This means that any data stored directly in server variables will be lost once the server instance shuts down. For persistent storage, an external database would be required (not part of this assignment).

---

### Configuration

To deploy the Express application correctly, a `vercel.json` file was added to the project.

The configuration ensures:

* `app.js` is used as the entry point
* All routes are forwarded to the Express app
* The Node runtime is correctly used

Example configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "app.js"
    }
  ]
}
```

## Reflections (Day 4)

Working with time in JavaScript is trickier than expected due to:

* Time zones
* Milliseconds precision
* Local vs UTC differences

However, understanding Unix Epoch time makes everything predictable.

Serving HTML through Express helped bridge the gap between:

* Backend APIs
* Frontend user interfaces
* Real-world full-stack development

Deployment marked the transition from “local project” to “real application”.

--- 