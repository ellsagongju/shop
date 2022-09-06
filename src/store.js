import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from "./store/userSlice.js"


export let { changeName2 , increase} = user.actions

let stock = createSlice({
  name: 'stock',
  initialState: [10,11,12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id : 2, name : "Gray Yordan", count : 1}
  ],
  reducers: {
    addCount(state, action) { 
      // 반복문을 써도 되고
      let 번호 = state.findIndex((a) => { return a.id === action.payload})
      // array에서 원하는거 몇번 째 있나 찾아주는 함수 findIndex는 너랑 너는 같은 거냐 확인하는 함수
      state[번호].count++
    },
    addItem(state,action) {
      state.push(action.payload)
     }
  }
})

export let { addCount, addItem} = cart.actions

export default configureStore({
  reducer: {
    // 작명 : 스테이트이름.reducer
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
})


let login = createSlice({
  name : "login"
})

