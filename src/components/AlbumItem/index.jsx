import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

import AlbumsContext from "../../context/albums/albumsContext";

import "./style.scss";

function AlbumItem(props) {
    const toggleFavorite = useContext(AlbumsContext).toggleFavorite;

    const getYear = () => {
        return new Date(props.releaseDate).getFullYear();
    };

    const resolveFavoriteCta = props.favorite ? (
        <button
            className="remove-favorite"
            onClick={() => toggleFavorite(props.id)}
        >
            Remove favorite
        </button>
    ) : (
        <button
            className="add-favorite"
            onClick={() => toggleFavorite(props.id)}
        >
            Mark as favorite
        </button>
    );

    return (
        <div className="album-item">
            <div className="album-main-info">
                <div
                    className={`album-cover-container${
                        props.favorite ? " has-star" : ""
                    }`}
                >
                    <img
                        src={props.imageUrl}
                        alt={`${props.title} album cover.`}
                        className="album-cover"
                    />
                </div>
                <div className="name-title-container">
                    <div className="album-title">{props.title}</div>

                    <Link
                        to={`${routes.ARTIST_ROOT}/${props.artistId}`}
                        title={`View all albums from ${props.artistName}`}
                        className="album-artist"
                    >
                        {props.artistName}
                    </Link>
                </div>
            </div>

            <div className="year-info">
                <span className="year-label">Released: </span>
                <span className="year-value">{getYear()}</span>
            </div>

            <div className="price">{props.price}</div>

            <div className="favorite-container">{resolveFavoriteCta}</div>
        </div>
    );
}

AlbumItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
    releaseDate: PropTypes.string,
    favorite: PropTypes.bool,
    artistId: PropTypes.number,
    artistName: PropTypes.string,
};

export default AlbumItem;
