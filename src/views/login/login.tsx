import React from "react"
import { Card, Button } from "react-bootstrap"
import InputField from "../../components/inputField/inputField"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <InputField type="text" placeholder="email" id="email" />
                <InputField type="password" placeholder="password" id="password" />
                <Button className="w-100 mt-3">Login</Button>
                <div>Need an account?
                    <Link className="text-decoration-none" to="/">
                        Signup
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Login