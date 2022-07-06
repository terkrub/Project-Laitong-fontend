import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login.js'
import Register from './Register'
import Home from "./Home";
import Contact from "./Contact";
import AdminLogin from "./Admin/AdminLogin";
import AddProducts from "./Admin/AddProducts";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/addproduct" element={<AddProducts/>}/>
      </Routes>
  </BrowserRouter>
);


