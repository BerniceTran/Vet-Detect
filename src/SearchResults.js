import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const SearchResults = (props) => {

    const { search } = useLocation(); //search property whose value is the query string
    console.log('Query string:', search);

    const values = queryString.parse(search); //parse query string into an object which values can be grabbed from
    console.log(values);
    console.log(values.search_input);
    console.log(values.location);

    return (
        <div>
            <h4>Search Results</h4>
        </div>
    );
}

export default SearchResults;