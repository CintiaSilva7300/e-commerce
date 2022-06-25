import { Avatar, Card } from "material-ui";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NavPerfilDoUsuario from "../../Components/NavPerfilDoUsuario/";

function Perfil() {
    return (
        <div>
            <NavPerfilDoUsuario />
            <Container style={{
                marginTop: 40,
                fontSize: 15,
                fontFamily: "serif"
            }}>

                <div>
                    <p className="Seja-Bem-vindo">
                        <strong>
                            Olá, aqui é a sua conta :)
                        </strong>
                    </p>
                    <p style={{
                        fontSize: 14,
                        marginLeft: '2%',
                        marginTop: 30
                    }}>
                        <strong>
                            Seja Bem vindo(a)
                        </strong>
                    </p>
                    <h1
                        style={{ backgroundColor: 'red' }}>seilaaaa
                    </h1>
                </div>

                <Row>
                    <Col>
                        <Form.Control style={{
                            width: '30rem',
                            textAlign: 'center',
                            marginLeft: "29%"
                        }}
                            type="text"
                            placeholder="textinput"
                            aria-label="Disabled input example"
                            readOnly
                        />
                    </Col>
                </Row>


            </Container>
        </div>

    )
}

export default Perfil;