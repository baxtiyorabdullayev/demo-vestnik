import "./Navbar.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// images
import logo from "../../assets/Images/logo.png";

// react icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div id="navbar">
      <div id="nav-links">
        <NavLink to="/" id="nav-link">
          <img src={logo} alt="Turan Internatiol University" />
        </NavLink>
        <ul id="nav-icons">
          <li id="nav-search">
            <form>
              <input type="search" placeholder="search..." id="serch-input" />
              <button id="search-button">
                <AiOutlineSearch></AiOutlineSearch>
              </button>
            </form>
          </li>
          <li id="issn">
            <a href="#">ISSN (0000-0000) | </a>
          </li>
          <i id="langs">
            {/* <button>EN</button> */}
            {/* <button id="active-lang">RU</button> */}
            {/* <button>UZ</button> */}
          </i>
          <li id="logIn">
            <NavLink to="/login">
              <FaUserCircle></FaUserCircle>Log in
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="nav-menus">
        <NavLink to="/about" id="nav-link">
          O ЖУРНАЛЕ
        </NavLink>
        <NavLink to="/news" id="nav-link">
          НОВОСТИ
        </NavLink>
        <NavLink to="/sendArticle" id="nav-link">
          Отправить статью
        </NavLink>
        <NavLink to="/currentArticle" id="nav-link">
          ТЕКУЩИЙ ВЫПУСК
        </NavLink>
        <NavLink to="/archive" id="nav-link">
          АРХИВЫ
        </NavLink>
        <NavLink to="/myProfile" id="nav-link">
          мой профиль
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
