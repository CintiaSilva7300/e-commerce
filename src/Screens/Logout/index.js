import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deslogar } from "../../Business/login";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        deslogar();
        navigate("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <p></p>
        </>
    );
}

export default Logout;