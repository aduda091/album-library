import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Search from "../Search";

import * as routes from "../../constants/routes";

import "./style.scss";

function Header(props) {
    return (
        <div className="header">
            <div className="inner-container">
                <h1 className="page-title">
                    <Link to={routes.HOME} title="Home">
                        {props.title}
                    </Link>
                </h1>
                {props.hasSearch ? (
                    <Search onSearchChange={props.onSearchChange} />
                ) : null}
            </div>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    hasSearch: PropTypes.bool,
    onSearchChange: PropTypes.func,
};

export default Header;
