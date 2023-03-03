import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

const CartItemSlice = createSlice({
    name: "cart-item",
    initialState,
    reducers: {
        addToCart(state, action) {
           const existingIndex = state.items.findIndex((item) => {
            return item.title === action.payload.title;
           }) 
           if(existingIndex !== -1){
             state.items[existingIndex].quantity = state.items[existingIndex].quantity + 1
           }else{
             state.items.push(action.payload);
           }
        },
       
       removeItem(state, action) {
        const existingIndex = state.items.findIndex((item) => {
          return item.title === action.payload;
         })

         if(state.items[existingIndex].quantity > 1){
          state.items[existingIndex].quantity = state.items[existingIndex].quantity - 1;
         }else{
           const filteredItems = state.items.filter((item) => {
            return item.title !== action.payload;
           })
           state.items = [...filteredItems];
         }
       } 
    }

})

export const CartItemActions = CartItemSlice.actions;
export default CartItemSlice.reducer;

