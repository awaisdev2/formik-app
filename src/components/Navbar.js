import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(props) {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
          <Container fluid>
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">{props.link1}</Nav.Link>
                <Nav.Link href="#link">{props.link2}</Nav.Link>
                <NavDropdown menuVariant='dark' title="Find us" id="basic-nav-dropdown">
                  <NavDropdown.Item target='_blank' href="https://google.com">Google</NavDropdown.Item>
                  <NavDropdown.Item target='_blank' href="https://youtube.com/@naatspoint1">
                   Youtube
                  </NavDropdown.Item>
                  <NavDropdown.Item target='_blank' href="https://stackoverflow.com">Stack overflow</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}
