import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    notification: null
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setShowCart(state){
            state.showCart = !state.showCart;
        },

        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        }
    }
})

export default CartSlice.reducer;
export const CartActions = CartSlice.actions;