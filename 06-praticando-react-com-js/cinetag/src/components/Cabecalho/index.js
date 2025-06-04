import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.Cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do Cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
