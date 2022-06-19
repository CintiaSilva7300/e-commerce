import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css"; // CSS do bootstrap

import Login from "./Screens/Login/index";
import Home from "./Screens/Home/index";
import Cadastro from "../src/Screens/UserRegistration";
import Produto from "./Screens/Produto/index";
//Adimin
import AdminHome from "./Admin/Screens/HomeAdmin";
import LoginAdmin from "./Admin/Screens/LoginAdmin";
import Animacao from "./Components/Animacao";
import Carrinho from "./Screens/Carrinho";
import AdminCadastrar from "./Admin/Screens/CadastrarAdmin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./Screens/ComponentExample";

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

        <Route path="/animacaoo" element={<Animacao />} />
        <Route path="/teste" element={<ComponentExample />} />

        {/* Admin */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/cadastrar" element={<AdminCadastrar />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
