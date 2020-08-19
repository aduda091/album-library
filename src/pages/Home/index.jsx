import React from 'react';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';


function Home() {
    return (
        <div>
            <Header title="Album list" hasSearch />
            <AlbumContainer />
        </div>
    );
}

export default Home;
