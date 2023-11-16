import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carousel1() {
  return (
    <div className='carousel_page'>
      <div className="container2">

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          className='carousel_home'
        >
          <div className='carousel_home_item'>
            <img src="https://minio.alifnasiya.uz/shop/catalog/carousel/187/1699209288-11.11%20qaynoq%20narxlar%201600x491%20UZ.png" alt="Slide 1" />
          </div>
          <div>
            <img src="https://minio.alifnasiya.uz/shop/catalog/carousel/183/1697264562-1600x491%20uz%20copy.png" alt="Slide 2" />
          </div>
          <div>
            <img src="https://minio.alifnasiya.uz/shop/catalog/carousel/188/1699607978-%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%205.jpg" alt="Slide 3" />
          </div>
          <div>
            <img src="https://minio.alifnasiya.uz/shop/catalog/carousel/186/1698761735-3)%201600x491%2043-50_3300%20UZB.png" alt="Slide 2" />
          </div>
          <div>
            <img src="https://minio.alifnasiya.uz/shop/catalog/carousel/185/1698244324-2%20uzb.jpg" alt="Slide 3" />
          </div>
          <div>
            <img src="https://minio.alifnasiya.uz/shop/catalog/carousel/176/1694261957-1694018328-1600%D1%85491%20(2)%20(1).jpg" alt="Slide 2" />
          </div>
       
        </Carousel>
      </div>

    </div>
  )
}

export default Carousel1