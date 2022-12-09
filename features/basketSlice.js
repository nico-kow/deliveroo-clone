import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);

            if (index < 0) {
                return;
            }

            const newBasket = [...state.items];

            newBasket.splice(index, 1);

            state.items = newBasket;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectedBasketItems = (state) => state.basket.items;

export const selectedBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += parseFloat(item.price), 0).toFixed(2);

export default basketSlice.reducer