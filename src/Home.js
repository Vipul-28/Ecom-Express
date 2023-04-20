import React from 'react'
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import FeatureProducts from './components/FeatureProducts';
const Home = () => {
  const my={
    name:"My Store"
  }
  return (
    <>
    <HeroSection myname={my} />
    <FeatureProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home