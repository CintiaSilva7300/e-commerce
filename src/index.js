import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css"; // CSS do bootstrap

import Login from "./Screens/Login/index";
import Home from "./Screens/Home/index";
import Cadastro from "../src/Screens/UserRegistration";
import Produto from "./Produto/index"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./Screens/ComponentExample";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teste" element={<ComponentExample />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto" element={<Produto />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
