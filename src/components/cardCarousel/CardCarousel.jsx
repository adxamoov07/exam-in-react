import React from 'react'
import { imageData } from '../../static/imgData'
import './CardCarousel.css'

function CardCarousel() {

    return (
        <div className='cardcarouel'>
            <div className="container3">
                {
                    imageData?.map((imageData1, index) =>
                        <div className='cardcarousel_item'>
                            <img key={index} src={imageData1.image} alt="" />
                            <p>{imageData1.text}</p>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default CardCarousel