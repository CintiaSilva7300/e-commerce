import React from "react";

function InputText(props) {
    return (
        <div class="form-group">
            <label>{props.label}</label>
            <input type="text" class="form-control" placeholder={props.label} onChange={(e) => { props.atualizarValor() }} />
        </div>
    )
}

export default InputText;
