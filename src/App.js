import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';


  class App extends Component {
    
    render(){
      return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
        
      </>
      );
    }
  }

export default App;