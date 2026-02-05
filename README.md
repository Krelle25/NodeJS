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
| POST        | /beers      | Create a new beer     |
| GET         | /beers      | Retrieve all beers    |
| GET         | /beers/{id} | Retrieve a beer by ID |
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

## Day 1 – JavaScript Fundamentals & REST API Design

**Date:** January 29th