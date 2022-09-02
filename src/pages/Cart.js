import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName2, increase, addCount } from './../store.js';

function Cart() { 
  let state = useSelector((state) => { return state })
  console.log(state)
    // redux를 가져오는 훅
  console.log(state.stock)
  console.log(state.cart[0].name)

  let dispatch = useDispatch()
  // useDispatch 란 store.js로부터 요청을 보내주는 함수
  return (
    <div>
      {state.user.name}의 장바구니 <br/>
      {state.user.name}의 나이는 {state.user.age}
      <button onClick={() => { 
        dispatch(increase(10))
      }}>+</button>
      {/* state가 array/object인경우 */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>num</th>
            <th>상품명</th>
            <th>재고</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a,i) => 
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={() => {
                    dispatch(addCount(state.cart[i].id))
                    // 정렬이 되어버리면 순서가 바뀌기 떄문에 버튼 옆에 있는 id를 불러낸다
                  }}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
    )
}

function Component() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } else {
    return null;
  }
} 

// 이런식으로 쓰면 else 생략가능
function Component2() {
  if ( true ) {
    return <p>참이면 보여줄 HTML</p>;
  } else {
    return null;
  }
} 


export default Cart;