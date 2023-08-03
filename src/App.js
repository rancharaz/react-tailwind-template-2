import React from 'react';
import './App.css';
import Navbar from './components/UI/Navbar';
import Hero from './components/UI/Hero';
import Analytics from './components/UI/Analytics';
import Newsletter from './components/UI/Newsletter';
import Cards from './components/UI/Cards';
import Footer from './components/UI/Footer';

/*  */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
