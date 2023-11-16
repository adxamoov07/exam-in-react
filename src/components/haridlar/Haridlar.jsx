import React from 'react'
import './Haridlar.css'

function Haridlar() {
  return (
    <div className='haridlar_main'>
      <div className="haridlar_main_left">
        <img src="https://alifshop.uz/images/no-result.png" alt="img" />
      </div>
      <div className="haridlar_main_right">
        <h4>Xarid qilingan tovarlar shu yerda paydo <br /> bo'ladi</h4>
        <p>Tovar bilan tanishib chiqish uchun katalogni <br /> oching yoki qidiruv bo'limidan foydalaning</p>
        <button>Katalogga o'tish</button>
      </div>
    </div>
  )
}

export default Haridlar