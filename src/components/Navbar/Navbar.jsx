import React, { useContext, useState } from "react";
import logo from "../../assets/reactjs.png";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeButton from "../use context professionally/ThemeButton/ThemeButton";
import Profile from "../use context professionally/Profile";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const { theme } = useContext(ThemeContext);

  const navbarClasses = `navbar navbar-expand-lg ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`;
  const adminBtnClasses = `${theme === "light" ? styles.admin_link_light : styles.admin_link_dark}`;
  const dropDownMenuClasses = ` ${theme === "light" ? styles.dropdown_menu_custome_light : styles.dropdown_menu_custome_dark}`;
  const dropDownItemClasses = ` ${theme === "light" ? styles.dropdown_item_custome_light : styles.dropdown_item_custome_dark}`;
  const navbarTogglerClasses = `navbar-toggler rounded-1 ${theme === "light" ? "text-dark" : "bg-light"}`;
  const navLinkClasses = (isActive) => {
    if (isActive) {
      return `${styles[`active_link_${theme}`]} nav-link`;
    }
    return `${styles[`nav_link_${theme}`]} nav-link`;
  };
  return (
    <div>
      <nav className={navbarClasses}>
        <div className="container-fluid">
          <img
            src={logo}
            alt=" logo"
            className="m-1"
            style={{ width: "50px" }}
          />
          <NavLink className="navbar-brand text-info fw-bold fs-5" to="#">
            React
          </NavLink>

          <button
            className={navbarTogglerClasses}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => navLinkClasses(isActive)}
                  aria-current="page"
                  to="/"
                >
                  Home Page
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className={({ isActive }) => navLinkClasses(isActive)
                  }
                  aria-current="page"
                  to="/aboutus"
                >
                  About Us
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
                <NavLink
                  className={`dropdown-toggle ${navLinkClasses(false)}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-current="page"
                >
                  Product Categorise
                </NavLink>
                <ul className={`dropdown-menu ${dropDownMenuClasses}`}>
                  <li className="nav-item">
                    <NavLink
                      className={`dropdown-item ${dropDownItemClasses}`}
                      aria-current="page"
                      to="/category"
                    >
                      Product Category 1 (static data)
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`dropdown-item ${dropDownItemClasses}`}
                      aria-current="page"
                      to="/category-api"
                    >
                      Product Category 2 (API data)
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className={`dropdown-toggle ${navLinkClasses(false)}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-current="page"
                >
                  Forms
                </NavLink>

                <ul className={`dropdown-menu ${dropDownMenuClasses}`}>
                  <li>
                    <NavLink
                      className={`dropdown-item ${dropDownItemClasses}`}
                      aria-current="page"
                      to="/form-usestate"
                    >
                      Form 1 (use state)
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className={`dropdown-item ${dropDownItemClasses}`}
                      aria-current="page"
                      to="/form-useref"
                    >
                      Form 2 (use ref)
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className={`dropdown-item ${dropDownItemClasses}`}
                      aria-current="page"
                      to="/form-formdata"
                    >
                      Form 3 (form data)
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className={`dropdown-item ${dropDownItemClasses}`}
                      aria-current="page"
                      to="/form-useaction"
                    >
                      Form 4 (use action)
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => navLinkClasses(isActive)}
                  aria-current="page"
                  to="/getlocation"
                >
                  Get User Location
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => navLinkClasses(isActive)}
                  aria-current="page"
                  to="/xo-game"
                >
                  Tic-tac-toe Game
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 admin_ul">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    ` ${adminBtnClasses}  ${isActive ? "nav-link active" : "nav-link"}`
                  }
                  aria-current="page"
                  to="/form"
                >
                  <Profile />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-2">
          <ThemeButton />
        </div>
      </nav>
    </div>
  );
}
