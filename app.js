const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Landing');
    res.end();
});

app.get('/api/movies', (req, res) => {
    res.send([1,2,3]);
});

// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}...`))