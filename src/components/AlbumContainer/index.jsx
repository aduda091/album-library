import React from "react";
import PropTypes from "prop-types";

import AlbumItem from "../AlbumItem";

import classNames from "./index.module.scss";

function AlbumContainer(props) {
    const renderAlbums = () => {
        return props.albums.map((album) => (
            <AlbumItem
                key={album.id}
                {...album}
                artistName={album.artist.title}
            />
        ));
    };
    return <div className={classNames.albumContainer}>{renderAlbums()}</div>;
}

AlbumContainer.propTypes = {
    albums: PropTypes.array,
};

export default AlbumContainer;
