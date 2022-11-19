
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import productReducer from "./productSlice";
const store = configureStore({
    reducer: {
        cards: cardReducer,
        products: productReducer,


    }
})


export default store;