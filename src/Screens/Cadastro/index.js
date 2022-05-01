import React from "react";
import { Container, Form, Navbar, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <div>
            {/* inicio nav bar */}
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
            {/* fim nav bar */}

            <Container style={{ marginTop: 20 }}>
                <Row className="d-flex justify-content-center">
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Label style={{ fontWeight: "bold", fontSize: 25 }}>Dados pessoais</Form.Label>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="nome" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="cpf" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="telefone" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Data de Nacimento</Form.Label>
                            <Form.Control type="text" placeholder="Data de Nacimento" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Label style={{ fontWeight: "bold", fontSize: 25 }}>Dados de Endereço</Form.Label>
                    </Col>
                </Row>
                {/* -------------------------Endereço------------------------------- */}
                <Row className="d-flex justify-content-center">
                    <Col md={4} style={{ borderTop: "2px solid", paddingTop: 10 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="cidade" />
                        </Form.Group>
                    </Col>

                    <Col md={4} style={{ borderTop: "2px solid", paddingTop: 10 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" placeholder="logradouro" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Cep</Form.Label>
                            <Form.Control type="text" placeholder="cep" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Numero da casa</Form.Label>
                            <Form.Control type="text" placeholder="numero da casa" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        </Form.Group>
                    </Col>
                </Row>

                <Row >
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="estado" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={{ span: 1 }}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cadastro;