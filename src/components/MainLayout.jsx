import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import CountriesList from "./CountriesList";
import Home from "../pages/Home";
function MainLayout() {
  return (
    <div className="container">
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default MainLayout;
