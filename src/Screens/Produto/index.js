import React, { useEffect, useState } from "react";
import {
    Card,
    Col,
    Container,
    Row,
    Button,
    Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";

function Produto() {
    const navigate = useNavigate();

    function navigateToCarrinho() {
        let carrinhoLocalStorage = localStorage.getItem("carrinho");

        if (carrinhoLocalStorage) {
            carrinhoLocalStorage = carrinhoLocalStorage + "," + id;
            localStorage.setItem("carrinho", carrinhoLocalStorage);
            navigate("/carrinho");
            return;
        }

        localStorage.setItem("carrinho", id);
        navigate("/carrinho");
    }

    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState({});
    const [id, setId] = useState(0);

    useEffect(() => {
        setProdutos(produtosMock);
    }, []);

    useEffect(() => {
        if (produtos.length > 0) {
            const url = new URLSearchParams(window.location.search);

            const id = url.get("id");
            setId(id);

            const p = produtos.find((item) => item.id == id);

            setProduto(p);
        }
    }, [produtos]);

    if (!produto.id) {
        return <p>carregando</p>;
    }

    return (
        <div>
            <NavbarConteiner />
            <Container style={{ fontSize: 15, fontFamily: "serif" }}>
                <Row>
                    <Col xs={12} md={4} style={{ textDecoration: "none", color: "#000" }}>
                        <Card
                            style={{
                                width: "30rem",
                                // padding: 25,
                                marginTop: 30
                            }}
                        >
                            <Card.Img variant="top" src={produto.img} />
                        </Card>
                    </Col>

                    <Col>
                        <Col xs={12} md={4} style={{ textDecoration: "none", color: "#000" }}>
                            <Card
                                style={{
                                    width: "35rem",
                                    height: "20rem",
                                    marginLeft: '50%',
                                    marginTop: 30
                                }}
                            >
                                <Card.Body>
                                    <Card.Title>{produto.nome}</Card.Title>

                                    {/* <Card.Text>{produto.descricao2}</Card.Text> */}
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ textDecoration: 'line-through' }}>{produto.preco.toString().replace(".", ",")}</p>
                                        <Badge style={{ height: 17, margin: 1, fontSize: 11 }} bg="success">10%</Badge>
                                    </div>
                                    <strong>
                                        <h1 style={{ marginTop: -10 }}> R${produto.preco.toString().replace(".", ",")}  </h1>
                                        <p style={{ marginTop: -15 }}>Á vista no Cartão de Credito</p>
                                        <h1 style={{ marginTop: 15, fontSize: 20, fontFamily: 'bold' }}>R$ {produto.preco.toString().replace(".", ",")} em até 3x de {produto.preco.toString().replace(".", ",")}</h1>
                                    </strong>
                                </Card.Body>

                                <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
                                    <Button
                                        style={{ width: "40%" }}
                                        onClick={() => {
                                            navigateToCarrinho();
                                        }}
                                        variant="outline-dark"
                                    >
                                        Adicionar no carrinho
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Produto;
