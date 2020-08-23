import React, { useContext } from 'react';

import AlbumsContext from '../../context/albums/albumsContext';

import './style.scss';

function Search() {
    const albumsContext = useContext(AlbumsContext);
    const {searchTerm, setSearchTerm} = albumsContext;

    return (
        <div className="search-container">
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" placeholder="Search" onChange={ event => setSearchTerm(event.target.value)} value={searchTerm} />
            </form>
        </div>
    );
}

export default Search;
