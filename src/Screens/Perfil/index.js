import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavPerfilDoUsuario from "../../Components/NavPerfilDoUsuario/";

function Perfil() {

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const showOrHide2 = () => setShowElement(false)

    const [flag, setFlag] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userInfo"))); //dados do usuario
    }, []);

    if (!user) {
        return (
            <p>carregando</p>
        )
    }

    return (
        <div>
            <NavPerfilDoUsuario />
            <Container style={{
                marginTop: 40,
                fontSize: 15,
                fontFamily: "serif"
            }}>
                <div style={{ marginLeft: '8%' }}>
                    <p className="Seja-Bem-vindo">
                        <strong> Olá, aqui é a sua conta :) </strong>
                    </p>

                    <p style={{
                        fontSize: 14,
                        marginTop: 30
                    }}><strong> Seja Bem vindo(a)</strong></p>
                </div>

                <Row style={{ display: 'flex', justifyContent: 'center' }}>

                    <Col md={4} style={{}}>
                        <h5 >Dados Cadastrais</h5>
                        <Button style={{
                            width: "100%",
                            marginTop: 5
                        }}
                            variant="outline-dark"
                            onClick={() => setFlag(!flag)}>Editar Formulario</Button>

                        <div>
                            <Button variant="outline-dark"
                                style={{ marginTop: 5 }}
                                onClick={showOrHide}>
                                Cartões
                            </Button>

                            <Button variant="outline-dark"
                                style={{
                                    color: 'red',
                                    marginTop: 5,
                                    marginLeft: 5,
                                }} onClick={showOrHide2}>
                                X
                            </Button>

                            {showElement ? <div>
                                <h5>Dados dos Cartões</h5>
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.nome} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.cpf} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.telefone} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.dataNascimento} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.cep} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.cidade} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.numeroCasa} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.logradouro} disabled={flag} />
                                <Form.Control style={{ marginTop: 5 }} placeholder={user?.estado} disabled={flag} />
                            </div> : null}
                        </div>
                    </Col>

                    <Col md={6} style={{}}>
                        <div>
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.nome} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.cpf} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.telefone} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.dataNascimento} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.cep} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.cidade} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.numeroCasa} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.logradouro} disabled={flag} />
                            <Form.Control style={{ marginTop: 5 }} placeholder={user?.estado} disabled={flag} />
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default Perfil;