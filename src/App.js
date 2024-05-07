import React from 'react'
import './App.css';
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CloudStatusHome from './CloudStatusHome';

function App() {
  return ( <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/cloudstatushome" element={<CloudStatusHome />} />
  </Routes>
  </BrowserRouter>
  ); 
}

export default App;
