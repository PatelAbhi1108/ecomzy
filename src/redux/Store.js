import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice // here we write the name:slicename ( in this case we have mention the name of CartSlice as cart )
    }

});