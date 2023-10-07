import Image from 'next/image'
import React from 'react'

export default function HeaderSection() {
    return (
        <div className=' text-white grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='mx-auto'>
                <Image src={"/imgs/home1-img.png"} width={350} height={350} />
            </div>
            <div className='md:w-2/3 w-92 pl-8 md:pl-0'>
                <h3 className="text-xl font-semibold">#1 Top Scariest Ghost</h3>
                <h1 className="md:text-7xl text-4xl font-extrabold pt-3 md:pt-5 ">UOOOO  TRICK OR  TREAT!!</h1>
                <p className="text-md md:text-lg pt-3 md:pt-10 text-gray-400 ">Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn
                    something new, building my own bike with parts made only in Malaysia.
                </p>
                <button className=' bg-red-600 mt-3 md:mt-8 rounded-xl px-6 py-3'>Book Now</button>
            </div>
        </div>
    )
}
