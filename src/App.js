import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
