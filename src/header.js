import React from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/header.css';

const Header=()=>{
    const render=()=>{
        alert("Logesh")
        console.log("lll1")
    }
    return(
         <div>
                <Navbar bg="dark" expand="lg"  variant="dark" className='header'>
                    <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href='#New'>New Stories</Nav.Link>
                        <Nav.Link  href='#Top'>Top Stories</Nav.Link>
                        <Nav.Link href='#Best'>Best Stories</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <div className='News-category'>
                    <h1>New Stories</h1>
                </div>
        </div>

    )
}



export default Header;


