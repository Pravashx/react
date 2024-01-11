import { Container, NavLink, Row, Col } from "react-bootstrap";
import HomeHeader from "../home/header/home-header-component";

export const Error404 = () => {
    return (
        <>
            <Container className="my-5" style={{ background: "#ff000020" }}>
                <Row>
                    <Col sm={12} className="text-center p-3">
                        <p className="text-danger">Oops! Your requested page does not exists</p>
                        <p className="text-danger">Redirect
                            &nbsp;&nbsp;
                            <NavLink to={"/"} className="text-decoration-none" style={{color: "blue"}}>Back to Home</NavLink>

                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Error404