import { Navbar, Container, NavDropdown, Nav , Form, Row, Col} from "react-bootstrap"
import "./home.page.css"
import { useState } from "react"
import HomeHeader from "../header/home-header-component"

const HomePage = () => {
    const [theme, setTheme] = useState('dark')

    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={12}></Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage