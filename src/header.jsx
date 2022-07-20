import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/join">Join</Link>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
