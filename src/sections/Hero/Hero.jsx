//rfce + tab
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profile Picture"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Theme toggle"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Franco <br />
          Palumbo
        </h1>
        <h2>Software Engineer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a> */}
          <a
            href="https://linkedin.com/in/franco-palumbo-43b939234/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/FrancoPalumbo96" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hi! I’m a Software Engineer with a passion for creating video games
          and interactive experiences. Over the past few years, I’ve worked on
          projects ranging from Virtual Reality to 3D simulations and frontend
          web development.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
