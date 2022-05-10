import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import Titulos from '../../Components/Titles/index';
import NavbarConteiner from "../../Components/NavbarConteiner";
import FomularioLogin from "../../Components/FormularioLogin";

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();

    function login() {
        navigate('/');
    }
    return (
        <>
            <NavbarConteiner />
            <div className="d-flex justify-content-center mt-3">
                <Form>
                    <Titulos />
                    <FomularioLogin />

                    <Button onClick={() => {
                        login();
                    }} variant="outline-dark">Entrar</Button>

                    <div>
                        <Link to="/cadastro">
                            <Form.Text className=" text-muted">
                                Não é cadastrado?
                            </Form.Text>
                        </Link>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login;

