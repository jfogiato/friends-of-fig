import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">Friends of Fig</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
          <Link to="/instructions" className="nav-link">Instructions</Link>
          <Link to="/chores" className="nav-link">Chores</Link>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default NavHeader;