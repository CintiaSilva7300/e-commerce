import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Navbar, Button, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Img from '../../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';


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
        navigate("/admin/login")
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
                        <img src={Img} width="170" height="50" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/admin/login" style={{ color: "#FFF", textDecoration: 'none' }}>
                                Login
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* fim nav bar */}

            <Container>
                <h1 style={{ textAlign: 'center', marginTop: 30 }}> Cadastro Funcionário</h1>
                <Row className="d-flex justify-content-center">
                    <Col md={4} style={{ paddingTop: 10, marginTop: 5 }}>
                        <Form.Group >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" AtualizarValor={setCidade} placeholder="Nome" />
                        </Form.Group>
                    </Col>

                    <Col md={4} style={{ paddingTop: 10, marginTop: 5 }}>
                        <Form.Group >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" AtualizarValor={setLogradouro} placeholder="senha" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control type="text" AtualizarValor={setCep} placeholder="sobrenome" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group >
                            <Form.Label>Confirmar senha</Form.Label>
                            <Form.Control type="password" AtualizarValor={setNumeroCasa} placeholder="confirmar senha" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row >
                    <Col md={{ span: 4, offset: 2 }}>
                        <Form.Group >
                            <Form.Label>Função</Form.Label>
                            <Form.Control type="text" AtualizarValor={setEstado} placeholder="função" />
                        </Form.Group>
                    </Col>

                    <Col className="mt-3" md={{ span: 4 }}>
                        <p></p>
                        <Button onClick={() => { login(); }} variant="outline-dark">Enviar acesso </Button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Cadastro;
