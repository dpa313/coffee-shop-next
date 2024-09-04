"use client"
import { useEffect } from 'react'
// components
import About from '@/components/About'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import OpenningHours from '@/components/OpenningHours'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  // add locomotive scroll
  useEffect(()=>{
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll
    }
    loadLocomotiveScroll();
  },[])
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero/>
      <Explore/>
      <About/>
      <Menu/>
      <OpenningHours/>
      <Testimonials/>
    </div>
  )
}

export default Home
