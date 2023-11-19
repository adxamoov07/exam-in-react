import React, { useState } from 'react'
import './Cards.css'
import { FaCartPlus } from "react-icons/fa";

// import data from '../../static/bannerDataElektronik'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../redux/addToCart';
import { Add_To_Heart } from '../../redux/addToHeart';
import {TbShoppingBagPlus} from 'react-icons/tb'


function Cards({ productData, componentName }) {

    const dispatch = useDispatch()
    const heartData = useSelector(s => s.addToHeart).map(i => i.id)
    const cartData = useSelector(s => s.addToCart).map(i => i.id)

    

    function addToCart(item) {
        dispatch(ADD_TO_CART({ pro: item }))
      
    }


    return (
        <div className='cards_main'>
            {
                productData?.map((product, index) =>
                    <div key={index} className="cards_main_item">
                      
                        {
                            heartData.some(i => i === product.id) ?
                                <AiFillHeart className='heart_products' onClick={() => dispatch(Add_To_Heart({ pro: product }))} />
                                :
                                <AiOutlineHeart className='heart_products1' onClick={() => dispatch(Add_To_Heart({ pro: product }))} />
                        }


                        <Link to={`/single-page/${product.id}`} className="cards_main_item_top">
                            <img src={product.images[0]} alt="img" />
                        </Link>
                        <p>{product.description.length > 50 ? product.description.slice(0, 50) + "..." : product.title}</p>
                        <div className='price_box_24'> dan {Math.ceil(product.price / 24)} so'm/oyga</div>
                        <span>{product.price + " so'm"}</span>
                        {
                            cartData.some(i => i === product.id) ?
                                <div className='cart_button1'>
                                    <button className='cart_btn_minus' >
                                        -
                                    </button>
                                    <p>
                                        1
                                        {product.quantity}
                                    </p>



                                    <button className='cart_btn_pulus' onClick={() => dispatch(ADD_TO_CART({ pro: product }))} >
                                        +
                                    </button>
                                </div>
                                :
                                <button className='cart_button' onClick={() => addToCart(product)} >
                                    <FaCartPlus className='shopicon' />
                                    savatga
                                </button>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Cards