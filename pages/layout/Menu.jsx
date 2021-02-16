import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import './Menu.css'
  
const Menu = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" id="nav-desktop">Igreja em Nova Friburgo</NavbarBrand>
            <NavbarBrand href="/" id="nav-mobile">Igreja em NF</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/sobre/">Sobre</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

export default Menu