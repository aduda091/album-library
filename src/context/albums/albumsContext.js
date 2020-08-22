import React, { createContext, useState } from 'react';

export const AlbumsContext = createContext({
    albums: [],
    searchTerm: ''
});

export default (props) => {
    const [albums, setAlbums] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <AlbumsContext.Provider value={{ albums, setAlbums, searchTerm, setSearchTerm }}>
            {props.children}
        </AlbumsContext.Provider>
    );
};
