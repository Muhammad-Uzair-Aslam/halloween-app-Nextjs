
import Image from 'next/image'
import NavImage from '@/public/imgs/logo.png'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div >
      <div className=' text-white flex justify-around content-center items-center pt-5  md:p-10'>
          <div className='flex space-x-3 relative md:relative -top-12 md:top-0'>
            <Image src='/imgs/logo.png' width={20} height={20} alt="" /><span className='text-xl font-bold'>Helloween</span>
          </div>
          <div>
            <ul className='flex md:flex-row  space-x-10 text-lg abolute right-0 top-10 flex-col'>
                <li></li>
                <li><a href={"#home"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#trick"}>Candy</a></li>
                <li><a href={"#new"}>New</a></li>
                <button className=' border-white border-2 rounded-3xl px-4 py-1'>Support</button>
            </ul>
            
            
          </div>
      </div>
    </div>
  )
}
