import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  HomeObjFive,
  HomeObjOne,
  HomeObjThree,
  HomeObjTwo,
} from '../components/InfoSection/Data';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <ServicesSection {...HomeObjFive} />
      <InfoSection {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
