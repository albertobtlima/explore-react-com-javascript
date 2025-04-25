import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/eu_guitar.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Alberto</h3>

      <img
        src={fotoSobreMim}
        alt="Foto sobre mim"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        tellus vitae arcu feugiat vestibulum.
      </p>
      <p className={styles.paragrafo}>
        Praesent ac urna vel velit vehicula accumsan. Pellentesque nec odio ut
        nisl volutpat vehicula. In at semper sapien, at imperdiet justo. Vivamus
        sed sem ac ligula cursus finibus. Mauris vitae purus sed diam fringilla
        malesuada. Aenean nec vestibulum magna. Sed pharetra fringilla velit,
        non lobortis ligula vestibulum non. Fusce porta, metus nec luctus
        posuere, nunc justo imperdiet magna, sed elementum risus eros vel orci.
      </p>
      <p className={styles.paragrafo}>
        Curabitur auctor, augue at congue convallis, neque mauris dignissim
        tortor, a aliquam tellus nunc vel lectus. Donec ullamcorper, felis in
        pretium vehicula, nulla lorem tincidunt libero, nec bibendum erat tortor
        et augue. Sed accumsan facilisis lorem, sed convallis justo vulputate
        at. Pellentesque et urna sit amet risus volutpat suscipit. Duis nec dui
        sit amet mauris cursus congue. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae.
      </p>
      <p className={styles.paragrafo}>
        Sed dignissim libero et sem feugiat, eget hendrerit nulla gravida. Proin
        at neque erat. Integer blandit lorem eget ligula luctus, in bibendum
        sapien ultrices. Cras sagittis, justo sit amet commodo sodales, libero
        sem dignissim risus, ut tempus lorem nisi et sem. Nulla facilisi. Morbi
        lacinia, arcu non imperdiet sollicitudin, metus lectus congue nunc,
        vitae laoreet ligula felis ut erat.
      </p>
      <p className={styles.paragrafo}>
        Vestibulum congue libero ac mi malesuada, vitae bibendum neque
        condimentum. Nunc nec convallis risus. Aliquam erat volutpat.
        Suspendisse in tincidunt sem. In hac habitasse platea dictumst.
        Pellentesque dignissim, massa non ultrices laoreet, tortor lorem
        pharetra nibh, ac scelerisque justo nisi sit amet magna. Sed pretium
        erat ac erat interdum, nec porttitor metus mattis.
      </p>
    </PostModelo>
  );
}
