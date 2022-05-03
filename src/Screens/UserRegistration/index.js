import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Navbar, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Img from '../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';


function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cidade, setCidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [estado, setEstado] = useState("");

    const navigate = useNavigate();

    function cadastro() {
        const userRegistration = {
            email: email,
            senha: senha,
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            dataNascimento: dataNascimento,
            cidade: cidade,
            logradouro: logradouro,
            numeroCasa: numeroCasa,
            estado: estado
        }
        console.log(userRegistration);


        axios
            .post("######", userRegistration)
            .then(() => {
                navigate("/");
            });
    }

    function login() {
        navigate("/login")
    }

    useEffect(() => {
        console.log(cep.length);
        if (cep.length === 8) {
            axios
                .get("https://viacep.com.br/ws/" + cep + "/json/")
                .then((response) => {
                    console.log(response);
                    setCidade(response.data.cidade);
                    setLogradouro(response.data.logradouro);
                    setCep(response.data.cep);
                    setEstado(response.data.estado);
                });
        }
    }, [cep]);

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
                            <Form.Label> E-mail</Form.Label>
                            <Form.Control type="email" AtualizarValor={setEmail} placeholder="e-mail" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label> Senha</Form.Label>
                            <Form.Control type="password" AtualizarValor={setSenha} placeholder="Senha" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" AtualizarValor={setNome} placeholder="nome" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" AtualizarValor={setCpf} placeholder="cpf" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" AtualizarValor={setTelefone} placeholder="telefone" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Data de Nacimento</Form.Label>
                            <Form.Control type="date" AtualizarValor={setDataNascimento} placeholder="Data de Nacimento" />
                        </Form.Group>
                    </Col>
                </Row>

                {/* -------------------------Endereço------------------------------- */}
                <Row className="d-flex justify-content-center">
                    <Col md={4} style={{ paddingTop: 10, marginTop: 5 }}>
                        <Form.Group >
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" AtualizarValor={setCidade} placeholder="cidade" />
                        </Form.Group>
                    </Col>

                    <Col md={4} style={{ paddingTop: 10, marginTop: 5 }}>
                        <Form.Group >
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" AtualizarValor={setLogradouro} placeholder="logradouro" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Cep</Form.Label>
                            <Form.Control type="text" AtualizarValor={setCep} placeholder="cep" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Numero da casa</Form.Label>
                            <Form.Control type="text" AtualizarValor={setNumeroCasa} placeholder="numero da casa" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row >
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Group >
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" AtualizarValor={setEstado} placeholder="estado" />
                        </Form.Group>
                    </Col>

                    <Col className="mt-3" md={{ span: 4 }}>
                        <p></p>
                        <Button onClick={() => { login(); }} variant="dark">Cadastrar-se </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cadastro;