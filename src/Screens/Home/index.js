import React, { useEffect, useState } from "react";
import { Card, Col, Container, Alert, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";

// window.alert("Vem aproveitar nossas ofertas com nosso Super Cashback")

function Home() {
    const [produtos, setProdutos] = React.useState([]);
    React.useEffect(() => {
        setProdutos(produtosMock);
    }, []);

    return (
        <div>
            <NavbarConteiner />
            <Container style={{ marginTop: 50 }}>
                <h1 style={{ textAlign: 'center', margin: 40 }}>Otimos produtos </h1>

                <Row>
                    {produtos.map((ph) => {
                        return (
                            <Col style={{ textDecoration: "none", color: "#000" }}>
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