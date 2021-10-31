import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {

    const {user,LogOut} = useAuth();

    return (
        <div>
             <div>
            <Navbar fixed="top" bg="danger" variant="dark"  collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">CoxATour</Navbar.Brand>
            <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home"><span className="text-white">Home</span></Nav.Link>
              <Nav.Link as={Link} to="/home#services"><span className="text-white">Services</span></Nav.Link>
              <Nav.Link as={Link} to="/destination"><span className="text-white">Destination</span></Nav.Link>
              <Nav.Link as={Link} to="/bookinginfo"><span className="text-white">Booking Info</span></Nav.Link>
              <Nav.Link as={Link} to="/about"><span className="text-white">About</span></Nav.Link>

                <h5><span className="mx-1 text-dark">{user.displayName}</span></h5>
              {
               user?.email?
               <button onClick={LogOut}>log Out</button> 
               : 
                <Nav.Link as={Link} to="/Login"><span className="text-white">Login</span></Nav.Link>}
              </Navbar.Collapse>
              </Container>
  </Navbar>
  </div>
        </div>
    );
};

export default Header;