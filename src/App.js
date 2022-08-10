import React, { useState } from 'react'; 
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/small_event4.jpg';
import shose from './data.js';

function App() {

  let [shoes] = useState(shose)
  console.log(shoes[0].title)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <div className='main_bg'></div> */}
      <div className='main_bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
      
      <Row>
        <Col xs={12} md={4}>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='80%' alt="상품"></img>
          {/* public 폴더에서 이미지 가져올 때, 권장사항 */}
          {/* <img src={ process.env.PUBLIC_URL + '/img/logo192.png'} width='80%'></img> */}
          <h3>{shoes[0].title }</h3>
          <span>{shoes[0].content }</span>
          <p>{shoes[0].price }</p>
        </Col>
        <Col xs={12} md={4}>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width='80%' alt="상품"></img>
          <h3>{shoes[1].title }</h3>
          <span>{shoes[1].content }</span>
          <p>{shoes[1].price }</p>
        </Col>
        <Col xs={12} md={4}>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width='80%' alt="상품"></img>
          <h3>{shoes[1].title }</h3>
          <span>{shoes[1].content }</span>
          <p>{shoes[1].price }</p>
        </Col>
      </Row>
    </div>
  )
}

export default App;