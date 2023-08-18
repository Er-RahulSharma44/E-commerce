// import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link }from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Form, Button } from 'react-bootstrap';
import { MyContext } from "../CONTEXT/Mycontext";



function NavScrollExample() {
  const { text ,sum,setText, filteredProducts} = useContext(MyContext); 
   
  
  return (
    <Navbar expand="lg" className="sticky-top bg-body-tertiary"  data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">Exclusive Sale </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             style = {{width:"auto"}}
              onChange={(e)=>setText(e.target.value.toLowerCase())}
            />
            
            <Button  onClick={()=> filteredProducts(text)} variant="outline-success">Search</Button>
          </Form> 
        </Nav>
        <div className="d-flex">
        <Link style = {{color: "white",border: "1px solid white", padding:"2px 10px 2px 10px",textDecoration:"none"}}  className='mx-1' to="/">Shop</Link>
          <Link style = {{border: "1px solid white", padding:"2px 10px 2px 10px",textDecoration:"none"}} className='mx-1' to="/cart">
              <ShoppingCart></ShoppingCart>Cart({sum})
          </Link>
          
          
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default NavScrollExample;