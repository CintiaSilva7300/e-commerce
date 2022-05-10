import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { productMock } from "../../utils/mock"

function Home() {
    const [produto, setProduto] = useState({})
    useEffect(() => {
        setProduto(productMock)
    }, [])

    return (
        <div>
            <NavbarConteiner />
            <Container style={{ marginTop: 60 }}>
                <Row md={3}>
                    <Col style={{ textDecoration: "none", color: "#000" }}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top"
                                src={produto.img} />
                            <Card.Body>
                                <Card.Title>{produto.nome}</Card.Title>
                                <Card.Text>
                                    {produto.descricao}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card style={{ height: '100%', width: '100%' }}>
                            <Card.Body>
                                <Card style={{ height: '100%', width: '100%' }}>
                                    {produto.especificao && produto.especificao.map((especificacao) => (<p>{especificacao}</p>))}
                                </Card>
                                <Link to="/produto">
                                    <Button variant="outline-dark">Garantir agora</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

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