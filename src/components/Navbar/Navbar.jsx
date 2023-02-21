import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/Images/logo.png";
import banner from "../../Assets/Images/banner.jpg";

// react icons
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <img src={logo} alt="Turan Internatiol University" />
        <ul className="nav-icons">
          <li className="nav-search">
            <form>
              <input
                type="search"
                placeholder="search..."
                className="serch-input"
              />
              <button className="search-button">
                <AiOutlineSearch></AiOutlineSearch>
              </button>
            </form>
          </li>
          <li className="issn">
            <a href="#">ISSN (0000-0000)</a>
          </li>
          <i className="langs">
            <button>EN</button>
            <button className="active-lang">RU</button>
            <button>UZ</button>
          </i>
          <li className="logIn">
            <AiOutlineUser></AiOutlineUser>
            {/* <span>LOG IN</span> */}
          </li>
        </ul>
      </div>

      <div className="nav-menus">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/news" className="nav-link">
          News
        </NavLink>
        <NavLink to="/sendArticle" className="nav-link">
          Send Article
        </NavLink>
        <NavLink to="/currentArticle" className="nav-link">
          Current Article
        </NavLink>
        <NavLink to="/archive" className="nav-link">
          Archive
        </NavLink>
        <NavLink to="/myProfile" className="nav-link">
          My Profile
        </NavLink>
      </div>

      {/* <div className="nav-banner">
        <img src={banner} alt="Turan International University" />
      </div> */}
    </div>
  );
}

export default Navbar;
