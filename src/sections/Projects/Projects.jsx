import styles from "./ProjectsStyles.module.css";
import precisa from "../../assets/precisa.png";
import treasure from "../../assets/treasure.png";
import sequence from "../../assets/seqeunce.png";
import fatedseal from "../../assets/fatedseal.png";
import fulbito from "../../assets/fulbito.png"
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Game Dev Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sequence}
          link="https://sequence-web.vercel.app"
          h3="Sequence"
          p="Sequence WebGL Game"
        />
        <ProjectCard
          src={fatedseal}
          link="https://kuhamaven.itch.io/fated-seal"
          h3="Fated Seal"
          p="Action 2D Hack & Slash Game"
        />
        <ProjectCard
          src={fulbito}
          link="https://youtu.be/A58OT9A1lak"
          h3="Arquero VR"
          p="VR Goalkeeper Simulator"
        />
      </div>
      <h1 className="sectionTitle">Web Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={precisa}
          link="https://precisa-front-end-gules.vercel.app/home"
          h3="Precisa"
          p="Data analysis app"
        />
        <ProjectCard
          src={treasure}
          link="https://treasure-hunt-gray.vercel.app/"
          h3="Treasure Hunt"
          p="Treasure hunt phone web game"
        />
      </div>
    </section>
  );
}

export default Projects;
