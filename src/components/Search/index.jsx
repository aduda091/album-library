import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AlbumsContext } from '../../context/albums/albumsContext';

import './style.scss';

function Search(props) {
    const setSearchTerm = useContext(AlbumsContext).setSearchTerm;
    return (
        <div className="search-container">
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" placeholder="Search" onChange={ event => setSearchTerm(event.target.value)} />
            </form>
        </div>
    );
}

Search.propTypes = {
    onSearchChange: PropTypes.func
};

export default Search;
