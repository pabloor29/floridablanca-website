import CustomHeroBanner from '@/components/CustomHeroBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function MenuPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="menu" />
      <Footer />
    </>  )
}

export default MenuPage