import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Newsletter from './components/Newsletter'
import PurchasePlan from './components/PurchasePlan'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Newsletter />
      <PurchasePlan />
    </div>
  );
}

export default App;
