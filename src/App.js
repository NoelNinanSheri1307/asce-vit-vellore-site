import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InternalEvents from "./components/InternalEvents";
import ExternalEvents from "./components/ExternalEvents";
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
import VideoSplashScreen from "./components/Videosplash";
import RegisterForm from "./components/registerform";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const MainWebsite = () => (
    <>
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
    </>
  );

  return (
    <div className="App">
      {showSplash ? (
        <VideoSplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/registerform" element={<RegisterForm />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
