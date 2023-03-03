import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CartItemSlice from "./CartItemSlice";

const Store = configureStore({
    reducer: {cart: CartSlice, cartItem: CartItemSlice},
})

export default Store;