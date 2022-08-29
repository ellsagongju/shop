import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  // 하나의 state 보관
  name: 'user',
  initialState: 'kim',
  reducers: {
    // 함수1(){}
    // 위와같이 state를 변경해주는 함수를 만들어준다
    changeName(state) { 
      return 'john kim'
    },
    changeName2(state) { 
      return 'john' + state
    }
  }
})

export let { changeName2 } = user.actions

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