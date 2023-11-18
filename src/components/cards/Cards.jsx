import React, { useState } from 'react'
import './Cards.css'
import { FaCartPlus } from "react-icons/fa";

// import data from '../../static/bannerDataElektronik'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../redux/addToCart';
import { Add_To_Heart } from '../../redux/addToHeart';


function Cards({ productData, componentName }) {

    const dispatch = useDispatch()
    const heartData = useSelector(s => s.addToHeart).map(i => i.id)
    const cartData = useSelector(s => s.addToCart).map(i => i.id)

    // const heartData = localStorage.setItem("setProduct", product.id)

    // const [openHeart, setOpenHeart] = useState(false);

    // function openHeartSetLocalStorage() {
    //     setOpenHeart(false)
    // }

    // function lockHeartSetLocalStorage() {
    //     setOpenHeart(true)
    // }


    function addToCart(item) {
        dispatch(ADD_TO_CART({ pro: item }))
        // toast.success("You have successfully registered", {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 1500,
        //     hideProgressBar: true,
        // })
    }


    return (
        <div className='cards_main'>
            {
                productData?.map((product, index) =>
                    <div key={index} className="cards_main_item">
                        {/* {
                            openHeart ? <AiFillHeart onClick={openHeartSetLocalStorage} className='heart_products' /> : <AiOutlineHeart onClick={lockHeartSetLocalStorage} className='heart_products1' />
                        } */}
                        {
                            heartData.some(i => i === product.id) ?
                                <AiFillHeart className='heart_products' onClick={() => dispatch(Add_To_Heart({ pro: product }))} />
                                :
                                <AiOutlineHeart className='heart_products1' onClick={() => dispatch(Add_To_Heart({ pro: product }))} />
                        }


                        <Link to={`/product/${product.id}`} className="cards_main_item_top">
                            <img src={product.images[0]} alt="img" />
                        </Link>
                        <p>{product.description.length > 50 ? product.description.slice(0, 50) + "..." : product.title}</p>
                        <div className='price_box_24'> dan {Math.ceil(product.price / 24)} so'm/oyga</div>
                        <span>{product.price + " so'm"}</span>
                        <button onClick={() => addToCart(product)} className='cart_button'> <FaCartPlus />   Savatga</button>
                    </div>
                )
            }
        </div>
    )
}

export default Cards