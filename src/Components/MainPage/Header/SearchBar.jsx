import React from 'react';
import './SearchBar.css'; // Import the CSS file

function SearchBar () {

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Search"/>
                <div className="searchIcon"></div>
            </div>
        </div>
    );
}

export default SearchBar;