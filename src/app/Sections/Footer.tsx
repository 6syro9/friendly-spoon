import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-between items-center border border-white/15 rounded-lg py-4'>
            <div className='flex gap-4 items-center p-2'>
                <Image src={'/assets/logo.svg'} height={110} width={110} alt='image' className='h-8 w-8'/>
                <div className='highlighted-text'> R-STUDIO</div>
            </div>
            <div>
                <nav className='flex gap-8 items-center'>
                <a className=' text-white/70 hover:text-white transition' href='#'>Features</a>
            <a className=' text-white/70 hover:text-white transition' href='#'>Developers</a>
            <a  className=' text-white/70 hover:text-white transition' href='#'>Pricing</a>
            <a className=' text-white/70 hover:text-white transition' href='#'>Changelog</a>
                </nav>
            </div>
            <div className='flex gap-8 p-2.5'>
                <Image src={'/assets/social-instagram.svg'} width={110} height={110} alt='instagram logo' className='bg-white rounded-lg h-8 w-8'/>
                <Image src={'/assets/social-x.svg'} width={110} height={110} alt='x logo' className='bg-white rounded-lg h-8 w-8'/>
                <Image src={'/assets/social-youtube.svg'} width={110} height={110} alt='youtube logo' className='bg-white rounded-lg h-8 w-8' />
            </div>
        </div>
    </footer>
  )
}

export default Footer
