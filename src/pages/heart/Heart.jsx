import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Heart.css'

function Heart() {
  return (
    <div>
      <Header />

      <div className="container6">
        <div className="heart_main">

          <h2>Saralangan mahsulotlar <br /> ro'yxati xozircha bo'sh</h2>
          <p>uzoq vaqt qidirmaslik uchun o'zingizga yoqqan <br /> tovarlarni saqlang</p>
          <button>Kattalogga o'tish</button>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Heart