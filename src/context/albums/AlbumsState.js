import React, { useReducer } from "react";

import AlbumsContext from "./albumsContext";
import AlbumsReducer from "./albumsReducer";
import axios from "../../axios";
import * as api from "../../constants/api";
import { resolveApiUrl } from "../../utils";

import * as types from "../types";

const AlbumsState = (props) => {
    const initialState = {
        albums: [],
        searchTerm: "",
        loading: false,
    };

    const [state, dispatch] = useReducer(AlbumsReducer, initialState);

    // Fetch albums
    const fetchAlbums = async (urlParams) => {
        setLoading();
        const url = resolveApiUrl(urlParams, state.searchTerm);
        const res = await axios.get(url);

        dispatch({
            type: types.SET_ALBUMS,
            payload: res.data,
        });
    };

    // Set search
    const setSearchTerm = (term) =>
        dispatch({ type: types.SET_SEARCH_TERM, payload: term });

    // Toggle favorite
    const toggleFavorite = (albumId) => {
        const updatedAlbums = [...state.albums];
        const albumIndex = state.albums.findIndex(
            (album) => album.id === albumId,
        );
        const newFavoriteStatus = !state.albums[albumIndex].favorite;

        const url = `${api.FAVORITE}/${albumId}`;
        axios
            .patch(url, { favorite: newFavoriteStatus })
            .then((res) => {
                updatedAlbums[albumIndex].favorite = res.data.favorite;
                dispatch({
                    type: types.SET_ALBUMS,
                    payload: updatedAlbums,
                });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // Set loading
    const setLoading = () => dispatch({ type: types.SET_LOADING });

    return (
        <AlbumsContext.Provider
            value={{
                albums: state.albums,
                searchTerm: state.searchTerm,
                loading: state.loading,
                fetchAlbums,
                setSearchTerm,
                toggleFavorite,
            }}
        >
            {props.children}
        </AlbumsContext.Provider>
    );
};

export default AlbumsState;
