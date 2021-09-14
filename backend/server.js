import express, { query } from 'express';
import data from './data.js'; //server side, important to append .js extension

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/clinics', (req, res) => {
    res.send(data);
});

app.get('/search-results', (req, res) => {
    //console.log('Request query value', req.query.search_input);

    const querySearchParam = req.query.search_input.toLowerCase();
    const queryLocationParam = req.query.location.toLowerCase();

    let filteredData = [];

    // console.log(querySearchParam);
    // console.log(queryLocationParam);

    if (querySearchParam == undefined || queryLocationParam == undefined) {
        res.send(data);
    } else {
        // console.log(querySearchParam);
        // console.log(data);
        
        filteredData = data.filter(clinic => clinic.clinicName.toLowerCase().includes(querySearchParam));
        // console.log(filteredData);

        res.send(filteredData);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Serving at http://localhost:${port}`));
