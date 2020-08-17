import React from 'react';

import './style.scss';

function Search() {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder="Search" />
            </form>
        </div>
    );
}

export default Search;
