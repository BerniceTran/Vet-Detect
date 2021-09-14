import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Result from '../components/Result';

const SearchResults = (props) => {

    // Get query string from URL

    const { search } = useLocation(); // Search property whose value is the query string: 
    console.log('Query string:', search);

    // // To get query string values

    // const values = queryString.parse(search); // Parse query string into an object which values can be grabbed from
    // console.log(values); // Values object
    // console.log('Search input:', values.search_input);
    // console.log('Location:', values.location);

    //Use axios

    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            //const { data } = await axios.get('/api/clinics'); 
            const { data } = await axios.get('search-results/' + search); //Array in backend transferred to data in frontend
            setClinics(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h4>Search Results</h4>
            {/* {searchResultElements} */}
            {clinics.map(clinic => (
                <Result key={clinic.id} clinic = {clinic} />
            ))}     
        </div>
    );
}

export default SearchResults;