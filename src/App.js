import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BreakOutGame from './components/games/breakout/BreakoutGame.js';
import Home from './components/pages/Home.js';
import Memory from './components/pages/Memory.js';


  class App extends Component {
    
    render(){
      return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/memory" element={<Memory />}></Route>
            <Route path="/breakout" element={<BreakOutGame />}></Route>
          </Routes>
        </Router>
        
      </>
      );
    }
  }

export default App;