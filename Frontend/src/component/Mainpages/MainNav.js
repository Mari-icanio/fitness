import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const MainNav = () => {

    const login=useNavigate();
    const signup=useNavigate();

    const brand={
        border:"1px solid white",
        padding: "10px",
    }

  return (
    <div>

        <Navbar expand="lg" variant={'dark'} bg="primary" className="py-3">
      <Container fluid><Navbar.Brand href="#" id="brand"><FontAwesomeIcon icon={faDumbbell} className='text-white me-2' style={{fontSize:"23px"}} /><span className="px-1" style={{color:'white',backgroundColor:'black',fontWeight:'bold',letterSpacing:'3px'}}>MY</span><span className='px-2' style={{fontWeight:'bold',background:'white',color:'black',letterSpacing:'3px'}}>FITNESS</span></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><strong className='text-white'>Home</strong></Nav.Link>
            <Nav.Link href="/"><strong className='text-white'>About Us</strong></Nav.Link>
            <Nav.Link href="/"><strong className='text-white'>Features</strong></Nav.Link>
            <Nav.Link href="/"><strong className='text-white'>Contact Us</strong></Nav.Link>
            
            
          </Nav>
          <Button variant="outline-light" onClick={()=>login('/login')}><strong>LOG IN</strong></Button>{' '}
          <Button variant="light" className='ms-3' onClick={()=>signup('/signup')}> <strong>SIGN UP</strong></Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MainNav
