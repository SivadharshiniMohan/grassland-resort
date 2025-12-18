import React, { useState } from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import {
  Home,
  AboutUs,
  Room,
  Contact
} from "./pages/index";
import Footer from "./components/common/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch(currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <AboutUs />;
      case "rooms":
        return <Room />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div>
          <Header onNavigate={setCurrentPage} />
          {renderPage()}
          <Footer />
      </div>
    </>
  );
}
