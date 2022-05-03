import React from "react";
import { Card, Col, Container, Navbar, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from '../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';
import NavbarConteiner from "../../Components/NavbarConteiner";
// import InputText from "../../Components/InputText";



function Home() {
    return (
        <div>
            <NavbarConteiner />

            <Container style={{ marginTop: 100 }}>
                <Row>
                    <Col style={{ textDecoration: "none", color: "#000" }}>
                        <Card style={{ width: '15rem' }}>
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

                    <Col>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_821975-MLA49423623994_032022-O.webp" />
                            <Card.Body>
                                <Card.Title>
                                    Câmera web Logitech C920e Full HD 30FPS
                                </Card.Title>
                                <Card.Text>
                                    Resolução máxima de vídeo: 1920px x 1080px
                                </Card.Text>
                                <Link to="/produto"> <Button variant="dark">Comprar</Button></Link>
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
                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link>
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
                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link>
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
                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link>
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
                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link>
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
                                <Link to="/produto">
                                    <Button variant="dark">Comprar</Button>
                                </Link>
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