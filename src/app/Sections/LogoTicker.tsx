'use client';
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';

const LogoTicker = () => {
  return (
   <section>
    <div className=' flex overflow-hidden justify-center items-center gap-6'>
        <div className='mx-4 tracking-tighter'>
            Trusted by top innovative teams
        </div>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <motion.div className='flex gap-16 flex-none h-8 pr-16' animate={{
                translateX:'-50%',
            }}
            transition={{
                duration:50,
                repeat: Infinity,
                ease:'linear',
                repeatType: 'loop',
            }}>
                <Image src={'/assets/logo-acme.png'} width={140} height={140} alt='logo image'/>
                <Image src={'/assets/logo-apex.png'} width={140} height={140} alt='logo image'/>    
                <Image src={'/assets/logo-celestial.png'} width={140} height={140} alt='logo image'/>             
                <Image src={'/assets/logo-echo.png'} width={140} height={110} alt='logo image'/>    
                <Image src={'/assets/logo-pulse.png'} width={140} height={110} alt='logo image'/>    
                <Image src={'/assets/logo-quantum.png'} width={140} height={110} alt='logo image'/>
                    {/* second set of images */}
                <Image src={'/assets/logo-acme.png'} width={140} height={140} alt='logo image'/>
                <Image src={'/assets/logo-apex.png'} width={140} height={140} alt='logo image'/>    
                <Image src={'/assets/logo-celestial.png'} width={140} height={140} alt='logo image'/>             
                <Image src={'/assets/logo-echo.png'} width={140} height={110} alt='logo image'/>    
                <Image src={'/assets/logo-pulse.png'} width={140} height={110} alt='logo image'/>    
                <Image src={'/assets/logo-quantum.png'} width={140} height={110} alt='logo image'/> 

            </motion.div>
        </div>
    </div>
   </section>
  )
}

export default LogoTicker
