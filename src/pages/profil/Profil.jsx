import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Profil.css'
import { Link, Route, Routes } from 'react-router-dom'
import { LuArrowRightFromLine } from "react-icons/lu";
import Haridlar from '../../components/haridlar/Haridlar'
import Sharhlar from '../../components/sharhlar.css/Sharhlar'

function Profil() {

    let textLogin = localStorage.getItem("kirish")
    let telNomer = localStorage.getItem("telefon")

    function deleteProfil() {
        let deleteIsm = localStorage.removeItem("kirish")
        let deleteNumber = localStorage.removeItem("telefon")
        alert("Shahsiy Hisob Uchirildi!")
    }

    return (
        <div>
            <Header />

            <div className="profil">
                <div className="container5">

                    <div className="profil_header">
                        <div className='profil_header_link'>
                            <img src='https://alifshop.uz/_ipx/s_44x44/images/no-avatar.svg' alt='img' />
                            <div>
                                <p>{textLogin ? textLogin : "Ism"}</p>
                                <p>{telNomer ? telNomer : "Telefon Number"}</p>
                            </div>
                        </div>
                        <div onClick={deleteProfil}>
                            <Link to={"/"} className='header_profil_1'>
                                <LuArrowRightFromLine />
                                <p className='pDisplayNane'>Accoundan chiqish</p>
                            </Link>
                        </div>
                    </div>
                    <div className="profil_Page_main">
                        <Link to={'/profil/haridlar'}>Mening Haridlarim</Link>
                        <Link to={'/profil/sharhlar'}>Mening Sharhlarim</Link>
                    </div>
                    <div className="profil_line"></div>
                    <div className="page_change_box">
                        <Routes>
                            <Route path='/haridlar' element={<Haridlar />} />
                            <Route path='sharhlar' element={<Sharhlar/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profil