import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import Titulos from '../../Components/Titles/index';
import NavBarLogin from "../../Screens/Login/NavBarLogin";
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
            <NavBarLogin />
            <div className="d-flex justify-content-center mt-3">
                <Form>
                    <Titulos />
                    <FomularioLogin />

                    <div style={{
                        marginTop: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Button style={{ width: "50%" }} onClick={() => {
                            login();
                        }} variant="outline-dark">Entrar</Button>

                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Link to="/cadastro">
                            <Form.Text className=" text-muted">
                                Não é cadastrado?
                            </Form.Text>
                        </Link>

                    </div>

                    <div>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login;

