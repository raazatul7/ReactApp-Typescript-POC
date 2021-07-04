import React from "react"
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    <Form>
                        <Form.Group id="name">
                            <div className="email mt-3">
                                <Form.Control type="text" placeholder="Name" required></Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group id="email">
                            <div className="mt-3">
                                <Form.Control type="email" placeholder="Email Address" required></Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group id="password">
                            <div className="mt-3">
                                <Form.Control type="password" placeholder="Password" required></Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group id="password">
                            <div className="mt-3">
                                <Form.Control type="password" placeholder="Password Confirmation" required></Form.Control>
                            </div>
                        </Form.Group>
                        <Button className="w-100 mt-3">Signup</Button>
                        <div className="w-100 text-center mt-3">Already have an account?
                        <Link className="text-decoration-none" to="/login"> Login</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

        </>
    )
}

export default Signup