import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../slice/counterSlice'
import ProductReducer from "../product/ProductSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    product: ProductReducer,
  },
})
