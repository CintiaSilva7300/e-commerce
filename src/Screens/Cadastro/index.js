import React from "react";
import { Container, Form, Navbar, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Img from '../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';


function Cadastro() {

    const navigate = useNavigate()
    function telaHome() {
        navigate('/')
    }

    return (
        <div>
            {/* inicio nav bar */}
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
            {/* fim nav bar */}

            <Container style={{ marginTop: 20 }}>
                <Row className="d-flex justify-content-center">
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Label style={{ fontWeight: "bold", fontSize: 25 }}>Dados pessoais</Form.Label>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center ">
                    <Col md={4}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="e-mail" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="nome" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="cpf" />
                        </Form.Group>
                        <Form.Group >
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="telefone" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Data de Nacimento</Form.Label>
                            <Form.Control type="date" placeholder="Data de Nacimento" />
                        </Form.Group>
                        <Form.Group >
                        </Form.Group>
                    </Col>
                </Row>

                {/* <Row className="d-flex justify-content-center">
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Label style={{ fontWeight: "bold", fontSize: 25 }}>Dados de Endereço</Form.Label>
                    </Col>
                </Row> */}
                {/* -------------------------Endereço------------------------------- */}
                <Row className="d-flex justify-content-center">
                    <Col md={4} style={{ paddingTop: 10, marginTop: 5 }}>
                        <Form.Group >
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="cidade" />
                        </Form.Group>
                    </Col>

                    <Col md={4} style={{ paddingTop: 10, marginTop: 5 }}>
                        <Form.Group >
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" placeholder="logradouro" />
                        </Form.Group>
                        <Form.Group >
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Cep</Form.Label>
                            <Form.Control type="text" placeholder="cep" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Numero da casa</Form.Label>
                            <Form.Control type="text" placeholder="numero da casa" />
                        </Form.Group>
                        <Form.Group >
                        </Form.Group>
                    </Col>
                </Row>

                <Row >
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Group >
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="estado" />
                        </Form.Group>
                    </Col>

                    <Col className="mt-3" md={{ span: 4 }}>
                        <p></p>
                        <Button onClick={() => {
                            telaHome();
                        }}
                            style={{ width: "100%" }}
                            variant="dark">
                            Submit
                        </Button>
                    </Col>
                </Row>




            </Container>
        </div>
    )
}

export default Cadastro;