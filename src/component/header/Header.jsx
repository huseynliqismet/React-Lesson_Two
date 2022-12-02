import React from "react";
import "../header/header.scss";
import {Link} from 'react-router-dom'
export const Header = () => {
  return <header className="header">
    <div className="boxes">
      <div className="logo">
        <h1>
          <Link to='/logo'>Logo</Link>
          </h1>
      </div>
      <div className="nav-menyu">
        <ul>
          <li>
     <Link to={'/'}>Home</Link>
          </li>
          <li>
          <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>;
};
