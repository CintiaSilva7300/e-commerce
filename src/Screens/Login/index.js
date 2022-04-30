import React0, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigate = useNavigate();


    function login() {
        // logica para logar
        // apos o login chamar 
        navigate('/')
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <form>
                <h1>Entre ou Cadastre-se</h1>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" class="form-control" placeholder="Enter email" />
                    <small class="form-text text-muted">Coloque nesse campo seu email de login</small>
                </div>

                <div class="form-group">
                    <label>Senha</label>
                    <input type="password" class="form-control" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" />
                    <label class="form-text text-muted">Me mantenha conectado!</label>
                </div>

                <button onClick={() => { login() }} type="button" className="btn btn-primary mt-3">
                    Entrar
                </button>
            </form>
        </div>
    )
}

export default Login;

