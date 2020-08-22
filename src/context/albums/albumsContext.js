import React, { createContext, useState } from 'react';

export const AlbumsContext = createContext({
    albums: [],
    searchTerm: '',
    toggleFavorite: albumId => {}
});

export default (props) => {
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFavorite = albumId => {
        setAlbums(currentAlbums => {
            const updatedAlbums = [...currentAlbums];
            // TODO: API request for this
            const albumIndex = currentAlbums.findIndex(album => album.id === albumId);
            const newStatus = !currentAlbums[albumIndex].favorite;
            updatedAlbums[albumIndex] = {
                ...currentAlbums[albumIndex],
                favorite: newStatus
            }
            return updatedAlbums;
        });
    };

    return (
        <AlbumsContext.Provider value={{ albums, setAlbums, searchTerm, setSearchTerm, toggleFavorite }}>
            {props.children}
        </AlbumsContext.Provider>
    );
};
