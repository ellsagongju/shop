import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() { 
  let state = useSelector((state) => { return state })
  console.log(state)
    // redux를 가져오는 훅
  console.log(state.stock)
  console.log(state.cart[0].name)
  return (
    <div>
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
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
    )
}

export default Cart;