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
import ChainBackground from "./components/ChainBackground";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="with-background">
        <ChainBackground particleId="tsparticles-global" />
      <InternalEvents />
      <ExternalEvents />
      <Achievements />
      <Sponsors />
      <AboutUs />
      <Patron />
      <Team />
      <Register />
      <Gallery />
      <Archive />
      <Contact />
      </div>
    </div>
  );
}

export default App;