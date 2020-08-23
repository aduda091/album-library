import "./utils/polyfills";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AlbumsState from "./context/albums/AlbumsState";

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <AlbumsState>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AlbumsState>
    </React.StrictMode>,
    document.getElementById("root"),
);
