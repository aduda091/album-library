import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AlbumsProvider from './context/albums/albumsContext';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <AlbumsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AlbumsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
