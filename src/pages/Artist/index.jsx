import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import AlbumsContext from '../../context/albums/albumsContext';

import Header from '../../components/Header';
import AlbumContainer from '../../components/AlbumContainer';

function Artist() {
    const { artistId } = useParams();
    const albumsContext = useContext(AlbumsContext);
    const { albums } = albumsContext;

    const currentArtistAlbums = albums.filter((album) => album.artistId === Number(artistId));
    
    if (currentArtistAlbums.length) {
        const artistName = currentArtistAlbums[0].artist.title;
        return (
            <div>
                <Header title={artistName} />
                <AlbumContainer albums={currentArtistAlbums} />
            </div>
        );
    } else {
        return (
            <div>
                <Header title="Unknown artist" />
                <div className="no-results">
                    No results found for artist with ID of <strong>{artistId}</strong>
                </div>
            </div>
        )
        
    }
}

export default Artist;
