import React, { useState, useEffect } from "react";

// React Route Dom
import { Routes, Route, useLocation } from "react-router-dom";

//Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import GameList from "./pages/GameList";
import Header from "./components/Header";
import GameDetail from "./pages/GameDetail";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";


function App() {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(document.getElementById("root").getBoundingClientRect().y);
    });
  }, [scrollY]);

  return (
    <>
      <Header y={scrollY} />
      <div className="router-content h-full">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/gamelist" element={<GameList />} />
        <Route path="/about" element={<About />} />
        <Route path="/games/:id" element={<GameDetail />}></Route>
        <Route path="/games/:slug" element={<GameDetail />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
