import React, { createContext, useState } from 'react';

import axios from '../../axios';
import * as api from '../../constants/api';

export const AlbumsContext = createContext({
    albums: [],
    searchTerm: '',
    toggleFavorite: albumId => {}
});

export default (props) => {
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFavorite = albumId => {
        const updatedAlbums = [...albums];
        const albumIndex = albums.findIndex(album => album.id === albumId);
        const newFavoriteStatus = !albums[albumIndex].favorite;

        const url = `${api.FAVORITE}/${albumId}`;
        axios.patch(url, { favorite: newFavoriteStatus }).then(res => {
            updatedAlbums[albumIndex].favorite = res.data.favorite;
            setAlbums(updatedAlbums)
        }).catch(err => {
            console.error(err);
        });
            
    };

    return (
        <AlbumsContext.Provider value={{ albums, setAlbums, searchTerm, setSearchTerm, toggleFavorite }}>
            {props.children}
        </AlbumsContext.Provider>
    );
};
