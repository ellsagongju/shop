import './css/reset.css';
import './css/App.css';
import { Navbar, Container, Nav, Row, Col, Pagination } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import bg from './img/small_event4.jpg';
import data from './data.js';
import Detail from './pages/detail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import List from './pages/List';
import axios from 'axios'
import React, { useState } from 'react'; 

function App() {

  let [shoes,setShoes] = useState(data)
  let navigate = useNavigate();
  // let login = useState(Login);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/List')}}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Login')}}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* 뒤로가기 앞으로 가기 네비게이션 */}
      <Pagination>
        <Pagination.Prev onClick={() => { navigate(-1)}}/>
        <Pagination.Next onClick={() => { navigate(1)}}/>
      </Pagination>


      <Routes>
        <Route path="/" element={
          <div>
            <div className='main_bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            <Row>
              {
                shoes.map(function (a, i) { 
                  return (
                    <Card navigate={navigate} shoes={shoes[i]} i={i}></Card>
                  )
                })
              }
            </Row>
            <button className='what' onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
                console.log(결과.data)
                console.log(shoes)

                let copy = [...shoes, ...결과.data];
                setShoes(copy);
                })
                .catch(()=>{
                  console.log('실패함')
                })
            }}>더보기</button>
          </div>
         }></Route>
         
        <Route path="/detail/:id" element={ 
          <Detail shoes={shoes}></Detail>
        }></Route>

        <Route path="/List" element={<List></List>}></Route>
        <Route path="/Login" element={ <Login></Login>}></Route>

        <Route path="/about" element={<div>어바웃페이지임</div>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>

        {/* 404 페이지 */}
        <Route path="*" element={<div>여긴 없는 페이지요</div>}></Route>

        {/* 페이지 안에 무언가를 넣고 싶을 때 이렇게 만들어도 되지만 */}
        {/* <Route path="/about/member" element={<About></About>}></Route>
        <Route path="/about/location" element={<About></About>}></Route> */}
        
        {/* 이게 바로 Nested Route */}
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버</div>}></Route>
          <Route path="location" element={<div>로케이션</div>}></Route>
        </Route>

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        
      </Routes>

      

    </div>
  )
}

function Card(props) { 
  return (
    <Col xs={12} md={4} onClick={() => { props.navigate('/detail/'+ (props.i+1) ) }}>
      <img  src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width='80%' alt="상품"></img>
      <h3>{props.shoes.title }</h3>
      <span>{props.shoes.content }</span>
      <p>{props.shoes.price }</p>
    </Col>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;