import React from 'react'
import Image from 'next/image';
import LogoIcon from '@/assests/logo.png';
import { Button } from '../Components/Button';

const Header = () => {
  return (
  <header className=' py-4 border-b max-md:bg-black/50 max-md:backdrop-blur-md md:border-none sticky'>
    <div className=''>
   <div className='flex justify-between items-center md:border border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto'>
        <div>
            <div>

                    <Image src={'/assets/logo.svg'} width={110} height={110} className='h-8 w-8' alt='logo image'/>

            </div>
        </div>
        <div className='hidden md:block'>
          <nav className='flex gap-8 '>
            <a className=' text-white/70 hover:text-white transition' href='#'>Features</a>
            <a className=' text-white/70 hover:text-white transition' href='#'>Developers</a>
            <a  className=' text-white/70 hover:text-white transition' href='#'>Pricing</a>
            <a className=' text-white/70 hover:text-white transition' href='#'>Changelog</a>
          </nav>
        </div>
        <div className='flex gap-4 items-center '>
        <Button>Join waitlist</Button>
            <span className='mr-4 md:hidden'><Image src={'/assets/icon-menu.svg'} width={110} height={110} className='h-8 w-8' alt='menu image'/></span>

        </div>
   </div>
   
    </div>
  </header>
  )
}

export default Header
