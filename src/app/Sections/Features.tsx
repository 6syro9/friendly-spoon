'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'
import Image from 'next/image';

const tabs = [
    {
      icon: "/vroom.lottie",
      title: "Secured Protocols",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSizeX: 150,
    },
    {
      icon: "/click.lottie",
      title: "Powerful user-friendly analytics",
      isNew: false,
      backgroundPositionX: 98,
      backgroundPositionY: 100,
      backgroundSizeX: 135,
    },
    {
      icon: "/stars.lottie",
      title: "Clustered Video-performance Tracker",
      isNew: true,
      backgroundPositionX: 100,
      backgroundPositionY: 27,
      backgroundSizeX: 177,
    },
  ];

const Features = () => {
  return (
    <section className='py-20'>
      <div className=''>
          <h2 className='highlighted-text text-4xl text-center tracking-tighter'> Elevate your workflow</h2>
          <p className='text-lg text-white tracking-tighter text-center mt-5'>Trusted by youtubers for a secure & streamlined workflow to Collaborate with their editors</p>
          <div className='flex flex-col gap-4 mt-8'>
              {tabs.map(tab =>(
                  <div key={tab.title} className='border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center'>
                    <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'> <DotLottieReact src={tab.icon} className='h-5 w-5' autoplay></DotLottieReact></div>
                      <div className='font-medium'>{tab.title}</div>
                  </div>
              ))}
          </div>
          <div className='border border-white/20 p-2.5 rounded-xl mt-3 flex justify-center '>
            <Image src={'/assets/product-image.png'} width={660} height={660} alt='image'/>
          </div>
      </div> 
    </section>
  )
}

export default Features
