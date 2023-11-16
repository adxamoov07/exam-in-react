import React from 'react'
import './Sharhlar.css'
import { BsPencilSquare } from "react-icons/bs";

function Sharhlar() {
  return (
    <div className='sharhlarMain'>
      <div className="sharhlarMain_item">
        <div className="sharhlarMain_item_svg">
          <BsPencilSquare />
        </div>
        <h4>Sizda xozircha sharh yo'q</h4>
      </div>
    </div>
  )
}

export default Sharhlar