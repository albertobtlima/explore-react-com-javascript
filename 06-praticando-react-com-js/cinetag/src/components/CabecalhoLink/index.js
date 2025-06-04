import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";

function CabecalhoLink({ url, childrem }) {
  return (
    <Link to={url} className={styles.link}>
      {childrem}
    </Link>
  );
}

export default CabecalhoLink;
