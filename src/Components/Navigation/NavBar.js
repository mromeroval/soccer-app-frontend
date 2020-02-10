import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-4">
        <a href="#!" className="brand-logo right">
          Logo
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
