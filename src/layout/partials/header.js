import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

export const Header = () => {
  const navigate = useNavigate();
  const logMeOut = () => {
    navigate('/login');
  };
  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
        <Navbar.Brand>
          <img src={logo} alt='logo' width='50px' className='ms-3' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' >
          <Nav className='ms-3'>
            <LinkContainer to='/dashboard'>
              <Nav.Link >Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/tickets'>
              <Nav.Link >Tickets</Nav.Link>
            </LinkContainer>       
            <Nav.Link onClick={logMeOut}>Log Out</Nav.Link>
            {/* <Link to='/dashboard'>Dashboard</Link>
            <Link to='/tickets'>Tickets</Link>
            <Link to='/login'>Log Out</Link> */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};