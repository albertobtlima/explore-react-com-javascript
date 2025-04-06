import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  //let valor = "";

  const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChance={aoDigitado}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

export default CampoTexto;
