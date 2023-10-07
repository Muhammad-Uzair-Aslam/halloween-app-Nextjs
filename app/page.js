
import React from 'react'
import Header from './(components)/header/header'
import HeaderSection from './(components)/headerSection/headerSection'
import Category from './(components)/category/category'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeaderSection/>
      <h1 className='mt-10 md:mt-32 text-white  text-3xl md:text-4xl font-bold text-center'>Text from App. <br/> Category</h1>
      <div className='my-10 md:my-32 grid grid-cols-1 md:grid-cols-3 gap-5'>
          <Category src={"/imgs/category1-img.png"} text="Choose the ghosts, the scariest there are." heading="Ghost"/>
          <Category src={"/imgs/category2-img.png"} text="You look at the scariest pumpkins there is." heading="Pumpkins"/>
          <Category src={"/imgs/category3-img.png"} text="Pick the most stylish witch hats out there." heading="Witch Hat"/>
      </div>
    </div>
  )
}
