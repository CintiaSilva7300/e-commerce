import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../../Components/Toast";

import Titulos from "../../Components/Titles/index";
import NavBarLogin from "../../Screens/Login/NavBarLogin";
import FomularioLogin from "../../Components/FormularioLogin";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();

    async function login() {
        try {
            const response = await axios.post(
                "http://64.227.71.102:8081/api/usuarios/login",
                {
                    email: email,
                    senha: senha,
                }
            );

            if (response.data) {
                localStorage.setItem("userInfo", JSON.stringify(response.data));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            notify(error?.response?.data?.message || "Não foi possivel autenticar");
        }
    }

    return (
        <>
            <NavBarLogin />
            <div className="d-flex justify-content-center mt-3">
                <Form>
                    <Titulos />
                    <FomularioLogin setEmail={setEmail} setSenha={setSenha} />

                    <div
                        style={{
                            marginTop: 20,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            style={{ width: "50%" }}
                            onClick={() => {
                                login();
                            }}
                            variant="outline-dark"
                        >
                            Entrar
                        </Button>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Link to="/cadastro">
                            <Form.Text className=" text-muted">Não é cadastrado?</Form.Text>
                        </Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;