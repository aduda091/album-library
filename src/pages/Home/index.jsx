import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import AlbumsContext from '../../context/albums/albumsContext';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';

import './style.scss';

function Home() {
    const urlParams = useLocation().search;
    const albumsContext = useContext(AlbumsContext);
    const { albums, searchTerm, fetchAlbums } = albumsContext;
    
    useEffect(() => {
        fetchAlbums(urlParams);
        //eslint-disable-next-line
    }, [searchTerm]);

    return (
        <div>
            <Header title="Album list" hasSearch />
            {albums.length ? (
                <AlbumContainer albums={albums} />
            ) : (
                <div className="no-results">
                    No results found for <span className="search-term">{searchTerm}</span>
                </div>
            )}
        </div>
    );
}

export default Home;
