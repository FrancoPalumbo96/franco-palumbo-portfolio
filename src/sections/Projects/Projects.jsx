import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="Todo add link"
          h3="Viberr"
          p="Todo Viberr project description"
        />
        <ProjectCard
          src={freshBurger}
          link="Todo add link"
          h3="Fresh Burger"
          p="Todo Fresh Burger project description"
        />
        <ProjectCard
          src={freshBurger}
          link="Todo add link"
          h3="Fresh Burger"
          p="Todo Fresh Burger project description"
        />
        <ProjectCard
          src={freshBurger}
          link="Todo add link"
          h3="Fresh Burger"
          p="Todo Fresh Burger project description"
        />
      </div>
    </section>
  );
}

export default Projects;
