'use client'

import React, { useEffect } from 'react'
import Hero from './Hero'
import Property from './Property'
import Featured from './Featured'
import Popular from './Popular'
import Works from './Works'
import Testimoonials from './Testimoonials'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  
  useEffect(() =>{

    const initAos = async () =>{
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center',
      }) 
    }
    initAos();
    
  },[])
  
  return (
    <div>
     <Hero />
     <Property />
     <Featured />
     <Popular />
     <Works />
     <Testimoonials />
    </div>
  )
}

export default Home
