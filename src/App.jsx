import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/componenets/Navbar/Navbar";
import LeftHeader from "../src/componenets/LeftHeader/LeftHeader";
import Hero from "../src/componenets/Hero/Hero";
import Overview from "../src/componenets/Overview/Overview";
import Repositories from "../src/componenets/Repositories/Repositories";
import Footer from "./componenets/Footer/Footer";
import Profile from "./pages/profile";
import Repos from "./pages/repos";

function App(props) {
  return (
    <div className="container-fluid">
      <Navbar />
      <Hero />
      <div className="wrapper_left_tight">
        <section className="result_section">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Overview" element={<Profile />} />
            <Route path="/Repositories" element={<Repos />} />
          </Routes>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
