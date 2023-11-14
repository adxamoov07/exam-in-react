import React from 'react'
import HeaderTop from './headerTop/HeaderTop'
import './Header.css'
import logo_main_header_img from './headerTop/photo_2023-11-14_19-57-42.jpg'
import { SlBasketLoaded } from 'react-icons/sl'
import { FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { CgPlayListSearch } from "react-icons/cg";
import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <div>
      <HeaderTop />
      <div>
        <div className="header">
          <div className="container1">

            <img className='main_logo_header' src={logo_main_header_img} alt="logo" />
            <button className='button_cotolog_heder'> <FaBars /> <p>Каталог товаров</p></button>

            <div className="search">
              <input type="search" placeholder='Tavarlarni izlash' />
              <div className="search_icons">
                <FaSearch />
              </div>
            </div>

            <div className="savat_link">
              <SlBasketLoaded />
              <p>Savat</p>
            </div>

            <div className="sevimlilar_link">
              <FaRegHeart />
              <p>Sevimlilar</p>
            </div>


            <button className='main_kirish'>Kirish</button>

          </div>
        </div>

        <div className="bottom_header">

          <div className="mainLink1">
            <IoMdHome/>
            <p>Asosiy</p>
          </div>

          <div className="catalog_link1">
            <CgPlayListSearch/>
            <p>Katalog</p>
          </div>

          <div className="savat_link1">
            <SlBasketLoaded className='icon_1_1' />
            <p>Savat</p>
          </div>

          <div className="sevimlilar_link1">
            <FaRegHeart />
            <p>Sevimlilar</p>
          </div>

          <div className="profil_link1">
            <CiUser/>
            <p>Profil</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Header