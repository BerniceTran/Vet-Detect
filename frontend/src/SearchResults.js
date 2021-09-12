import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import searchResultsData from './SearchResultsData';
import Result from './Result';

const SearchResults = (props) => {

    // Get query param from URL

    const { search } = useLocation(); // Search property whose value is the query string
    console.log('Query string:', search);

    const values = queryString.parse(search); // Parse query string into an object which values can be grabbed from
    console.log(values); // Values object
    console.log('Search input:', values.search_input);
    console.log('Location:', values.location);

    //Use values to find in SearchResultsData

    const searchResultElements = [];

    for (let i = 0; i < searchResultsData.length; i++) {
        if (searchResultsData[i].clinicName.toLowerCase().includes(values.search_input.toLowerCase())) {
            searchResultElements.push(<Result clinicName={searchResultsData[i].clinicName} address={searchResultsData[i].address}/>);
        }
    }

    return (
        <div>
            <h4>Search Results</h4>
            {searchResultElements}
        </div>
    );
}

export default SearchResults;