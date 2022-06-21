import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Img from "../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg";

import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// document.getElementById("CorLetraNavBar").style.color = "red";

function NavbarConteiner(props) {

    const [usuario, setUsuario] = useState();

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
                    <Navbar.Brand>
                        <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
                            <img src={Img} width="170" height="50" />
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
                            </Navbar.Text>
                        )}

                        {usuario && (

                            <div style={{ display: 'flex' }}>
                                <Avatar alt="Remy Sharp" src={usuario.img} />

                                <NavDropdown
                                    style={{ background: "#FFF", textDecoration: "none", fontSize: 20, }}
                                    title={usuario.nome}
                                    id="basic-nav-dropdown"
                                >


                                    <Nav.Link as={NavLink} to="/perfil">
                                        Perfil
                                    </Nav.Link>

                                    <Nav.Link as={NavLink} to="/logout">
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