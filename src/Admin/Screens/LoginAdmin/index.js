import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FomularioLogin from "../../../Components/FormularioLogin";
import NavbarConteinerAdminLogin from "../../Components/NavBarLoginAdmin";

function Login() {
    const navigate = useNavigate();

    function login() {
        navigate('/admin/home');
    }
    return (
        <>
            <NavbarConteinerAdminLogin />
            <div className="d-flex justify-content-center mt-3">
                <Form>
                    <h1>Admin user login</h1>
                    <FomularioLogin />
                    <Link to="/admin/cadastrar">
                        <p style={{ marginTop: 1 }}>
                            Não posui acesso? pedir acesso
                        </p>
                    </Link>
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
