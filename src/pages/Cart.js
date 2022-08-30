import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName2 } from './../store.js';

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
      {state.user.name}의 장바구니
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
                    dispatch(changeName2())
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

export default Cart;