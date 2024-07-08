import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from'react-bootstrap/Container';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import '../styles/menu.css';
import Contact from '../contact/Contact';
import About from '../about/About';
import Home from '../home/Home'
import Button from 'react-bootstrap/Button';
import {Cart} from 'react-bootstrap-icons';
import ProductDescription from '../products/ProductDescription';
import UserCart from '../cart/Cart';
function Menu(){
    return (
                <BrowserRouter>
                    <Navbar expand="lg" className="menu_bg">
                    <Container>
                        <Navbar.Brand href="#home">E-com</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/' className="margin_left">Home</NavLink>
                            <NavLink to='/about' className="margin_left">About- Us</NavLink>
                            <NavLink to='/products' className="margin_left">Products</NavLink>
                            <NavLink to='/contact' className="margin_left">contacts</NavLink>
                            <Nav.Link to='/about' className="margin_left"> <Button variant="dark" className='button_align1'>Login</Button></Nav.Link>
                            <Nav.Link to='/about' className="margin_left"> <Button variant="dark">Register</Button></Nav.Link>
                            <NavLink to='/cart' className="margin_left"><Cart size={30}/></NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                    <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/products' element={<ProductDescription/>}/>
                            <Route path='/cart' element={<UserCart/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                            <Route path='/products?type=Half Tshirt' element={<ProductDescription/>}/>
                            <Route path='/products?type=Full Tshirt' element={<ProductDescription/>}/>
                            <Route path='/products?type=Polo' element={<ProductDescription/>}/>
                            <Route path='/products?type=Hoodie' element={<ProductDescription/>}/>    
                    </Routes>
                </BrowserRouter>    
      );
    
}

export default Menu;