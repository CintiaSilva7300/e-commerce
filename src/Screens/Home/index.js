import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Alert, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";

// window.alert("Vem aproveitar nossas ofertas com nosso Super Cashback")

function Home() {
    const [produtos, setProdutos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [somar, setSomar] = React.useState(0);

    React.useEffect(() => {
        setProdutos(produtosMock);

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div>
                <Card.Img style={{
                    display: 'flex',
                    marginLeft: '41%',
                    marginTop: '12%',
                    width: 230,
                    height: 220,
                }}
                    variant="top" src='https://www.coliseumleiloes.com.br/images/loader.gif' />

                <div style={{ textAlign: 'center' }}>
                    <h1><styrong>Carregando</styrong></h1>
                </div>
            </div>
        );
    };

    return (
        <div>
            <NavbarConteiner />
            <Container style={{ marginTop: 50 }}>
                <Row>
                    {produtos.map((ph) => {
                        return (
                            <Col md={3} style={{ textDecoration: "none", color: "#000" }}>
                                <Card className="text-center" style={{ width: '15rem', height: 360, marginTop: 10 }}>
                                    <Card.Img variant="top" src={ph.img} /><Card.Body>
                                        <Card.Title style={{ fontSize: 13 }}>{ph.nome}</Card.Title>

                                        <Card.Text style={{ fontSize: 12 }}>{ph.quantidadeDisponivel}</Card.Text>

                                        <Link to={"/produto/?id=" + ph.id}>
                                            <Button variant="outline-dark">Comprar</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div >
    )
}

export default Home;