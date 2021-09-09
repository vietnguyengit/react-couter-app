import React, { Component } from 'react';

//state less function
const NavBar = ({ totalCounters }) => {
    console.log("NavBar - rendered")
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-primary">{totalCounters}</span>
            </a>
        </nav>
    );
}

export default NavBar;