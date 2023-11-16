import React, { useState } from 'react'
import HeaderTop from './headerTop/HeaderTop'
import './Header.css'
import logo_main_header_img from './headerTop/photo_2023-11-14_19-57-42.jpg'
import { SlBasketLoaded } from 'react-icons/sl'
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { CgPlayListSearch } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import Profil from '../../pages/profil/Profil'
import { Link } from 'react-router-dom'

function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');




  openLogin
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  function openLoginFunc() {
    setOpenLogin(true)
  }

  function closeLogin() {
    setOpenLogin(false)
  }

  function addLogin() {
    localStorage.setItem("kirish", name)
    localStorage.setItem("telefon", number)
    alert("MUVAFFAQIYATLI O'TDINGIZ")

  }

  let textLogin = localStorage.getItem("kirish")



  return (
    <div>
      <HeaderTop />
      <div className='header_relative'>
        <div className="header">
          <div className="container1">

            <Link to={"/"}>
              <img className='main_logo_header' src={logo_main_header_img} alt="logo" />
            </Link>
            <button className='button_cotolog_heder'> <FaBars /> <p>Каталог товаров</p></button>

            <div className="search">
              <input type="search" placeholder='Tavarlarni izlash' />
              <div className="search_icons">
                <FaSearch />
              </div>
            </div>

            <Link to={"/cart"} className="savat_link">
              <SlBasketLoaded />
              <p>Savat</p>
            </Link>

            <Link to={"/favorite"} className="sevimlilar_link">
              <FaRegHeart />
              <p>Sevimlilar</p>
            </Link>


            <button className='main_kirish_1' onClick={openLoginFunc}>
              <Link to={textLogin ? "/profil" : "/"} className='main_kirish'>
                {textLogin && <img src='https://alifshop.uz/_ipx/s_44x44/images/no-avatar.svg' alt='img' />}
                {textLogin ? textLogin : 'Kirish'}</Link>
            </button>
            {openLogin &&

              <div className="login">
                <form onSubmit={addLogin} className='login_item'>
                  <div className="login_item_header">
                    <h3>Avtorizatsiya alif shop</h3>
                    <HiMiniXMark onClick={closeLogin} />
                  </div>

                  <div className='inputs'>
                    <div className='input_box'>
                      <p>ISM:</p>
                      <input onChange={(e) => setName(e.target.value)} type="text" required />
                    </div>

                    <div className='input_box'>
                      <p>+998:</p>
                      <input onChange={(e) => setNumber(e.target.value)} type="number" required />
                    </div>
                    <button type='submit' className='login_buuton'>Davom Etish</button>
                    <button onClick={closeLogin} className='login_buuton1'>Bekor Qilish</button>
                  </div>

                </form>
              </div>


            }

          </div>
        </div>















        <div className="bottom_header">

          <div className="mainLink1">
            <Link className='mainLink1' to={"/"}>
              <IoMdHome />
              <p>Asosiy</p>
            </Link>
          </div>

          <div className="catalog_link1">
            <CgPlayListSearch />
            <p>Katalog</p>
          </div>

          <div className="savat_link1">
            <Link className='savat_link1' to={"/cart"}>
              <SlBasketLoaded className='icon_1_1' />
              <p>Savat</p>
            </Link>
          </div>

          <div className="sevimlilar_link1">
            <Link className='sevimlilar_link1' to={"/favorite"}>
              <FaRegHeart />
              <p>Sevimlilar</p>
            </Link>
          </div>

          <div onClick={openLoginFunc} className="profil_link1">
            <Link to={textLogin ? "/profil" : "/"} className='profil_link1'>
              <CiUser />
              <p>{textLogin ? textLogin : "Kirish"}</p>
            </Link>

          </div>


        </div>
      </div>
    </div >
  )
}

export default Header