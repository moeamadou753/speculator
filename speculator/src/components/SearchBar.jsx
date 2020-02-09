import React from 'react';
import SearchField from 'react-search-field';

const searchBar = () => {
    return (

        <div>
            <SearchField
                placeholder="Search..."
                searchText="This is initial search text"
            />
        </div>
    );
    
}

export default searchBar;