import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './routes/Login';
import Home from "./routes/Home";
import SelectSignUp from "./routes/SelectSignUp";
import SignUpUser from "./routes/SignUpUser";
import SignUpDriver from "./routes/SignUpDriver";
import SignUpDriver1 from "./routes/SignUpDriver1";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/select-sign-up" element={<SelectSignUp />} />
      <Route path="/user-sign-up" element={<SignUpUser />} />
      <Route path="/driver-sign-up" element={<SignUpDriver />} />
      <Route path="/driver1-sign-up" element={<SignUpDriver1 />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

