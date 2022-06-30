import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Img from "../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg";
import { FaShoppingCart } from "react-icons/fa";

import Avatar from '@mui/material/Avatar';

function NavbarConteiner(props) {
    const [usuario, setUsuario] = useState();
    const navigate = useNavigate();

    function NavCarinho() {
        navigate("/carrinho");
    }



    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            setUsuario(JSON.parse(userInfo));
        }
    }, []);

    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <FaShoppingCart style={{ color: '#FFF', height: 25, width: 25, margin: 5 }} onClick={() => {
                        NavCarinho();
                    }} />

                    <Navbar.Brand>
                        <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
                            <img src={Img} width="170" height="50" alt="imagem do produto" />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        {!usuario && (
                            <Navbar.Text>
                                <Link
                                    to="/login"
                                    style={{ color: "#FFF", textDecoration: "none" }}
                                >
                                    Login /
                                </Link>
                                <Link
                                    to="/cadastro"
                                    style={{ color: "#FFF", textDecoration: "none" }}
                                >
                                    / Cadastrar-se
                                </Link>


                                <FaShoppingCart style={{ color: '#FFF', height: 25, width: 25, margin: 5 }} onClick={() => {
                                    NavCarinho();
                                }} Carrinho />


                            </Navbar.Text>
                        )}

                        {usuario && (
                            <div style={{ display: 'flex' }}>
                                <Avatar alt="Remy Sharp" src={usuario.img} />
                                <NavDropdown
                                    title={usuario.nome}
                                    id="nav-dropdown"
                                >
                                    <Nav.Link as={NavLink} style={{ color: '#000' }} to="/perfil">
                                        Perfil
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} style={{ color: '#000' }} to="/logout">
                                        Sair
                                    </Nav.Link>
                                </NavDropdown>
                            </div>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarConteiner;