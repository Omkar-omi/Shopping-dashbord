import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../contexts/AuthContext";

function ShopingNavbar() {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();
  const handelLogout = async () => {
    try {
      await logout()
      navigate("/userlogin")
      alert(`${user.displayName} has logged out`)
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="/Shoppinghome">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="/Shoppinghome">Home</Nav.Link>
            <Nav.Link href="/cart" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 " viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg> <Navbar.Text>Cart</Navbar.Text></Nav.Link>
            {!user && <Nav.Link href="/userlogin">Login</Nav.Link>}
            {<Navbar.Text className='border border-2 pe-3 ps-3 p-0 pt-1 border-dark rounded-pill'>{user.displayName}</Navbar.Text>}
            {user && <Button variant="danger" className="shrink" onClick={handelLogout}>Log Out</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShopingNavbar;