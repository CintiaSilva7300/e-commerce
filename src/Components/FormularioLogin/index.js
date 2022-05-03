import { Button } from "bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



function FomularioLogin(props) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 ">
                    <Form.Label>E-mail </Form.Label>
                    <Form.Control type="e-mail" placeholder="email" />
                    <Form.Text className="text-muted"> Nunca compartilharemos seu e-mail com mais ninguém.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="senha" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default FomularioLogin;