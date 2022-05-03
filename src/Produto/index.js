import React from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg"
import NavbarConteiner from "../Components/NavbarConteiner";




function Home() {
    return (
        <div>
            <NavbarConteiner />

            <Container style={{ marginTop: 100 }}>
                <Row>
                    <h5 style={{ margin: "20" }}>
                        Seu produto está pronto para compra
                    </h5>
                    <Col style={{ textDecoration: "none", color: "#000" }}>
                        <Card style={{ width: '25rem' }}>
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

                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Home;