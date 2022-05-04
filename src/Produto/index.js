import React from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg"
import NavbarConteiner from "../Components/NavbarConteiner";




function Home() {
    return (
        <div>
            <NavbarConteiner />

            <Container style={{ marginTop: 60 }}>
                <Row md={3}>
                    <Col style={{ textDecoration: "none", color: "#000" }}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top"
                                src="https://http2.mlstatic.com/D_NQ_NP_804287-MLA49587128302_042022-F.webp" />
                            <Card.Body>
                                <Card.Title>
                                    Disco sólido interno Kingston  preto</Card.Title>
                                <Card.Text>
                                    Com tecnologia 3D NAND.
                                    É útil para salvar programas e documentos
                                    com a sua capacidade de 240 GB.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card style={{ height: '100%', width: '100%' }}>
                            <Card.Body>
                                {/* <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link> */}
                                <Card style={{ height: '100%', width: '100%' }}><p style={{ margin: 10 }}
                                >
                                    Conteudo ConteudoConteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo  Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
                                    Conteudo ConteudoConteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
                                    Conteudo ConteudoConteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
                                </p>

                                </Card>
                                <Link to="/produto">
                                    <Button variant="dark">Garantir agora</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col md={4}>
                        <Card style={{ height: '100%', width: '100%' }}>
                            <Card.Body>
                                <Card style={{ height: '100%', width: '100%' }}><p style={{ margin: 10 }}
                                >
                                    Conteudo ConteudoConteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo  Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
                                    Conteudo ConteudoConteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
                                    Conteudo ConteudoConteudo Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo
                                </p></Card>

                                <Link to="/produto">
                                    <Button variant="dark">Garanta o seu agora!</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col> */}

                    <Col md={12}>
                        <Card style={{ marginTop: 20 }}>
                            <Card.Body>
                                <p>alguma coisa aqui
                                    alguma coisa aqui
                                    alguma coisa aqui
                                    alguma coisa aqui
                                    alguma coisa aqui
                                    alguma coisa aqui
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Home;