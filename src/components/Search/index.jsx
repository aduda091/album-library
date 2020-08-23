import React, { useContext } from "react";

import AlbumsContext from "../../context/albums/albumsContext";

import classNames from  "./index.module.scss";

function Search() {
    const albumsContext = useContext(AlbumsContext);
    const { searchTerm, setSearchTerm } = albumsContext;

    return (
        <div className={classNames.searchContainer}>
            <form onSubmit={(event) => event.preventDefault()}>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm}
                />
            </form>
        </div>
    );
}

export default Search;
