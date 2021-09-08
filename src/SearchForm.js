import { useState } from "react";


function Search(prop) {

  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState('');

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
    //console.log(event.target.value);
  }

  const handleLocationChange = event => {
    setLocation(event.target.value);
  }  

  const handleSubmit = event => {
    event.preventDefault(); //prevent default behavior of form submission (refresh->loss of inputs)
    alert(`Submitting search input: ${searchInput}, Location: ${location}`);
    // alert(`Location: ${location}`);
  }

  const handleKeyPress = event => {
    if (event.keyCode === 13)
    handleSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Veterinarian, clinic, condition..." value={searchInput} onChange={handleSearchInputChange}></input>
         <input type="text" placeholder="City, state, or zip code" value={location} onChange={handleLocationChange}></input>
        <button type="submit" onKeyPress={handleKeyPress}>Submit</button>
      </div>
    </form>
  );
}

export default Search;