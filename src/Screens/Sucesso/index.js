import { Alert, Box, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import NavbarConteiner from "../../Components/NavbarConteiner";
import { usuarios } from "../../utils/mock";

function Sucesso() {
    const [value, setValue] = React.useState(2);

    const Navigate = useNavigate();
    function sair() {
        Navigate("/");
    }

    return (
        <div>
            <NavbarConteiner />

            <Container style={{ marginTop: 20 }}>
                <Alert severity="success">
                    Parabéns pela sua aquisição. Já estamos
                    ansiosos para saber qual será o nosso próximo encontro.
                    Aproveite o seu produto/serviço e lembre-se que
                    estamos à disposição para você sempre.
                </Alert>

                <Col xs={12} md={4} style={{ textDecoration: "none", color: "#000" }}>
                    <Card
                        style={{
                            width: "70rem",
                            height: "22rem",
                            marginLeft: 0,
                            marginTop: 30
                        }}
                    >
                        <Box style={{ alignItems: 'center' }}
                            sx={{
                                '& > legend': { mt: 10 },
                            }}
                        >
                            <Typography component="legend">
                                <h1 style={{ textAlign: 'center' }}>Avaliar experiencia no Site</h1>
                            </Typography>

                            <Rating style={{ marginLeft: "45%", textAlign: 'center', marginTop: 25 }}
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);

                                }}
                            />
                        </Box>

                        <Button
                            onClick={() => {
                                sair();
                            }}
                            style={{ width: "100%", marginTop: "11%" }}

                            variant="outline-dark"
                        >
                            Obrigado, Volte sempre...!
                        </Button>
                    </Card>
                </Col>


            </Container>
        </div>
    );
}

export default Sucesso;