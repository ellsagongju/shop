import React, { useState } from 'react'; 
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/small_event4.jpg';
import shose from './data.js';

function App() {

  let [shoes] = useState(shose)
  let [img, setimg] = useState(['https://codingapple1.github.io/shop/shoes1.jpg','https://codingapple1.github.io/shop/shoes2.jpg','https://codingapple1.github.io/shop/shoes3.jpg'])

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
        {
          shose.map(function (a, i) { 
            return (
              <Col xs={12} md={4}>
              <img src={img[i]} width='80%' alt="상품"></img>
              <h3>{shoes[i].title }</h3>
              <span>{shoes[i].content }</span>
              <p>{shoes[i].price }</p>
            </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default App;