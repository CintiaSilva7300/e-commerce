import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Badge, InputGroup, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";
import Animacao1 from "../../Components/Animacao";

function Produto() {

    const navigate = useNavigate();

    function ComfirmarCompra() {

        navigate('/');
    }

    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState({})

    useEffect(() => {
        setProdutos(produtosMock)
    }, [])

    useEffect(() => {
        if (produtos.length > 0) {
            const url = new URLSearchParams(window.location.search);

            const id = url.get('id');

            const p = produtos.find((item) => item.id == id);

            setProduto(p);
        }
    }, [produtos])

    if (!produto.id) {
        return (
            <Animacao1 />
        )
    }

    return (
        <div>
            <NavbarConteiner />
            <Container style={{ marginTop: 30, fontSize: 15, fontFamily: 'serif' }}>
                <Row >
                    <Col xs={12} md={4} style={{ textDecoration: 'none', color: "#000" }}>
                        <Card style={{ width: '20rem', borderRadius: 5, padding: 25 }}>
                            <Card.Img
                                variant="top"
                                src={produto.img} />
                            <Card.Body>
                                <Card.Title>{produto.nome}</Card.Title>

                                <Card.Text>
                                    {produto.descricao}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Badge pill bg="dark" style={{ padding: 10, marginLeft: 90, fontFamily: 'cursive' }}>
                            <h1>
                                {produto.nome} {produto.preco}
                            </h1>

                        </Badge>


                        <Col>
                            <Form>
                                <Row style={{ marginTop: 20, borderRadius: 10, padding: 25 }}>
                                    <Col xs={12} md={8}>
                                        <Form.Group controlId="formBasictext">
                                            <Form.Label>Nome completo </Form.Label>
                                            <Form.Control type="text" placeholder="Nome" />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={6} md={4}>
                                        <Form.Group controlId="formBasictext">
                                            <Form.Label>Cidade </Form.Label>
                                            <Form.Control type="text" placeholder="Nome" />
                                        </Form.Group>
                                    </Col>

                                    <Row>
                                        <Col style={{ marginTop: 10 }}>
                                            <Form.Group className="mb-3" controlId="formBasictext">
                                                <h1 style={{ fontSize: 16, fontFamily: 'arial', marginTop: 5 }}><strong>Dados de Pagamento</strong></h1>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col xs={12} md={7}>
                                        <Form.Group controlId="formBasictext">
                                            <Form.Label>Numero do Cartão </Form.Label>
                                            <Form.Control type="text" placeholder="numero do Cartão" />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={6} md={5}>
                                        <Form.Group >
                                            <Form.Label>Validade do Cartão</Form.Label>
                                            <Form.Control type="date" placeholder="Data de Nacimento" />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={8}>
                                        <Form.Group controlId="formBasictext">
                                            <Form.Label>Nome Impresso no Cartão </Form.Label>
                                            <Form.Control type="text" placeholder="nome impresso no cartão" />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Form.Group controlId="formBasicnumber">
                                            <Form.Label>Codigo de Segurança </Form.Label>
                                            <Form.Control type="text" placeholder="codigo de segurança" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button style={{ width: "50%", marginLeft: 200, marginTop: 10 }} onClick={() => {
                                    ComfirmarCompra();
                                }} variant="outline-dark">Confirmar Compra</Button>

                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Produto;