import React from 'react'
import Header from '../../components/header/Header'
import Carousel from '../../components/carousel/Carousel'
import CardCarousel from '../../components/cardCarousel/CardCarousel'
import Footer from '../../components/footer/Footer'
import Cards from '../../components/cards/Cards'
import productData from '../../static/bannerDataElektronik'
import ImagesPage from '../../components/imagesPage/ImagesPage'
import ImagePage1 from '../../components/imagePage1/ImagePage1'

function Home() {
  let electronic = productData.filter(i => i.type === "Elektronika")

  return (
    <div>
      <Header />
      <Carousel />
      <CardCarousel />

      <Cards componentName={"elektronika"} productData={electronic} />
      <ImagesPage />
      <Cards componentName={"elektronika"} productData={electronic} />
      <ImagePage1/>
      <Footer />
    </div>
  )
}

export default Home