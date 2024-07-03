import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import Register from "./routes/register";
import Home from "./routes/home";
import Order from "./routes/Order"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
