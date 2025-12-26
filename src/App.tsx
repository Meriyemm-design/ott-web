import React, { useRef } from "react";
import "./Styles/commonStyles.css";
import "./Styles/homestyles.css";
import "./Styles/mainstyles.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Support from "./Pages/Support";
import Subscription from "./Pages/Subscription";
import Practice from "./components/Practice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
