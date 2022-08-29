import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  // 하나의 state 보관
  name: 'user',
  initialState: 'kim'
})

let stock = createSlice({
  name: 'stock',
  initialState: [10,11,12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    {id : 2, name : "Gray Yordan", count : 1}
  ]
})

export default configureStore({
  reducer: {
    // 작명 : 스테이트이름.reducer
    user: user.reducer,
    stock: stock.reducer,
    cart : cart.reducer
   }
}) 