const express = require('express');

const app = express();

// In-memory movie collection.
// Only `id` is guaranteed and controlled by the server.
const movies = [
    {
        id: 1,
        title: "The Matrix",
        year: 1999,
        genres: ["Sci-Fi", "Action"],
    },
    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Drama"],
    },
    {
        id: 3,
        title: "Parasite",
        year: 2019,
        genres: ["Thriller", "Drama"],
    },
    {
        id: 4,
        title: "Mad Max: Fury Road",
        year: 2015,
        genres: ["Action", "Thriller"],
    },
    {
        id: 5,
        title: "Blade Runner 2049",
        year: 2017,
        genres: ["Sci-Fi"],

    }
];

// GET-method | Returns a simple welcome message to verify that the server is running
app.get('/', (req, res) => {
    res.send({ data: "Welcome to the Movie Server! :)"})
});

// GET /movies
// Returns all movies in the collection
app.get('/movies', (req, res) => {
    console.log(req.params);
    // do not use res.json | use res.send always
    res.send({ data: movies})
});

// GET /movies/{id}
// Returns a single movie based on its unique id
app.get('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovie = movies.find((movie) => movie.id === providedMovieId);
    
    if (!foundMovie) {
        res.status(404).send({ errorMessage: `No movie found by ID: ${req.params.id}`});
    } else {
        res.send(foundMovie);
    }
});

// Post /movies
// Adds a new movie to the collection
app.post('/movies', (req, res) => {
    movies.push(req.body);
    console.log(movies);
    res.send(req.body);
});

app.listen(8080)
