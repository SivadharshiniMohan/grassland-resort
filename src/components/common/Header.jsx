import React, { useState } from "react";
import { navList } from "../data/Data";
import logo from "./../../assets/img/logo.png";


export default function Header({ onNavigate }) {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    if (onNavigate) {
      onNavigate(page);
    }
    setNavbarCollapse(false);
  };

  const getMenuItemStyle = (page) => ({
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: activePage === page ? "#2ecc71" : "inherit",
    fontWeight: activePage === page ? "600" : "normal",
    transition: "color 0.3s ease"
  });

  return (
    <>
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <button
              onClick={() => handleNavClick("home")}
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
              style={{ border: "none", background: "transparent", cursor: "pointer" }}
            >
              <img src={logo} alt="logo" height={"50rem"} />
            </button>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <button
                onClick={() => handleNavClick("home")}
                className="navbar-brand d-block d-lg-none"
                style={{ border: "none", background: "transparent", cursor: "pointer" }}
              >
                <img src={logo} alt="logo" height={"50rem"} />
              </button>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around navbarCollapse"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <div className="navbar-nav mr-auto py-0">
                  <button
                    onClick={() => handleNavClick("home")}
                    className="nav-item nav-link"
                    style={getMenuItemStyle("home")}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavClick("about")}
                    className="nav-item nav-link"
                    style={getMenuItemStyle("about")}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavClick("rooms")}
                    className="nav-item nav-link"
                    style={getMenuItemStyle("rooms")}
                  >
                    Rooms
                  </button>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="nav-item nav-link"
                    style={getMenuItemStyle("contact")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
