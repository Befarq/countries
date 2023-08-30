import { NavLink } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
function Header() {
  return (
    <div className="justify-between header">
      <NavLink to="/">
        <p>Where in the world?</p>
      </NavLink>
      <DarkModeToggle />
    </div>
  );
}

export default Header;
