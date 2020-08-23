import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Search from "../Search";

import * as routes from "../../constants/routes";

import classNames from "./index.module.scss";

function Header(props) {
    return (
        <div className={classNames.header}>
            <div className={classNames.innerContainer}>
                <h1 className={classNames.pageTitle}>
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
