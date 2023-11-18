import React from 'react'
import Header from '../../components/header/Header'
import Carousel from '../../components/carousel/Carousel'
import CardCarousel from '../../components/cardCarousel/CardCarousel'
import Footer from '../../components/footer/Footer'
// import Aksiya from '../../components/aksiya/Aksiya'
// import SinglePage from '../../components/singlePage/SinglePage'
import Cards from '../../components/cards/Cards'
import productData from '../../static/bannerDataElektronik'

function Home() {
  let electronic = productData.filter(i => i.type === "Elektronika")

  return (
    <div>
      <Header />
      <Carousel />
      <CardCarousel />

      <Cards componentName={"elektronika"} productData={electronic} />
      {/* <SinglePage /> */}

      {/* <Aksiya /> */}
      <Footer />
    </div>
  )
}

export default Home