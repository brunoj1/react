import React from 'react';
import { NavLink } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

const Header = () => (
    <nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">        
        <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/todo" className="nav-link">Todo</NavLink></li>
        <li className="nav-item"><NavLink to="/clock" className="nav-link">Clock</NavLink></li>
        <li className="nav-item"><NavLink to="/toggle" className="nav-link">Toggle</NavLink></li>
        <li className="nav-item"><NavLink to="/form" className="nav-link">Form</NavLink></li>
        <li className="nav-item"><NavLink to="/assignment" className="nav-link">Assignment</NavLink></li>
    </ul>
  </div>
</nav>    
);

export default Header;