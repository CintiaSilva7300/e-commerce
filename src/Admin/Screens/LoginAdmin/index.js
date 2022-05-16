import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
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

                    <div style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Button style={{ width: "50%" }}
                            onClick={() => {
                                login();
                            }} variant="outline-dark">Entrar

                        </Button>
                    </div>
                </Form>
            </div >
        </>
    )
}

export default Login;
