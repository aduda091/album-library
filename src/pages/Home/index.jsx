import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import AlbumsContext from "../../context/albums/albumsContext";

import Header from "../../components/Header";
import AlbumContainer from "../../components/AlbumContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

import "./style.scss";

function Home() {
    const urlParams = useLocation().search;
    const albumsContext = useContext(AlbumsContext);
    const { albums, searchTerm, fetchAlbums, loading } = albumsContext;

    useEffect(() => {
        fetchAlbums(urlParams);
        //eslint-disable-next-line
    }, [searchTerm]);

    const resolveContent = () => {
        if (loading) return <LoadingSpinner />;

        return albums.length ? (
            <AlbumContainer albums={albums} />
        ) : (
            <div className="no-results">
                No results found for{" "}
                <span className="search-term">{searchTerm}</span>
            </div>
        );
    };

    return (
        <div>
            <Header title="Album list" hasSearch />
            {resolveContent()}
        </div>
    );
}

export default Home;
