import React from 'react';

import './style.scss';

function AlbumItem() {
    return (
        <div className="album-item">
            <div className="album-main-info">
                <img
                    src="https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/20/6f/b5/206fb560-6fd5-15f9-0b68-88d309ffc5a6/19UMGIM53909.rgb.jpg/170x170bb.png"
                    alt="album cover"
                    className="album-cover"
                />
                <div className="name-title-container">
                    <div className="album-title">Feel Good Inc.</div>
                    <div className="album-artist">Gorillaz</div>
                </div>
            </div>
            
            <div className="year-info">
                <span className="year-label">Released: </span>
                <span className="year-value">2005</span>
            </div>

            <div className="price">
                $12.99
            </div>

            <div className="favorite-container">
                <button className="add-favorite">Mark as favorite</button>
            </div>
        </div>
    );
}

export default AlbumItem;
