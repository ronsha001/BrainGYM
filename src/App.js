import React, { Component } from 'react';
import "./App.css";
import Navbar from './components/Nav';
import TopSection from './components/topSection';
import TrainProgram from './components/TrainProgram';
import Cards from './components/Cards';
import Dedicate from './components/Dedicate';


  class App extends Component {
    
    render(){
      return (
      <div className="App">
      
        <Navbar></Navbar>

        <TopSection></TopSection> 

        <TrainProgram></TrainProgram>

        <Cards></Cards>

        <Dedicate></Dedicate>
        
      </div>
      );
    }
  }

export default App;