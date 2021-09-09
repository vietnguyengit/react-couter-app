import React, { Component } from 'react';

//state less function
const NavBar = (props) => {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-primary">{props.totalCounters}</span>
            </a>
        </nav>
    );
}

export default NavBar;