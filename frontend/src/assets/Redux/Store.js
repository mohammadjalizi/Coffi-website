import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './ProductApi'
import cartReducer from './ProductSlice'


export const store = configureStore({
  reducer: {
    //  "carttt" ======>  useSelector
    carttt: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)
