import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InternalEvents from "./components/InternalEvents";
import ExternalEvents from "./components/ExternalEvents";
import Winners from "./components/Winners";
import Achievements from "./components/Achievements";
import Sponsors from "./components/Sponsors";
import AboutUs from "./components/AboutUs";
import Patron from "./components/Patron";
import Team from "./components/Team";
import Register from "./components/Register";
import Gallery from "./components/Gallery";
import Archive from "./components/Archive";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <InternalEvents />
      <ExternalEvents />
      <Winners />
      <Achievements />
      <Sponsors />
      <AboutUs />
      <Patron />
      <Team />
      <Register />
      <Gallery />
      <Archive />
      <Contact />
    </>
  );
}

export default App;
