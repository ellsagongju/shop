import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  // 하나의 state 보관
  name: 'user',
  initialState: 'kim'
})

export default configureStore({
  reducer: {
    user: user.reducer
    // 작명 : 스테이트이름.reducer
   }
}) 