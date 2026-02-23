const express = require("express");
const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage.html');
});

app.listen(8080, () => {
    console.log("Server is running on port: " + 8080);
});