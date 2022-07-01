import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login.js'
import Register from './Register'
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
      </Routes>
  </BrowserRouter>
);


