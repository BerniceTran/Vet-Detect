import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa'
import './HomeSearch.css';

function HomeSearch(prop) {

  const [searchInput, setSearchInput] = useState(''); // Controlled inputs - these two states used to submit form data
  const [location, setLocation] = useState('');
  const history = useHistory();

  const handleSearchInputChange = event => { 
    setSearchInput(event.target.value);
    // console.log(event.target.value);
  }

  const handleLocationChange = event => {
    setLocation(event.target.value);
  }  

  const handleSubmit = event => {
    event.preventDefault(); // Prevent default behavior of form submission (refresh->loss of inputs)
    // alert(`Submitting search input: ${searchInput}, Location: ${location}`);
    history.push(`/search-results?search_input=${searchInput}&location=${location}`); // Redirect to search-results page after submitting form
  }

  const handleKeyPress = event => {
    if (event.keyCode === 13)
    handleSubmit();
  }

  return (
    <div className="HomeSearchContainer">
      <form onSubmit={handleSubmit}>
        <div className="HomeSearch">
          <input className="ClinicInput" type="text" placeholder="Veterinarian, clinic, condition..." value={searchInput} onChange={handleSearchInputChange}></input>
          <input className="LocationInput" type="text" placeholder="City, state, or zip code" value={location} onChange={handleLocationChange}></input>
          <IconContext.Provider value={ { className: "SearchButton" } }>
            <button className="SearchButton" type="submit" onKeyPress={handleKeyPress}>Search</button>
            {/* <button className="SearchButton" type="submit" onKeyPress={handleKeyPress}><FaSearch/></button> */}
          </IconContext.Provider>
        </div>
      </form>
    </div>

  );
}

export default HomeSearch;