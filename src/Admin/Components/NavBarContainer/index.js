import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from './../../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';

function NavbarConteinerAdmin() {
    return (
        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand
                        style={{ color: "#FFF", textDecoration: 'none' }}>
                        <img src={Img} width="170" height="50" />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{ color: "#FFF", textDecoration: 'none' }}></Navbar.Text>
                        <Link style={{ textDecoration: 'none' }} to="/admin/login">
                            <h1
                                style={{
                                    fontSize: 20,
                                    color: '#FFF',
                                    border: 0,
                                }}
                                type="text">Sair
                            </h1>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarConteinerAdmin; 