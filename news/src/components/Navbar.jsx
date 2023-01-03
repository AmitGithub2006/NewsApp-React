import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <ul className="navbar">
      <li>
        <img
          id="navImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryaYxsWHP1L8Ul_S7Bglrs9WElXjlNsjfaQ&usqp=CAU"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeJEf3qr_HI0A9wbNLkv3AZTdQ8FgzA4EwA&usqp=CAU"
          alt="news-channel-logo"
        />
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav")}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav")}
          to="/headlines"
          end
        >
          Headlines
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav")}
          to="/about"
          end
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav")}
          to="/contact"
          end
        >
          Contact Us
        </NavLink>
        <input
          id="navInput"
          type="search"
          placeholder="Search CTV NEWS here..."
          onChange={(e) => {
            props.getFun(e.target.value);
          }}
        />
      </li>
    </ul>
  );
}

export default Navbar;
