import React, { useEffect, useState } from "react";
import { Card, Col, Container, Figure, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { produtosMock } from "../../utils/mock";

function Carrinho() {
    const navigate = useNavigate();

    const [produtos, setProdutos] = useState([]);

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
        }
    }, []);

    return (
        <div>
            <NavbarConteiner />
            <Container style={{ marginTop: 30, fontSize: 15, fontFamily: "serif" }}>
                <Row>
                    <Col sm={8}>
                        <Table striped bordered hover variant="dark">
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
                                                    width={128}
                                                    height={150}
                                                    alt="171x180"
                                                    src={p.img}
                                                />
                                            </Figure>
                                        </td>
                                        <td>{p.nome}</td>
                                        <td>1</td>
                                        <td>{p.preco}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    <Col sm={4}>

                        <h2 style={{
                            textAlign: 'center'
                        }}>Total a Pagar</h2>

                        {produtos.map((pd) => (
                            <Card style={{
                                borderRadius: 20,
                                minHeight: 160,
                                marginTop: 5,
                                fontFamily: "serif",
                                color: '#000',
                                fontSize: 15
                            }}>

                                <h2 style={{ textAlign: 'center', marginTop: 2 }}>
                                    {pd.nome}
                                </h2>

                                <p>{pd.descricao}</p>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Carrinho;
