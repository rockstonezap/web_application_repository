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
app.get('/public/contact/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// About Degree Page
app.get('/public/degree/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/degree.html'));
})

// Special Page for FCE
app.get('/public/fce', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/fce.html'));
})

// The Net page
app.get('/public/net/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/net.html'));
})

// About me Page
app.get('/public/about/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
})

// Topic Page
app.get('/public/topic/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/topic.html'));
})

// Initialization of server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});