import React from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';

import './style.scss';

function Header(props) {
    return (
        <div className="header">
            <div className="inner-container">
                <h1 className="page-title">{props.title}</h1>
                { props.hasSearch ? <Search onSearchChange={props.onSearchChange} /> : null}
            </div>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    hasSearch: PropTypes.bool,
    onSearchChange: PropTypes.func
};

export default Header;
