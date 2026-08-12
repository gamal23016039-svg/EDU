import styles from "./Hero.module.css";
import Hero from "../../assets/TheGuy.png";
import { Link } from "react-router-dom";
import Grainient from "./Grainient";

function LandingPage() {
  return (
    <div className={styles.landingPage} id="Home">
      <div className={styles.grad}>
        <Grainient
          color1="#ae62ab"
          color2="#6f60ae"
          color3="#683598"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* the text of the left side in the hero */}

      <div className="hero">
        {/* the word of next generation of learnning */}

        <span className={styles.nextGeneration}>
          🌠 Next Generation Learning
        </span>

        {/* the greeting of the site with the name */}

        <div className={styles.greeting}>
          <h1 className={styles.welcome}>Welcome To</h1>
          <h1 className={styles.edu}>EDU</h1>
          <h1 className={styles.gate}> GATE</h1>
        </div>

        {/* the description about the site like bio */}

        <p className={styles.description}>
          Your First <span>Gate</span> to <span>success</span>
        </p>

        {/* the buttons of login in getstart and watchdemo */}

        <div className={styles.buttons}>
          <Link to="/Login">
            <button className={styles.getStarted}>Get Started</button>
          </Link>
          <button className={styles.watchDemo}>Watch Demo</button>
        </div>

        {/*----------------------------------------------------------*/}
      </div>

      {/* the image and the floating text all of them in one div and each ele have a seperate div */}

      <div className={styles.theImageOfBoy}>
        <img src={Hero} alt="" />
        {/* ---------------------the floating one---------------------- */}
        <div className={styles.theFloatingText}>
          <span>EduGate</span>
        </div>
        {/* ---------------------the floating two---------------------- */}
        <div className={styles.theFloatingTextTwo}>
          <span>Learn What You Want</span>
        </div>
        {/* ---------------------the floating three---------------------- */}
        <div className={styles.theFloatingTextThree}>
          <span>its all start with you</span>
        </div>
        {/* ***************************************************** */}
      </div>
      {/* ***************************************************** */}
    </div>
  );
}

export default LandingPage;
