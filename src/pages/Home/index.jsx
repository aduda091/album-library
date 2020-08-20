import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';

import axios from '../../axios';
import * as api from '../../constants/api';

const DEFAULT_LIMIT = 10;

function Home() {
    const [albums, setAlbums] = useState([]);

    // TODO: extract this to util file
    const resolveApiUrl = () => {
        // TODO: read limit from route param
        const limit = DEFAULT_LIMIT;

        // TODO: check if search is active to append query
        return `${api.ALBUMS}&_limit=${limit}`;
    };

    useEffect(() => {
        const url = resolveApiUrl();
        axios
            .get(url)
            .then((response) => {
                setAlbums(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Header title="Album list" hasSearch />
            {albums.length ? <AlbumContainer albums={albums} /> : null}
        </div>
    );
}

export default Home;
