import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setShowCart(state){
            state.showCart = !state.showCart;
        },
    }
})

export default CartSlice.reducer;
export const CartActions = CartSlice.actions;