import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css"; // CSS do bootstrap
import "react-toastify/dist/ReactToastify.css";
import "./Styled/style.css";

import Login from "./Screens/Login/index";
import Home from "./Screens/Home/index";
import Cadastro from "../src/Screens/UserRegistration";
import Produto from "./Screens/Produto/index";
import Logout from "./Screens/Logout/index";
import Pagamento from "./Screens/Pagamento";
import Sucesso from "./Screens/Sucesso";
//Admin
import AdminHome from "./Admin/Screens/HomeAdmin";
import LoginAdmin from "./Admin/Screens/LoginAdmin";
import Animacao from "./Components/Animacao";
import Carrinho from "./Screens/Carrinho";
import AdminCadastrar from "./Admin/Screens/CadastrarAdmin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./Screens/ComponentExample";
import Perfil from "./Screens/Perfil";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/perfil" element={<Perfil />} />

        <Route path="/animacaoo" element={<Animacao />} />
        <Route path="/teste" element={<ComponentExample />} />

        {/* Admin */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/cadastrar" element={<AdminCadastrar />} />
      </Route>
    </Routes>
    <ToastContainer />
  </BrowserRouter>,
  rootElement
);

reportWebVitals();