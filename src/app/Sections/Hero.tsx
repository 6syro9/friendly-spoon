'use client';
import React, { useRef } from 'react'
import { Button } from '../Components/Button'
import { motion, useScroll, useTransform } from 'framer-motion';
import starsBg from '../../../assets/stars.png'  
const Hero = () => {
  const sectionRef = useRef(null);
 const { scrollYProgress } =  useScroll({
    target: sectionRef,
    offset:['start end', 'end start']
  });

  const backgroundPositionY =  useTransform(scrollYProgress, [0,1], [-300,300]);

  return (
  <motion.section 
  ref={sectionRef}
  className='flex h-[492px] items-center' style={{
      backgroundImage:`url('/assets/stars.png')`,
      backgroundPositionY,
    }}
    animate={{
      backgroundPositionX: [0, 1000]
    }}
    transition={{repeat:Infinity,
      ease: "linear",
      duration: 120,
    }}
    >
      {/* <div className='absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>
      <div className='absolute h-[344px] w-[344px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute h-2 w-2 top-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div> */}
        <div className='container relative'>
            <h1 className='highlighted-text text-8xl tracking-tighter text-center'>R-STUDIO</h1>
            <p className='text-lg mt-5 text-center'> A Studio for  <span className='highlighted-text mr-1'> Content Creators </span>  to Effortlessly Collaborate with their editors  and other Creators through secure protocols.</p>
            <div className='flex justify-center mt-8 font-bold'><Button><span className='highlighted-text p-3'> DISCOVER MORE </span></Button></div> 
        </div>
    </motion.section>
  )
}

export default Hero
