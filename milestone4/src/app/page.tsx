import Image from "next/image";
import styles from "./index.module.css";


export default function Home() {
  return (
    <div>
      <h1 className="pageTitle">Welcome!</h1>
        <div className={styles.about}>
          <figure className={styles.aboutImage}>
          <Image
            src="/milky-way.jpg"
            alt="milky-way landscape photo"
            width={200}
            height={150} // Add height for the Image component
          />
            <figcaption>
              Fun Fact: I took this picture, and I am very proud :)
            </figcaption>
          </figure>
          <div className={styles.aboutText}>
            <p>
              I'm <strong>Nick Carboni</strong>, a second-year computer science
              student at <strong>Cal Poly SLO</strong>.
            </p>
            <p>
              Still trying to find my <em>niche</em> in the CS world, I enjoy everything
              from learning web development, to low level programming.
            </p>
            <p>
              I love snowboarding, exploring nature, and spending some quality
              time with my friends!
            </p>
            <div className={styles.iconLinks}>
            <a href="https://github.com/carboninl" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.icon}
                src="/github.png"
                alt="github icon"
                width={35}
                height={35} // Specify width and height for icons
              />
            </a>
            <a href="https://www.linkedin.com/in/nick-carboni" target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.icon}
                src="/linkedin.png"
                alt="linkedin icon"
                width={35}
                height={35} // Specify width and height for icons
              />
            </a>
            </div>
          </div>
        </div>
      </div>
  );
}
