import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navigation.css";
import "./bankco-small.png"
import Logo from './bankco-small.png';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
      <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Nav.Link as={Link} activeclassname="active" eventKey="home" to="/">
            BankCo.
            </Nav.Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} activeclassname="active" eventKey="home" to="/">Home</Nav.Link>
            <Nav.Link as={Link} activeclassname="active" eventKey="createaccount" to="/createaccount/" title="Create your own account.">Create Account</Nav.Link>
            <Nav.Link as={Link} activeclassname="active" eventKey="login" to="/login/" title="Access to your account.">Login</Nav.Link>
            <Nav.Link as={Link} activeclassname="active" eventKey="deposit" to="/deposit/" title="Do you have some extra bucks?">Deposit</Nav.Link>
            <Nav.Link as={Link} activeclassname="active" eventKey="withdraw" to="/withdraw/" title="Do you need some bucks?">Withdraw</Nav.Link>
            <Nav.Link as={Link} activeclassname="active" eventKey="alldata" to="/alldata/" title="Check your account">All Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;