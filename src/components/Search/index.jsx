import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Search(props) {
    return (
        <div className="search-container">
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" placeholder="Search" onChange={ event => props.onSearchChange(event.target.value)} />
            </form>
        </div>
    );
}

Search.propTypes = {
    onSearchChange: PropTypes.func
};

export default Search;
