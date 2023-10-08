import React, { useState } from 'react';
import '../DashBord/SearchBar.css';

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    // Update searchResults state with the search results
  };

  return (
    <div style={{display:'flex'}}>
      <input  
      className='input'
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button className='btn10' onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;