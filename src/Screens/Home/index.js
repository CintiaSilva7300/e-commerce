import React from "react";
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



function Home() {
    return (
        <div>
            {/* inicio navbar */}
            <Navbar bg="dark" fixed="top">
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

            <Container style={{ marginTop: 100 }}>

                <Row>
                    <Col>
                        <Link to="/produto" style={{ textDecoration: "none", color: "#000" }}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                                <Card.Body>
                                    <Card.Title>Pão</Card.Title>
                                    <Card.Text>
                                        Pão frances com uma qualidade incrivel
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row style={{ marginTop: 30 }}>
                    <Col md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="http://conteudo.imguol.com.br/c/entretenimento/45/2020/10/19/pao-frances---dona-deola-1603113166267_v2_1920x1920.jpg" />
                            <Card.Body>
                                <Card.Title>Pão</Card.Title>
                                <Card.Text>
                                    Pão frances com uma qualidade incrivel
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>

        </div>
    )
}

export default Home;