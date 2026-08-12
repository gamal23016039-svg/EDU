import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./Eror.module.css";

function Eror() {
  return (
    <div className={styles.container}>
      <DotLottieReact
        src="https://lottie.host/88794077-73c9-4325-9981-16a57ebe501b/cbBBz6eyk4.json"
        loop
        autoplay
        className={styles.image}
      />
    </div>
  );
}

export default Eror;
