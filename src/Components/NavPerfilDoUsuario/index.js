import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Img from "../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg";
// import usuarios from "../../utils/mock";

import Avatar from '@mui/material/Avatar';

function NavPerfilDoUsuario(props) {

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

export default NavPerfilDoUsuario;