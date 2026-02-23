const express = require('express');

const app = express();

app.use(express.json()); // built-in middleware to parse JSON bodies

// In-memory movie collection.
// Only `id` is guaranteed and controlled by the server.
const movies = [
    {
        id: 1,
        title: "The Matrix",
    },
    {
        id: 2,
        title: "Interstellar",
    },
    {
        id: 3,
        title: "Parasite",
    },
    {
        id: 4,
        title: "Mad Max: Fury Road",
    },
    {
        id: 5,
        title: "Blade Runner 2049",
    }
];

let nextId = 3;

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
        return res.status(404).send({ errorMessage: `No movie found by ID: ${req.params.id}`});
    }
        res.send(foundMovie);
});


// let number = 2;
// Post-fix notation 2, 3
// console.log(number++);
// console.log(number);
// Pre-fix notation  3, 3
// console.log(++number);
// console.log(number);

// POST /movies
// Adds a new movie to the collection
app.post('/movies', (req, res) => {
    const { title } = req.body;

    // Validation 1: Check if the title is a non-empty string
    if (typeof title !== "string" || title.trim().length === 0) {
        res.status(400).send({
            errorMessage: "Invalid body. 'title' must be a non-empty string.",
        });
    };

    // Generate a new unique ID for the movie
    // We can use the current maximum ID in the collection and add 1 to it to ensure uniqueness.
    const currentMaxId = movies.length === 0 ? 0 : Math.max(...movies.map(movie => movie.id));

    // The next ID will be one greater than the current maximum ID
    const nextId = currentMaxId + 1;

    // Create a new movie object with the generated ID and the provided title
    const newMovie = {
            id: nextId,
            title: title.trim(),
        };

        // Add the new movie to the collection
        movies.push(newMovie);
        
        // Respond with the newly created movie and a 201 Created status code
        res.status(201).send(newMovie);
});



app.patch('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMovieId);

    if (!foundMovieIndex === -1) {
        res.status(404).send({ errorMessage: `No movie found by id: ${req.params.id} `});
    }

    const foundMovie = movies[foundMovieIndex];
    const providedMovie = req.body;

    const movieToCreate = {...foundMovie, ...providedMovie, id: providedMovieId };
    movies[foundMovieIndex] = movieToCreate;

    res.send({ data: movieToCreate });
}); 


// PUT /movies/{id}
// Updates an existing movie's information based on its unique id
app.patch('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);
    
    // Validation 1: Check if the provided ID is a valid positive integer
    if (!Number.isInteger(providedMovieId) || providedMovieId <= 0) {
        res.status(400).send({ errorMessage: `Invalid movie ID: ${req.params.id}. ID must be a positive integer.`});
    };
    
    // Extract the title from the request body
    const { title } = req.body;

  // Validation 2: Check if the title is a non-empty string

  if (typeof title !== "string" || title.trim().length === 0) {
    res.status(400).send({
        errorMessage: "Invalid body. 'title' must be a non-empty string.",
    });
  }

  // Find the index of the movie with the provided ID
  const index = movies.findIndex((movie) => movie.id === providedMovieId);

  // Validation 3: Check if a movie with the provided ID exists
  if (index === -1) {
    res.status(404).send({
      errorMessage: `No movie found by ID: ${req.params.id}`,
    });
  }


  // Update the movie's title while preserving other properties
  // The spread operator (...) is used to create a new object that includes all existing properties of the movie, and then the title property is overwritten with the new value from the request body.
  movies[index] = {
    ...movies[index],
    title: title.trim(),
  };
  
  res.send(movies[index]);
});

// DELETE /movies{id}
// Deletes a movie from the collection based on its unique id
app.delete('/movies/:id', (req, res) => {
    const providedMovieId = Number(req.params.id);

    const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMovieId);

    if (foundMovieIndex === -1) {
        return res.status(404).send({ errorMessage: `No movie found by ID: ${req.params.id}`});
    }

        movies.splice(foundMovieIndex, 1);

        res.status(204).send();
    });

app.listen(8080)
