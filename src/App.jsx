import React, { useState, useEffect } from "react";

// React Route Dom
import { Routes, Route, useLocation } from "react-router-dom";

//Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import GameList from "./pages/GameList";
import Header from "./components/Header";
import GameDetail from "./pages/GameDetail";


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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/gamelist" element={<GameList />} />
        <Route path="/about" element={<About />} />
        <Route path="/games/:id" element={<GameDetail />}></Route>
        <Route path="/games/:slug" element={<GameDetail />}></Route>
      </Routes>
      <section className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between gap-2">
          <span className="flex items-center">Copyright &copy; 2018 Eyupcanee w/ GhostKozak - All right reserved.</span>
          <div className="flex gap-3">
            {[
              ["Home", "/"],
              ["About", "/"],
              ["Blog", "/"],
              ["Games", "/"],
              ["Community", "/"],
              ["Pages", "/"],
              ["Contact", "/"]
            ].map(([title, url]) => (
              <a key={title} href={url} className="py-3 transition-colors text-inherit hover:text-amber-400" >{title}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
