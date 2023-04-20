import React, { useContext, useEffect } from 'react'
import HeroSection from './components/HeroSection';
import {AppContext, useProductContext} from "./context/ProductContact"
const About = () => {

  const {myname}=useProductContext()
  const my={
    name:"My Ecommerce"
  }
  return (
    <>
      {myname} 
     <HeroSection myname={my} />
    </>
  )
}

export default About