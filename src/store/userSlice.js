import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  // 하나의 state 보관
  name: 'user',
  initialState: {name:'kim', age : 20},
  reducers: {
    // 함수1(){}
    // 위와같이 state를 변경해주는 함수를 만들어준다
    // changeName(state) { 
    //   return 'john kim'
    // },
    changeName2(state) { 
      return {name:'park', age : 20}
    },
    // 위와같이 array 자료로 변경하고 싶을 때 방법이다
    increase(state,a) { 
      state.age += a.payload
    }
    // changeName2(state) { 
    //   return state.name = 'park'
    // }
    // array자료나 object 자료는 이런식으로 담을 수도 있음
  }
})

export default user