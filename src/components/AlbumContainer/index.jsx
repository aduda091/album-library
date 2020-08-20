import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import AlbumItem from '../AlbumItem';

function AlbumContainer(props) {
    const renderAlbums = () => {
        return props.albums.map((album) => (
            <AlbumItem
                key={album.id}
                id={album.id}
                title={album.title}
                price={album.price}
                imageUrl={album.imageUrl}
                releaseDate={album.releaseDate}
                isFavorite={album.favorite}
                artistId={album.artistId}
                artistName={album.artist.title}
            />
        ));
    };
    return <div className="album-container">{renderAlbums()}</div>;
}

AlbumContainer.propTypes = {
    albums: PropTypes.array
};

export default AlbumContainer;
