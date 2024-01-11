import { Col, Container, Form, FormControl, FormGroup, Row, Image } from "react-bootstrap"
import "./index.css"
import styled from "styled-components"
import { ButtonComponent } from "../../../../component/common/button/button.component"
import { Title } from "../../../../component/common/heading/heading.component"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useState } from "react"
import placeholder from "../../../../assets/image/placeholder.webp"

import Select from 'react-select'
import axios from "axios"
import { toast } from "react-toastify"
import axiosInstance from "../../../../repository/axios.config"
import authSvc from "../auth.service"
import { useNavigate } from "react-router-dom"

const options = [
    { value: 'seller', label: 'Seller' }, //value = backend lie (case sensitive) // label = for frontend to see 
    { value: 'customer', label: 'Buyer' }
]

const RegisterTitle = styled.h1`
    color: #000000
`
const Divider = styled.hr`
color: #000000
`


const RegisterPage = () => {
    const [thumb, setThumb] = useState()
    const [loading, setLoading]= useState(false)
    const navigate = useNavigate()

    const registerSchema = Yup.object({
        name: Yup.string().min(2).max(30).required(),
        email: Yup.string().email().required(),
        role: Yup.object({
            value: Yup.string().matches(/customer|seller/),
            label: Yup.string().matches(/Buyer|Seller/)
        })
    })
    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })


    const registerSubmit = async (data) => {
        try {
            setLoading(true)
            data.role = data.role.value

            const response = await authSvc.registerProcess(data)
            toast.success(response.msg)
            
            navigate("/")
        } catch (exception) {
            console.log(exception)
            toast.error(exception.msg)


            // exception.response.data.result.map((obj) => {
            //     const keys = Object.keys(obj)
            //     const msg = obj[keys[0]]
            //     setError('email', [msg])
            //     setError(keys[o], obj[keys[0]])
            // })
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <>
            <Container className="login-wrapper ml-5 mt-5">
                <Row>
                    <Col sm={12} md={{ offset: 2, span: 8 }} >
                        <Title className="text-center">Register Page</Title>
                    </Col>
                </Row>
                <Divider />
                <Row className="my-3 pb-5">
                    <Col sm={12} md={{ offset: 3, span: 6 }} >
                        <Form onSubmit={handleSubmit(registerSubmit)}>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Full Name:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="name"
                                        size="sm"
                                        {...register("name", { required: true, disabled: loading })}
                                        placeholder="Enter your Name"
                                    />
                                    <span className="text-danger">
                                        <em>{errors?.name?.message}</em>
                                    </span>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Email:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="email"
                                        size="sm"
                                        {...register("email", { required: true, disabled: loading})}
                                        placeholder="Enter your email"
                                    />
                                    <span className="text-danger">
                                        <em>{errors?.email?.message}</em>
                                    </span>
                                </Col>
                            </Form.Group>

                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Role:</Form.Label>
                                <Col sm={9}>
                                    <Select
                                    isDisabled={loading}
                                        options={options}
                                        onChange={(selectedopt) => {
                                            setValue("role", selectedopt)
                                        }}
                                    />

                                    <span className="text-danger">
                                        <em>{errors?.role?.message}</em>
                                    </span>
                                </Col>
                            </Form.Group>

                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3">Image:</Form.Label>
                                <Col sm={7}>
                                    <Form.Control
                                        type="file"
                                        size="sm"
                                        disabled={loading}
                                        multiple
                                        onChange={(e) => {
                                            const image = e.target.files[0]
                                            const ext = (image.name.split(".")).pop()
                                            if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'webp'].includes(ext.toLowerCase())) {
                                                if (image.size <= 3000000) {
                                                    setThumb(image)
                                                    setValue("image", image)
                                                } else {
                                                    setError("image", "File should be less than 3mb")
                                                }
                                            } else {
                                                setError("image", "File format not supported")
                                            }
                                        }}
                                    />
                                    <span className="text-danger">
                                        <em>{errors?.image?.message4}</em>
                                    </span>
                                </Col>
                                <Col sm={2}>
                                    <Image src={thumb ? URL.createObjectURL(thumb) : placeholder} fluid alt="" />
                                </Col>


                            </Form.Group>

                            <Form.Group className="row mb-3">
                                <Col sm={{ offset: 3, span: 9 }}>
                                    Or &nbsp; &nbsp; &nbsp; &nbsp;
                                    <a href="/forget-password">
                                        Forget Password?
                                    </a>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Col sm={{ offset: 3, span: 9 }}>
                                    <ButtonComponent loading={loading} className="btn-danger me-3" type="reset" label="Cancel"></ButtonComponent>
                                    <ButtonComponent loading={loading} className="btn-success" type="login" label="Submit"></ButtonComponent>

                                </Col>
                            </Form.Group>
                        </Form>
                        Or &nbsp;&nbsp;&nbsp;&nbsp;<a href="/register">Create Account</a>
                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default RegisterPage