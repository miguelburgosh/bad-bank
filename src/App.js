import React from "react";
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import './App.css';
import Home from './components/home/home';
import CreateAccount from './components/createaccount/createaccount';
import Login from './components/login/login';
import Deposit from './components/deposit/deposit';
import Withdraw from './components/withdraw/withdraw';
import AllData from './components/alldata/alldata';

// const Home = () => (
//   <div className="home">
//     <h1>Home</h1>
//   </div>
// )

// const About = () => (
//   <div className="about">
//     <h1>About</h1>
//   </div>
// )

// const Contact = () => (
//   <div className="contact">
//     <h1>Contact</h1>
//   </div>
// )

const App = () => {

  return (

  <div className="parent">
    <div className="div1">  <Navigation /> </div>
    <div className="div2">
      <Routes>
         <Route path="/" element={ <Home/> } exact />
         <Route path="/createaccount/" element={ <CreateAccount />} exact />
         <Route path="/login/" element={ <Login />} exact />
         <Route path="/deposit/" element={ <Deposit />} exact />
         <Route path="/withdraw/" element={ <Withdraw />} exact />
         <Route path="/alldata/" element={ <AllData />} exact />

      </Routes>
      
    </div>
    <div className="div3"> </div> 
  </div> 
  );
  }

export default App;
