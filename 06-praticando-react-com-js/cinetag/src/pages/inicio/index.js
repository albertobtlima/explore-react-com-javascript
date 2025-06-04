import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Uma lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card id="1" titulo="Gato fofinho" capa="" />
      <Rodape />
    </>
  );
}

export default Inicio;
