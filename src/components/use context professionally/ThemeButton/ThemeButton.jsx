import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeTextClasses = `form-check-label m-2 fs-6 ${theme === "light" ? "text-black" : "text-white"}`;

  return (
    <div>
      <div className="form-check form-switch d-flex align-items-center">
        <input
          className={`form-check-input ${styles.customSwitch}`}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        <label className={themeTextClasses} htmlFor="flexSwitchCheckDefault">
          {theme == "light" ? "Dark" : "Light"}
        </label>
      </div>
    </div>
  );
}
