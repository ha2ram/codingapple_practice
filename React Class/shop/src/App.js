import logo from './logo.svg';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="background">
        <h1>20% Season Off</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius,
          dignissimos, rerum, quas voluptatum expedita culpa blanditiis deleniti
          voluptates illum praesentium. Molestias accusantium eius odit culpa
          voluptates nesciunt sapiente adipisci.
        </p>
        <Button variant="primary">Learn more</Button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="shoes1"
              width="100%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="shoes2"
              width="100%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="shoes3"
              width="100%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
