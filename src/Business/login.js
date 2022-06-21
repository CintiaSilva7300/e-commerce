import { usuarios } from "../utils/mock";

export function autenticar(email, senha) {
    const usuario = usuarios.find(
        (usuarioItem) => usuarioItem.email === email && usuarioItem.senha === senha
    );
    if (usuario) {
        localStorage.setItem("userInfo", JSON.stringify(usuario));
        return true;
    } else {
        return false;
    }
}

export function deslogar() {
    localStorage.removeItem("userInfo");
}