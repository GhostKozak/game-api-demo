import React from 'react'

// React Route Dom
import { Routes, Route, useLocation } from 'react-router-dom'

//Pages
import MainPage from './pages/MainPage.jsx'
import GameList from './pages/GameList'
import GameDetails from './pages/GameDetails'
import CategoryList from './pages/CategoryList'


function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />}  />
        <Route path="/gamelist" element={<GameList />} />
      </Routes>
    </>
  )
}

export default App;
