import { configureStore } from '@reduxjs/toolkit'
import addToCart from './addToCart'
import katalog from './katalog'
import addToHeart from './addToHeart'

export const store = configureStore({
    reducer: {
        addToCart,
        katalog,
        addToHeart
    }
})
