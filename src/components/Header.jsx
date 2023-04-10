import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DvrIcon from '@mui/icons-material/Dvr';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
    
    return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="/" className="brand-name"> <DvrIcon />  C.Y.B.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto container-fluid d-flex justify-content-end">
            <Nav.Link href="/"  className= "navbar-item" >Home</Nav.Link>
            <Nav.Link href="/About" className= "navbar-item" >About</Nav.Link>
            <Nav.Link href="/Contact" className= "navbar-item" >Contact</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown" className= "navbar-item" align="end">
              <NavDropdown.Item href="https://cinderyb.github.io/React-To-Do-List/">To-do-list with React</NavDropdown.Item>
              <NavDropdown.Item href="https://cinderyb.github.io/React-Weather-App/">React Weather App</NavDropdown.Item>
              <NavDropdown.Item href="https://cinderyb.github.io/Simon-Game/">Simon Game</NavDropdown.Item>
              <NavDropdown.Item href="https://cinderyb.github.io/Growfoods-Meat-Products/">Growfoods e-commerce site</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://drive.google.com/file/d/1Mr5cB0XeA3jSfsKSYmHZVTT_9HVxkhu_/view?usp=share_link">
                My Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;


