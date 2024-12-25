const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serving the files to server
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact me page
app.get('/contact/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// About Degree Page
app.get('/degree/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/degree.html'));
})

// The Net page
app.get('/net/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/net.html'));
})

// Initialization of server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});