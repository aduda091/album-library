import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AlbumsContext } from '../../context/albums/albumsContext';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';

import axios from '../../axios';
import { resolveApiUrl } from '../../utils';

import './style.scss';

function Home() {
    const urlParams = useLocation().search;
    const albumsContext = useContext(AlbumsContext);
    const {albums, setAlbums, searchTerm} = albumsContext;

    useEffect(() => {
        const url = resolveApiUrl(urlParams, searchTerm);
        axios
            .get(url)
            .then((response) => {
                setAlbums(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [searchTerm]);

    return (
        <div>
            <Header title="Album list" hasSearch />
            {albums.length ? (
                <AlbumContainer albums={albums} />
            ) : (
                <div className="no-results">
                    No results found for <span className="search-term">{searchTerm}</span>{' '}
                </div>
            )}
        </div>
    );
}

export default Home;
