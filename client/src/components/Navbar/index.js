import React from 'react';

const Navbar = () => {

    return (
      <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">Accessible Tokyo Hotels</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
      </nav>
    </div>
    );
};

export default Navbar;
