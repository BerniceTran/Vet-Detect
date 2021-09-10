import { useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

function Search(prop) {

  const [searchInput, setSearchInput] = useState(''); //these states used to submit form data
  const [location, setLocation] = useState('');
  const history = useHistory();

  const handleSearchInputChange = event => { 
    setSearchInput(event.target.value);
    //console.log(event.target.value);
  }

  const handleLocationChange = event => {
    setLocation(event.target.value);
  }  

  const handleSubmit = event => {
    event.preventDefault(); //prevent default behavior of form submission (refresh->loss of inputs)
    //alert(`Submitting search input: ${searchInput}, Location: ${location}`);
    history.push("/search-results"); //redirect to search-results page after submitting form
    
  }

  const handleKeyPress = event => {
    if (event.keyCode === 13)
    handleSubmit();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Veterinarian, clinic, condition..." value={searchInput} onChange={handleSearchInputChange}></input>
          <input type="text" placeholder="City, state, or zip code" value={location} onChange={handleLocationChange}></input>
          <button type="submit" onKeyPress={handleKeyPress}>Submit</button>
        </div>
      </form>
    </div>

  );
}

export default Search;