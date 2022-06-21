import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Figure, Row, Table, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";
import { FaCreditCard } from "react-icons/fa";
import { notify } from "../../Components/Toast";

function Pagamento() {

    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const carrinhoLocalStorage = localStorage.getItem("carrinho");
        if (carrinhoLocalStorage) {
            let carrinhoLista = carrinhoLocalStorage.split(",");
            carrinhoLista = carrinhoLista.map((cl) => Number(cl));

            let produtosCarrinho = [];
            produtosCarrinho = produtosMock.filter((p) =>
                carrinhoLista.includes(p.id)
            );

            setProdutos(produtosCarrinho);

            let price = 0;
            produtosCarrinho.map((p) => {
                price = price + Number(p.preco)
            })
            setTotal(price)
        }
    }, []);

    function ComprarAgora() {
        return (
            navigate("/sucesso")
        )
    }



    return (
        <div>
            <NavbarConteiner />
            <Container style={{ marginTop: 30, fontSize: 15, fontFamily: "serif" }}>
                <Row>

                    <h1 style={{
                        marginLeft: 200,
                        padding: 5, marginTop: 0
                    }}><strong>Minhas Compras! </strong>
                    </h1>

                    <Col sm={8}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nome</th>
                                    <th>Qtde</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map((p) => (
                                    <tr>
                                        <td>
                                            <Figure>
                                                <Figure.Image
                                                    width={90}
                                                    height={50}
                                                    alt="100x80"
                                                    src={p.img}
                                                />
                                            </Figure>
                                        </td>
                                        <td>{p.nome}</td>
                                        <td>1</td>
                                        <td>{p.preco.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    <Col sm={4}>
                        <Card >
                            <h2 style={{
                                textAlign: 'center'
                            }}><strong>Total Pedido R$</strong> {total.toFixed(2).toString().replace('.', ',')}</h2>
                        </Card>

                        <Card style={{ marginTop: 10, padding: 10 }}>
                            <h3 style={{ textAlign: 'center' }}>Forma de pagamento</h3>

                            <Form.Group style={{ padding: 0, fontSize: 13 }}>
                                <Form.Check
                                    label="Cartão de Credito"
                                    required
                                />

                                <Row>
                                    <Col >
                                        <Form.Group controlId="formBasicNumber">
                                            <Form.Label>Numero do Cartão</Form.Label>
                                            <FaCreditCard style={{ marginLeft: 5, height: 20, width: 20 }} />
                                            <Form.Control type="TextNumber"
                                                placeholder="0000 0000 0000 0000" />

                                            <Form.Label style={{ marginTop: 10 }}>Seu Nome *
                                                (como no cartão)</Form.Label>
                                            <Form.Control type="text" />

                                            <Form.Label style={{ marginTop: 10 }}>Código de Segurança (cvv) *</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form.Group>


                        </Card>

                        <Button type="button"
                            style={{ width: "100%", marginTop: 5 }}
                            onClick={() => {
                                ComprarAgora();
                            }}
                            variant="outline-dark"
                        >
                            Comprar agora
                        </Button>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Pagamento;

