import React from "react";
import { Form } from "react-bootstrap";

function FomularioLogin(props) {
    return (
        <div>
            <Form style={{ marginTop: 30 }}>
                <Form.Group className="mb-3 ">
                    <Form.Label>E-mail </Form.Label>
                    <Form.Control
                        type="e-mail"
                        placeholder="email"
                        onChange={(e) => props.setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        {" "}
                        Nunca compartilharemos seu e-mail com mais ninguém.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => props.setSenha(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </div>
    );
}

export default FomularioLogin;