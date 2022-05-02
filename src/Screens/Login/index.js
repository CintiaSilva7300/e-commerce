import React, { useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import InputText from "../../Components/InputText";
import Img from './Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';


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
                            <img src={Img} width="170" height="50" />
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
                    <h1 className="d-flex justify-content-center mt-2"> Entrar</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Nunca compartilharemos seu e-mail com mais ninguém.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="senha" />
                    </Form.Group>
                    <Button onClick={() => {
                        login();
                    }} variant="dark">Submit</Button>

                    <div>
                        <Link to="/cadastro">
                            <Form.Text className=" text-muted">
                                Não é cadastrado?
                            </Form.Text>

                        </Link>
                    </div>



                </Form>
            </div>
        </>
    )
}

export default Login;

