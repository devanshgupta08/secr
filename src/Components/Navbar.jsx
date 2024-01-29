import Container from 'react-bootstrap/Container';
import logo from "../../public/logo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style/navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="">
      <Container >
        <Navbar.Brand active href="#home" className='d-lg-none'>
        <span className='me-2'>
          <img
            src={logo}
            className="img-fluid"
            style={{ height: "6vh" }}
            alt="Logo"
          />
        </span>
        <span className='d-none d-sm-inline-block'>South East Central Railway</span>
        <span className='d-inline-block d-sm-none'>SECR</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-center">
        <div><Nav.Link active href="#home" className="nav-margin">Home</Nav.Link></div>
        <div><Nav.Link active href="#link" className="nav-margin">Link</Nav.Link></div>
        <div><Nav.Link active href="#link" className="nav-margin">Link</Nav.Link></div>
        <div><Nav.Link active href="#link" className="nav-margin">Link</Nav.Link></div>
        <div><Nav.Link active href="#link" className="nav-margin">Link</Nav.Link></div>
        <div><Nav.Link active href="#link" className="nav-margin">Link</Nav.Link></div>
        <div>
            <NavDropdown active  title="Dropdown" id="basic-nav-dropdown" className="nav-margin">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;