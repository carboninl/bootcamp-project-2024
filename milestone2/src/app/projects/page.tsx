import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects(){
    return(
    <main>
      <h1 className="pageTitle">Projects</h1>
      <div className={styles.container}>
      <div className={styles.project}>
        <Image
            className={styles.projectImage}
            src="/website.png"
            alt="personal website image"
            width={500}
            height={500}
        />
        <div className={styles.projectDetails}>
          <p className={styles.projectName}><strong>Personal Website</strong></p>
          <p className={styles.projectDescription}>
            Showcasing web development skills, and some details about me!
          </p>
          <Link href="/">Learn More</Link>
        </div>
      </div>
      <div className={styles.project}>
        <Image
          className={styles.projectImage}
          src="/poly-exchange.jpg"
          alt="poly exchange image"
          width={500}
          height={500}
        />
        <div className={styles.projectDetails}>
          <p className={styles.projectName}><strong>Poly Exchange</strong></p>
          <p className={styles.projectDescription}>
            Developed during SLO Hacks 2024, providing a sustainable marketplace
            for Cal Poly students. Full-Stack developed using the Flask
            framework.
          </p>
        </div>
      </div>
      </div>
    </main>
    );

}
