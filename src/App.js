import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/small_event4.jpg';

function App() {
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

      <div className='main_bg'></div>
      <div className='main_bg' style={{backgroundImage:'url('+ bg +')'}}></div>
    </div>
  )
}

export default App;