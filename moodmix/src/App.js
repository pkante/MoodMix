import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatPage from './components/ChatPage';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import PurchasePlan from './components/PurchasePlan';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import AboutPage from './components/About';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <Navbar /> <Hero /> <HowItWorks /> <Newsletter /> <PurchasePlan /> </>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* <Navbar /> */}
    </Router>
  );
}

export default App;