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
import { HiOutlineXMark } from "react-icons/hi2";
import { katalogData } from '../../static/headerData'
import { useDispatch, useSelector } from 'react-redux'
import data from '../../static/bannerDataElektronik'
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth'
import { auth } from '../../firebase'

function Header() {
  const [openLogin, setOpenLogin] = useState(false);

  const [openKatalogData, setOpenKatalogData] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch()
  const heartData = useSelector(s => s.addToHeart).map(i => i.id)
  const cartData = useSelector(s => s.addToCart).map(i => i.id)


  const [searchResult, setSearchResult] = useState(null)

  function search(value) {
    if (!value) {
      return setSearchResult(null)
    }
    let result = data.filter(i => i.title.toLowerCase().includes(value.toLowerCase()))
    setSearchResult(result)
  }
  console.log(searchResult);

  openLogin
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  function openLoginFunc() {
    setOpenLogin(true)
  }

  function closeLogin() {
    setOpenLogin(false)
  }

  function addLogin(e) {
    e.preventDefault()


    let reacptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'callback': (responce) => {
        console.log("prepared phone auth proces");
      }
    })


    signInWithPhoneNumber(auth, phone, reacptcha)
      .then((e) => {
        let code = prompt("AlifShop Tasdiqlash Kodni Kiriting!")
        if (code === null) {
          alert("kod kiritilmadi")
        }
        else {
          e.confirm(code)
            .then(user => {
              console.log(user)
              localStorage.setItem("kirish", name)
              localStorage.setItem("telefon", phone)
              window.location.reload()

            })
            .catch(err => {
              console.log(err)
              alert("Notug'ri code kiritildi!")
              window.location.reload()
            })
        }
      })



  }


  openKatalogData
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")





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
            <button onClick={() => setOpenKatalogData(!openKatalogData)} className='button_cotolog_heder'> {openKatalogData ? <HiOutlineXMark /> : <FaBars />} <p>Каталог товаров</p></button>

            <div className="search">
              <input type="search" placeholder='Tavarlarni izlash' onChange={(e) => search(e.target.value)} />
              <div className="search_icons">
                <FaSearch />
              </div>
              <div className="searchResult" style={{ display: searchResult?.length ? "flex" : "none" }} >
                {
                  searchResult?.map((item, index) =>
                    <Link className='searchResult_items' to={`/single-page/${item.id}`} key={index} >{item.title}</Link>
                  )
                }
              </div>
            </div>

            <Link to={"/cart"} className="savat_link">
              <SlBasketLoaded />
              <div className={cartData.length ? "favorite_red1" : "favorite_none"}></div>
              <p>Savat</p>
            </Link>

            <Link to={"/favorite"} className="sevimlilar_link">
              <FaRegHeart />
              <div className={heartData.length ? "favorite_red" : "favorite_none"}></div>
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
                      <input placeholder='+998 XX XXX XX XX' type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
                    <div id="recaptcha-container"></div>
                    <button type='submit' className='login_buuton'>Davom Etish</button>
                    <button onClick={closeLogin} className='login_buuton1'>Bekor Qilish</button>
                  </div>

                </form>
              </div>


            }

          </div>
        </div>



        <div className="container7">

          {
            openKatalogData && (
              <div className="container_position">
                <div className="catalog_wrapper">
                  {katalogData.map((katalogItem, index) => (
                    <div key={index} className="catalog_wrapper_item">

                      <p>{katalogItem.title.titleName}</p>

                      <div className="catalog_wrapper_item_section">

                        <div className="catalog_wrapper_item_section_links">
                          {katalogItem.collection.map((item, index) => (
                            <div key={index}>
                              <h4>{item.collectionItemName}</h4>
                              <ul>
                                {item.collectionItemLinks.map((link_item, index) => (
                                  <li key={index}>
                                    <Link to={"/"}>{link_item}</Link>
                                  </li>
                                ))}
                              </ul>

                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            )
          }
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
              <div className={cartData.length ? "favorite_red1" : "favorite_none"}></div>
              <p>Savat</p>
            </Link>
          </div>

          <div className="sevimlilar_link1">
            <Link className='sevimlilar_link1' to={"/favorite"}>
              <FaRegHeart />
              <div className={heartData.length ? "favorite_red" : "favorite_none"}></div>
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