import express from 'express';
import data from './data.js'; //server side, important to append .js extension


const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/clinics', (req, res) => {
    res.send(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Serving at http://localhost:${port}`));
