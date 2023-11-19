import React from 'react'
import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartCards from '../../components/cartCards/CartCards'

function Cart() {
  let cartData = useSelector((s) => s.addToCart)
  return (
    <div>
      <Header />
      {
        cartData.length ? (<CartCards productData={cartData} />) : <div className="container6">
          <div className="cart_main">
            <h2>Savat hozircha boʻsh</h2>
            <p>Mahsulotlarni topish uchun katalogni ko'ring <br /> yoki qidiruvdan foydalaning</p>
            <Link className='cart_link_1'>Katalogga o'tish</Link>
            <Link to={"/"} className='cart_link_12'>Asosiy ekranga</Link>
          </div>
        </div>
      }


      <Footer />
    </div>
  )
}

export default Cart