import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { json } from "react-router-dom";
function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("mode")
      ? Boolean(Number(localStorage.getItem("mode")))
      : false
  );
  isDark
    ? document.body.classList.add("darkMode")
    : document.body.classList.remove("darkMode");
  return (
    <div
      className="justify-between"
      style={{ fontSize: 18 }}
      onClick={() => {
        setIsDark(!isDark);
        localStorage.setItem("mode", !isDark ? 1 : 0);
      }}
    >
      {isDark && <BsSun />}
      {isDark && <p> Light Mode</p>}
      {!isDark && <BsMoon />}
      {!isDark && <p> Dark Mode</p>}
    </div>
  );
}

export default DarkModeToggle;
