const express = require('express');

const app = express();

app.get('/api', (res, req) => {
    res.send('fetching backend api');
})

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
})