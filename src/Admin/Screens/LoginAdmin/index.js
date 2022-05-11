import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import NavbarConteinerAdmin from "../../Components/NavBarContainer";
import FomularioLogin from "../../../Components/FormularioLogin";

function Login() {
    const navigate = useNavigate();

    function login() {
        navigate('/admin/home');
    }
    return (
        <>
            <NavbarConteinerAdmin />
            <div className="d-flex justify-content-center mt-3">
                <Form>
                    <h1>Admin user login</h1>

                    <FomularioLogin />

                    <Button onClick={() => {
                        login();
                    }} variant="outline-dark">Entrar
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Login;
