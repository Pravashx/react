import { useState } from "react"
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap"
import {FaMicrochip, FaMobile} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const HomeHeader = () => {

    const [theme, setTheme] = useState('dark')
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg={theme} data-bs-theme={theme}>
                <Container>
                    <Navbar.Brand href="/">Prapy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink  to="/" className="nav-link">Home</NavLink>
                            <Nav.Link href="#link">Shop</Nav.Link>
                            
                            <NavDropdown title="Category" id="basic-nav-dropdown">

                                <NavLink to={"/category/electronics"} className={"dropdown-item"}>
                                <FaMicrochip/> Electronics
                                </NavLink>
                                <NavLink to={"/category/smart-phones"} className={"dropdown-item"}>
                                <FaMobile/> Smart Phones
                                </NavLink>

                               

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Form>
                                <Form.Control
                                    type="search"
                                    size="sm"
                                    placeholder="Enter your search keyword"
                                />
                            </Form>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#">Cart(0)</Nav.Link>
                            <Nav.Link href="#home">Pravash Thakuri</Nav.Link>
                            <Nav.Link href="#link">Logout</Nav.Link>
                            <NavLink to="/register" className="nav-link">SignUp</NavLink>
                            <NavLink to={'/login'} className="nav-link">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default HomeHeader