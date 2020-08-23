import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

import AlbumsContext from "../../context/albums/albumsContext";

import classNames from "./index.module.scss";

function AlbumItem(props) {
    const toggleFavorite = useContext(AlbumsContext).toggleFavorite;

    const getYear = () => {
        return new Date(props.releaseDate).getFullYear();
    };

    const resolveFavoriteCta = props.favorite ? (
        <button
            className={classNames.removeFavorite}
            onClick={() => toggleFavorite(props.id)}
        >
            Remove favorite
        </button>
    ) : (
        <button
            className={classNames.addFavorite}
            onClick={() => toggleFavorite(props.id)}
        >
            Mark as favorite
        </button>
    );

    const albumCoverContainerClasses = [classNames.albumCoverContainer];
    props.favorite && albumCoverContainerClasses.push(classNames.hasStar);

    return (
        <div className={classNames.albumItem}>
            <div className={classNames.albumMainInfo}>
                <div
                    className={albumCoverContainerClasses.join(" ")}
                >
                    <img
                        src={props.imageUrl}
                        alt={`${props.title} album cover.`}
                        className={classNames.albumCover}
                    />
                </div>
                <div className={classNames.nameTitleContainer}>
                    <div className={classNames.albumTitle}>{props.title}</div>

                    <Link
                        to={`${routes.ARTIST_ROOT}/${props.artistId}`}
                        title={`View all albums from ${props.artistName}`}
                        className={classNames.albumArtist}
                    >
                        {props.artistName}
                    </Link>
                </div>
            </div>

            <div className={classNames.yearInfo}>
                <span className={classNames.yearLabel}>Released: </span>
                <span className={classNames.yearValue}>{getYear()}</span>
            </div>

            <div className={classNames.price}>{props.price}</div>

            <div className={classNames.favoriteContainer}>{resolveFavoriteCta}</div>
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
