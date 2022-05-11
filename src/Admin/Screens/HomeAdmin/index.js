import React from "react";
import { Col, Container, FormControl, InputGroup, Navbar, Row, Button } from "react-bootstrap";

import { ProSidebar } from 'react-pro-sidebar';
import { FaHome, FaProductHunt, FaClipboardList, FaPlusCircle, FaPen } from 'react-icons/fa';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import NavbarConteinerAdmin from "../../Components/NavBarContainer";

function AdminHome(props) {
    return (
        <div >

            <Col >
                <Row>
                    <NavbarConteinerAdmin />
                    <ProSidebar>
                        <Menu style={{ backgroundColor: "#212529" }} iconShape="square">
                            <MenuItem icon={<FaHome />}>Home</MenuItem>
                            <SubMenu title="Produto" icon={<FaProductHunt />}>
                                <MenuItem icon={<FaClipboardList />}>Lista de Produto</MenuItem>
                                <MenuItem icon={<FaPlusCircle />}>Cadastrar</MenuItem>
                                <MenuItem icon={<FaPen />}>Editar </MenuItem>
                            </SubMenu>

                            <MenuItem icon={<FaClipboardList />}>seila</MenuItem>
                            <MenuItem icon={<FaPlusCircle />}>seila</MenuItem>
                            <MenuItem icon={<FaPen />}>seila </MenuItem>
                            <MenuItem icon={<FaClipboardList />}>seila</MenuItem>
                            <MenuItem icon={<FaPlusCircle />}>seila</MenuItem>
                            <MenuItem icon={<FaPen />}>seila </MenuItem>
                            <MenuItem icon={<FaClipboardList />}>seila</MenuItem>
                        </Menu>
                    </ProSidebar>

                    <Col>
                        <Container style={{ marginTop: 30, alignItems: " center" }}>
                            <h1 style={{ textAlign: "center", fontSize: 30 }}> Crud Adimin E-commerce</h1>


                            <>
                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark" >Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark" >Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark" >Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark" >Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark">Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark">Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark">Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>

                                <InputGroup style={{ marginTop: 20 }}>
                                    <FormControl
                                        placeholder="Especifique as Alterações realizada no produto"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button variant="outline-dark">Editar</Button>
                                    <Button variant="outline-dark">Apagar</Button>
                                </InputGroup>


                            </>





                        </Container>
                    </Col>
                </Row >
            </Col >

        </div >
    )
}

export default AdminHome;