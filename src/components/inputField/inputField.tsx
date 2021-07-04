import React from "react"
import { Form } from "react-bootstrap"


interface data {
    id: string
    placeholder: string
    type: string

}

const Login = (props: data) => {
    const {
        id,
        placeholder,
        type,

    } = props;
    return (
        <>
            <Form>
                <Form.Group id={id}>
                    <div className="email mt-3">
                        <Form.Control type={type} placeholder={placeholder} required></Form.Control>
                    </div>
                </Form.Group>
            </Form>
        </>
    )
}

export default Login
