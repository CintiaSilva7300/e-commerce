import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";

function Home() {
    const [produtos, setProdutos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

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
                    marginLeft: '47%',
                    marginTop: '14%',
                    width: 90,
                    height: 90,
                }}
                    variant="top" src='https://www.coliseumleiloes.com.br/images/loader.gif' />
                <div style={{ textAlign: 'center', marginTop: 10, fontSize: 2 }}>
                    <h1 style={{ fontSize: 20 }}><styrong>Carregando...</styrong></h1>
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