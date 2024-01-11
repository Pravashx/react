import React, { useEffect } from "react"
import { Container, Row, Col, Form, Spinner } from "react-bootstrap"
import { Title } from "../../../../component/common/heading/heading.component"
import { Divider } from "../../../../component/common/heading/heading.component"
import PasswordSetComponent from "../../../../component/home/auth/password-set-component"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import authSvc from "../auth.service"

const SetPasswordPage = () => {

    const params = useParams()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const verifyToken = async () => {
        try {
            const verified = await authSvc.getActivationTokenVerify(params.token)
            setLoading(false)

        } catch (exception) {
            console.log("exception", exception)
            toast.error(exception.message)
            navigate('/login')
        }
    }

    useEffect(() => {
        verifyToken()
    }, [params])

    const submitEvent = async(data) => {
        try{
            let response = await authSvc.activateUser(params.token,data)
            toast.success(response.message)
            navigate('/login')
        }catch(exception){
            toast.error(exception.message)
            navigate('/')
        }
    }

    return (
        <>
            <Container className="login-wrapper ml-5 mt-5">
                <Row>
                    <Col sm={12} md={{ offset: 3, span: 6 }} >
                        <Title className="text-center">Set Password Page</Title>
                    </Col>
                </Row>
                <Divider />
                <Row className="my-3 pb-5">
                    <Col sm={12} md={{ offset: 3, span: 6 }} >
                        {
                            (loading) ? <>
                                <h1 className="text-center">

                                    <Spinner variant="dark" />
                                </h1>
                            </> : <PasswordSetComponent submitEvent={submitEvent} />
                        }
    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SetPasswordPage