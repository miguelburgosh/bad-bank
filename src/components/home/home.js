import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from './bankco.png';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function Home() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ Logo } width="200" height="auto" />
      <Card.Body>
        <Card.Title>Welcome to BankCo.</Card.Title>
        <Card.Text>
          We truly are the less secure bank ever but you can trust us... we are honest!
        </Card.Text>
        <Button variant="primary"><Nav.Link as={Link} activeclassname="active" eventKey="createaccount" to="/createaccount/" title="Create your own account.">Create Account</Nav.Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Home;