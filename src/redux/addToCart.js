import { createSlice } from '@reduxjs/toolkit';

export const addToCart = createSlice({
    name: 'addToCart',
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    reducers: {
        ADD_TO_CART: (state, action) => {
            const { id } = action.payload.pro;
            const existingProduct = state.find(item => item.id === id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...action.payload.pro, quantity: 1 });
            }
        },
    },
});

export const { ADD_TO_CART } = addToCart.actions;
export default addToCart.reducer;