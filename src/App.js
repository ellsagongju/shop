import React, { useState } from 'react'; 
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/small_event4.jpg';
import shose from './data.js';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './pages/detail';

function App() {

  let [shoes] = useState(shose)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">home</Link>
            <Link to="/detail">detail</Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <div>
            <div className='main_bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            <Row>
              {
                shose.map(function (a, i) { 
                  return (
                    <Card shoes={shoes[i]} i={i}></Card>
                  )
                })
              }
            </Row>
          </div>
         }></Route>
        <Route path="/detail" element={ 
          <Detail></Detail>
        }></Route>
        <Route path="/about" element={ <div>어바웃페이지임</div>}></Route>
      </Routes>

      

    </div>
  )
}

function Card(props) { 
  return (
    <Col xs={12} md={4}>
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width='80%' alt="상품"></img>
      <h3>{props.shoes.title }</h3>
      <span>{props.shoes.content }</span>
      <p>{props.shoes.price }</p>
    </Col>
  )
}

export default App;