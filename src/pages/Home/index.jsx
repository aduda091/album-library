import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';

import axios from '../../axios';
import { resolveApiUrl } from '../../utils';

import './style.scss';

function Home() {
    const urlParams = useLocation().search;
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = term => {
        setSearchTerm(term);
    };

    useEffect(() => {
        const url = resolveApiUrl(urlParams, searchTerm);
        axios
            .get(url)
            .then((response) => {
                setAlbums(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [urlParams, searchTerm]);

    return (
        <div>
            <Header title="Album list" hasSearch onSearchChange={handleSearchChange} />
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
