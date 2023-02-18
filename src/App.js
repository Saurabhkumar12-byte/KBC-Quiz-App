import './App.css';
import '../src/components/css/home.css'
import '../src/components/css/Game.css'
import '../src/components/css/reward.css'
import '../src/components/css/life.css'
import '../src/components/css/winning.css'
import Home from "../src/components/Home.js";
import Gamescreen from './components/Gamescreen.js';
import { Routes, Route } from "react-router-dom";

// import { useEffect } from 'react';
// import Lifeline from './components/Lifeline';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/play" element={<Gamescreen />} />
      </Routes>
    </>
  );
}

export default App;
