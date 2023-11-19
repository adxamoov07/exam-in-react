import React from 'react'
import { ADD_TO_CART } from '../../redux/addToCart'
import { ADD_TO_CART1 } from '../../redux/addToCart'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Add_To_Heart } from '../../redux/addToHeart';
import './CartCards.css'


function CartCards({ productData, componentName }) {
    const dispatch = useDispatch()
    const cartData = useSelector(s => s.addToCart).map(i => i.id)
    const heartData = useSelector(s => s.addToHeart).map(i => i.id)

    function addToCart(item) {
        dispatch(ADD_TO_CART({ pro: item }))
    }

    return (
        <div className='cards_main'>
            <div className="cart_cards_item">
                <div className="cart_cards_item_main_cart">

                    {
                        productData?.map((product, index) =>

                            <div key={index} className="cart_cards_item_box">
                                <div className="cart_cards_item_box_left">
                                    <img src={product.images[0]} alt="" />

                                    {
                                        heartData.some(i => i === product.id) ?
                                            <AiFillHeart className='cart_heart_products' onClick={() => dispatch(Add_To_Heart({ pro: product }))} />
                                            :
                                            <AiOutlineHeart className='cart_heart_products1' onClick={() => dispatch(Add_To_Heart({ pro: product }))} />
                                    }

                                </div>
                                <div className="cart_cards_item_box_right">
                                    <p>{product.description}</p>
                                    <span>narx: <span>{product.price * product.quantity}</span></span>
                                    <span>sotuvchi: alifshop</span>
                                    {
                                        cartData.some(i => i === product.id) ?
                                            <div className='cart_button1_cart'>
                                                <button className='cart_btn_minus' onClick={() => dispatch(ADD_TO_CART1({ pro1: product }))}>
                                                    -
                                                </button>
                                                <p>
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
                            </div>

                        )
                    }
                </div>


                <div className="cart_cards_main_job">
                    <div className="cart_cards_main_job_top">
                        <div className="cart_cards_main_job_top_right">
                            <h3>sizning maxsulotlaringiz</h3>
                            {
                                productData?.map((product, index) =>
                                    <p className='product_buy_do' key={index}> {product.quantity} dona  <span> narxi: {product.price * product.quantity}</span> <button>Buy</button> </p>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartCards