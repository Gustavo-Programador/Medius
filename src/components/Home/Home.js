import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Benefits from './Benefits';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Home;
