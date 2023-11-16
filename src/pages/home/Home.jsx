import React from 'react'
import Header from '../../components/header/Header'
import Carousel from '../../components/carousel/Carousel'
import CardCarousel from '../../components/cardCarousel/CardCarousel'
import Footer from '../../components/footer/Footer'
import Aksiya from '../../components/aksiya/Aksiya'

function Home() {
  return (
    <div>
      <Header /> 
      <Carousel/>
      <CardCarousel/>
      <Aksiya/>
      <Footer/>
    </div>
  )
}

export default Home