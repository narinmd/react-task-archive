import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/reactjs.png";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../hooks/UseAuth";

export default function AdminLayout() {
  const { theme } = useContext(ThemeContext);
  const asideMenuClasses = `p-3 col-md-3 ${theme === "light" ? "bg-light" : "bg-dark"}`;
  const navLinkClasses = `nav-link ${theme === "light" ? "text-dark" : "text-white"}`;

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="row">
      <aside className={asideMenuClasses}>
        <div className="d-flex text-center text-info align-items-center justify-content-center p-3">
          <img
            src={logo}
            alt=" logo"
            className="m-1"
            style={{ width: "50px", height: "50px" }}
          />

          <h3 className="fw-bold fs-5">React</h3>
        </div>

        <ul className="nav nav-pills flex-column gap-2 ">
          <li className="nav-item">
            <a href="#" className={navLinkClasses}>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={navLinkClasses}>
              Users
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={navLinkClasses}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className={navLinkClasses}>
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="text-danger nav-link" onClick={handleClick}>
              Logout
            </a>
          </li>
        </ul>
      </aside>

      <main className="col-md-9 p-3 fs-6 text-center text-info fw-bold">
        Admin Page
        {/* <Outlet /> */}
      </main>
    </div>
  );
}
