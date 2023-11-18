import React from 'react'
import './FooterBottom.css'

function FooterBottom() {
    return (
        <div className="footer_top_components">
            <div className="container6">
                <div className='footer_top_page'>
                    <img src="https://alifshop.uz/_ipx/_/images/illustrations/alifshop-app-uz.png" alt="img" />
                    <div className="footer_top_item">
                        <h2>Ajoyib takliflar har doim <br /> yoningizda</h2>
                        <p>alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</p>
                        <div className="footer_top_item_brend">
                            <img src="https://alifshop.uz/images/play-market-icon.svg" alt="img" />
                            <img src="https://alifshop.uz/images/app-store-icon.svg" alt="img" />
                            <img src="https://alifshop.uz/images/app-gallery-icon.svg" alt="img" />
                        </div>
                        <button className='footer_top_item_brend_button'>ilovani o'chish</button>

                    </div>
                    <div className="footer_top_location">
                        <img src="https://alifshop.uz/_ipx/f_webp&s_208x208/images/alifshop-qr-code.webp" alt="img" />
                        <p>Yuklab olish uchun <br /> kamerangizni QR kodga <br /> qarating</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FooterBottom