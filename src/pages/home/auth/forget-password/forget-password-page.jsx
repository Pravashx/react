import { Container, Row, Col, Form } from "react-bootstrap"
import { Title, Divider } from "../../../../component/common/heading/heading.component"
import { ButtonComponent } from "../../../../component/common/button/button.component"
import { useState } from "react"
import { toast } from "react-toastify"

const ForgetPassword =()=>{
    const [data, setData]= useState()

    const handleChange = (e)=>{
        const {name, value}= e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        try{
            toast.success("An email with the instructinos has been sent to the registered user you provided.",{
                theme: "dark"
            })
        }catch(exception){
            //TODO
            toast.error("Sorry! Your request cannot be processed at this moment", {
                theme: "dark"
            })
        }
    }
    return(
        <>
        <Container className="login-wrapper ml-5 mt-5">
            <Row>
                <Col sm={12} md={{ offset: 3, span: 6 }} >
                    <Title className="text-center">Forget Password</Title>
                    <p className="text-center" style={{fontSize: "small"}}>
                        
                        <em>Please use the registered email for reset, You will recieve an email for the resetting of your password. Follow the instructions from the email</em>
                    </p>
                </Col> 
            </Row>
            <Divider />
            <Row className="my-3 pb-5">
                <Col sm={12} md={{ offset: 3, span: 6 }} >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3">Username:</Form.Label>
                            <Col sm={9}>
                                    <Form.Control
                                        type= "email"
                                        size="sm"
                                        onChange={handleChange}          
                                        required
                                        placeholder="Enter your Username"
                                    />
                                    <span className="text-danger">
                                            <em></em>
                                    </span>
                                </Col>                
                            </Form.Group>
                        
                        
                        <Form.Group className="row mb-3">
                            <Col sm={{offset: 3, span: 9}}>
                                    <ButtonComponent className="btn-danger me-3" type="reset"label="Cancel"></ButtonComponent>
                                    <ButtonComponent className="btn-success" type="submit"label="Submit"></ButtonComponent>
                                    
                                </Col>                
                            </Form.Group>
                    </Form>
                    <a href="/login">Login</a> &nbsp;&nbsp;&nbsp;Or &nbsp;&nbsp;&nbsp;&nbsp;<a href="/register">Create Account</a>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default ForgetPassword