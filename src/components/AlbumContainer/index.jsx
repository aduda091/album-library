import React from 'react';

import './style.scss';
import AlbumItem from '../AlbumItem';

function AlbumContainer() {
    return (
        <div className="album-container">
            <AlbumItem />
            <AlbumItem />
        </div>
    );
}

export default AlbumContainer;
