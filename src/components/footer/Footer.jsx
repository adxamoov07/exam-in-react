import React from 'react'
import './Footer.css'
import FooterBottom from './footerBottom/FooterBottom'

function Footer() {

  return (
    <div>
      <FooterBottom />
      <div className='footer'>
        <div className="container4">
          <div className='footer_box'>
            <div className="footer_item">
              <h4>Hujjatlar</h4>
              <p>Sotish uchun umumiy shartlar</p>
              <p>Ofertalar arxivi</p>
              <p>Nizom</p>
              <p>Guvohnoma</p>
            </div>
            <div className="footer_item">
              <h4>Servis</h4>
              <p>Muddatli to'lov islomda</p>
              <p>alif shopda soting!</p>
              <p>Qaytarish</p>
            </div>
            <div className="footer_item">
              <h4>Tovarlar katalogi</h4>
              <p>Smartfonlar va telefonlar</p>
              <p>Gadjetlar</p>
              <p>Smartfonlar uchun aksessuarlar</p>
              <p>Tegishli tovarlar</p>
              <p>Soat va aksessuarlar</p>
            </div>
            <div className="footer_item">
              <h4>Biz ijtimoiy axborot vositalarida</h4>
              <div className="logotip_5">
                <img src="https://alifshop.uz/_ipx/s_80x80/images/media/instagram.webp" alt="" />
                <img src="https://alifshop.uz/_ipx/s_80x80/images/media/facebook.svg" alt="" />
                <img src="https://alifshop.uz/_ipx/s_80x80/images/media/telegram.svg" alt="" />
                <img src="https://alifshop.uz/_ipx/s_80x80/images/media/ok.svg" alt="" />
                <img src="https://alifshop.uz/_ipx/s_80x80/images/media/tiktok.svg" alt="" />


              </div>
              <h4>Axborot xizmati</h4>
              <p>@alifshop_uz</p>
              <p>+998 91 293 23 29</p>
            </div>

          </div>
          <div className="footer_box_bottom">
            <p>2023 © alifshop.uz</p>
            <img src="https://yandex.ru/cycounter?https://alifshop.uz&theme=dark&lang=ru" alt="" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer