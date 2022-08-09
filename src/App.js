import './App.css';
import { Navbar, Container, Nav,Row,Col } from 'react-bootstrap';
import bg from './img/small_event4.jpg';
import 작명 from './data.js';

// 이미지를 쓸 때 public 폴더를 쓸 수 있다.
// build하게 되면 src는 압축이 되지만
// public은 압축되지 않기 때문에,
// '/'절대경로로 쓰면 된다.
function App() {

  // let [shoes] = useState()

  return (
    <div>
      {/* import 한거 출력 */}
      { 작명}
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
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='80%'></img>
          {/* public 폴더에서 이미지 가져올 때, 권장사항 */}
          {/* <img src={ process.env.PUBLIC_URL + '/img/logo192.png'} width='80%'></img> */}
          <h3>신발1</h3>
          <span>태그</span>
          <p>가격</p>
        </Col>
        <Col xs={12} md={4}>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width='80%'></img>
          <h3>신발2</h3>
          <span>태그</span>
          <p>가격</p>
        </Col>
        <Col xs={12} md={4}>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width='80%'></img>
          <h3>신발3</h3>
          <span>태그</span>
          <p>가격</p>
        </Col>
      </Row>
    </div>
  )
}

export default App;