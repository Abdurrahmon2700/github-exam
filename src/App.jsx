import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/componenets/Navbar/Navbar";
import LeftHeader from "../src/componenets/LeftHeader/LeftHeader";
import Hero from "../src/componenets/Hero/Hero";
import Overview from "../src/componenets/Overview/Overview";
import Repositories from "../src/componenets/Repositories/Repositories";
import Footer from "./componenets/Footer/Footer";
function App(props) {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="wrapper_left_tight">
        <LeftHeader />
        <section className="result_section">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/Overview" element={<Overview />} />
            <Route path="/Repositories" element={<Repositories />} />
          </Routes>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
