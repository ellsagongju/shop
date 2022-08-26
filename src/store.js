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

export default configureStore({
  reducer: {
    // 작명 : 스테이트이름.reducer
    user: user.reducer,
    stock : stock.reducer
   }
}) 