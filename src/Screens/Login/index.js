import React, { useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();


    function login() {
        // logica para logar
        // apos o login chamar 
        navigate('/')
    }

    return (
        <>
            {/* inicio navbar */}
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" style={{ color: "#FFF", textDecoration: 'none' }}>
                            Home
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/login" style={{ color: "#FFF", textDecoration: 'none' }}>
                                Login / cadastrar
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* fim navbar */}

            <div className="d-flex justify-content-center mt-5">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button onClick={() => {
                        login();
                    }} variant="primary " type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Login;

