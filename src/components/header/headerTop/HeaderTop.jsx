import React from 'react'
import './HeaderTop.css'
import { Link } from 'react-router-dom'
import logo_img from './photo_2023-11-14_19-57-42.jpg'

function HeaderTop() {
    return (
        <div className='headerTop'>
            <div className="container">
                <div className="header_top_logo">
                    <img src={logo_img} alt="logo" />
                </div>
                <select>
                    <option value="RUS">RUS</option>
                    <option value="UZB">UZB</option>
                </select>
                <div className="headerTop_links">
                    <Link to={'namoz-vaqt'}>Namoz vaqti</Link>
                    |
                    <Link to={'alif-shop'}>alif shopda soting!</Link>
                    
                    <Link to={'telegram-bot'}>Bizga yozing</Link>
                </div>
            </div>

        </div>
    )
}

export default HeaderTop