import CustomHeroBanner from '@/components/CustomHeroBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function MenuPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="menu" img="/IMG_0236.jpg"/>
      <Footer />
    </>  )
}

export default MenuPage