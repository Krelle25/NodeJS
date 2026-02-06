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
    res.send({ data: movies})
});

// GET /movies/{id}
// Returns a single movie based on its unique id
app.get('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const movieId = movies.find(m => m.id === id);
    
    res.send({ data: movieId})
});

app.listen(8080)