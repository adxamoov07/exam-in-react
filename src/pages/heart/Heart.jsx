import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Heart.css'
import { useSelector } from 'react-redux'
import Cards from '../../components/cards/Cards'

function Heart() {
  let heartData = useSelector((s) => s.addToHeart)


  return (
    <div>
      <Header />
      {
        heartData.length ? (<Cards productData={heartData} />) : <div className="container6">
          <div className="heart_main">

            <h2>Saralangan mahsulotlar <br /> ro'yxati xozircha bo'sh</h2>
            <p>uzoq vaqt qidirmaslik uchun o'zingizga yoqqan <br /> tovarlarni saqlang</p>
            <button>Kattalogga o'tish</button>
          </div>
        </div>
      }




      <Footer />
    </div>
  )
}

export default Heart