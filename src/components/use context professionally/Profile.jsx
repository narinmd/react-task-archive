import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { LayoutDashboard } from "lucide-react";
import { LogOut } from "lucide-react";

import { useAuth } from "../../hooks/UseAuth";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../Navbar/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const dropDownMenuClasses = ` ${theme === "light" ? styles.dropdown_menu_custome_light : styles.dropdown_menu_custome_dark}`;
  const dropDownItemClasses = ` ${theme === "light" ? styles.dropdown_item_custome_light : styles.dropdown_item_custome_dark}`;

  const { user, logout } = useAuth();

  if (!user) {
    return <div className="text-black">Login</div>;
  }

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dropdown">
      <button
        className="btn border-0 dropdown-toggle w-75"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {user.userName || "Profile"}
      </button>

      <ul className={`dropdown-menu ${dropDownMenuClasses}`}>
        {" "}
        <li>
          <Link className={`dropdown-item ${dropDownItemClasses}`} to="/admin">
            <LayoutDashboard />
            <span className="m-1">Dashboard</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link
            className={`dropdown-item ${dropDownItemClasses}`}
            to="/"
            onClick={handleClick}
          >
            <LogOut />
            <span className="m-1">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
