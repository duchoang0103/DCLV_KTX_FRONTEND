import logo from './logo.svg';
import './App.css';
import React from "react";

import Navication from '../components/navigation/navigation';
import Home from './Home/home';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ThongTinSV from './InfoSV/thongtinsv';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Navication/>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/ThongTinSV" element={<ThongTinSV/>}/>
          </Routes>
          
           
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
