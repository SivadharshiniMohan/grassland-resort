import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import {
  Home
} from "./pages/index";
import Footer from "./components/common/Footer";
export default function App() {
  return (
    <>
      <div>
          <Header />
          <Home/>
          <Footer />
      </div>
    </>
  );
}
