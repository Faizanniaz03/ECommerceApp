import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './cartSlice'
import { GetApiCall } from './services/GetApiCall'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    cart:counterSlice,
    [GetApiCall.reducerPath] : GetApiCall.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetApiCall.middleware),
})
setupListeners(store.dispatch)