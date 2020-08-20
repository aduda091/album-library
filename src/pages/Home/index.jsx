import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';

import axios from '../../axios';
import { resolveApiUrl } from '../../utils';

function Home() {
    const [albums, setAlbums] = useState([]);
    const urlParams = useLocation().search;

    useEffect(() => {
        const url = resolveApiUrl(urlParams);
        axios
            .get(url)
            .then((response) => {
                setAlbums(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [urlParams]);

    return (
        <div>
            <Header title="Album list" hasSearch />
            {albums.length ? <AlbumContainer albums={albums} /> : null}
        </div>
    );
}

export default Home;
