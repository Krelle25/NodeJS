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
| Get         | /beers      | Retrieve all beers    |
| GET         | /beers      | Retrieve a beer by id |
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
