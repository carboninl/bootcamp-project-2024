import styles from "./resume.module.css";


export default function Resume(){
    return(
        <div>
      <h1 className="pageTitle">Resume</h1>
        <div className={styles.resume}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <hr className={styles.separator}></hr>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Bachelor of Science in Computer Science</h3>
            <p className={styles.entryInfo}>California Polytechnic State University, San Luis Obispo | Expected June 2027</p>
            <p className={styles.entryDescription}></p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Coursework</h2>
          <hr className={styles.separator}></hr>
          <ul className={styles.courseList}>
            <li>Data Structures</li>
            <li>Into to Computer Organization</li>
            <li>Project-Based Object Oriented Programming and Design</li>
            <li>Discrete Structures</li>
            <li>Systems Programming</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <hr className={styles.separator}></hr>
          <ul className={styles.skillList}>
            <li><strong>Programming Languages: </strong>Java, Python, C, HTML, CSS, RISC-V Assembly</li>
            <li><strong>Systems & Environments Proficiency: </strong>Text-based code editors (Vim, Emacs), RISC-V architecture
              simulators, Unix/Linux Systems (navigation, scripting, file management)</li>
            <li><strong>Applications: </strong>JetBrains IDEs, Adobe Suite, Microsoft Excel, Word, PowerPoint, Solidworks</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <hr className={styles.separator}></hr>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Poly Exchange Website Project - SLO Hacks Hackathon</h3>
            <ul className={styles.polyExchangeDetails}>
                <li>
                  Collaborated with a four-person team to design and develop a fully-fledged online marketplace for Cal Poly
                  students
                </li>
                <li>
                  Demonstrated Full-Stack development capabilities
                </li>
                <li>
                  Utilizes Python via the Flask framework to handle backend
                </li>
                <li>
                  Fully documented and presented to a panel of judges made up of Cal Poly faculty
                </li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Inode-based Unix File System Simulator
            </h3>
            <ul className={styles.fileSystemDetails}>
                <li>
                  Designed and implemented a Unix file system simulator using inodes to manage file metadata
                </li>
                <li>
                Simulated file creation, deletion, and organization in a hierarchial directory structure
                </li>
                <li>
                  Developed inode structure for efficient file management and space allocation
                </li>
                <li>
                  Thoroughly tested to ensure proper behavior and no memory leaks across all edge cases
                </li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Modular Multithreaded Web Server in C
            </h3>
            <ul className={styles.webServerDetails}>
                <li>
                  Designed a multithreaded web server that handles HTTP requests using C and POSIX sockets
                </li>
                <li>
                  Implemented support for basic HTTP methods with a modular design allowing for easy extension to other
                  methods
                </li>
                <li>
                  Manages concurrent client connections through pthreads, creating dedicated threads for each request
                </li>
                <li>
                  Utilizes proper request parsing, file serving, and response generation
                </li>
                <li>
                Ensured safe handling of malformed requests and unsupported HTTP methods
                </li>
            </ul>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <hr className={styles.separator}></hr>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Service Advocate, Trainer - Target | Fall 2022 - Present
            </h3>
            <ul className={styles.targetDetails}>
                <li>
                  Facilitated customer service through use of communication and time management
                </li>
                <li>
                  Trained and mentored numerous new team members, providing guidance on store operations and service
                  standards--ensuring smooth integration into our team                </li>
            </ul>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Sigma Phi Delta Professional Engineering Fraternity | Fall 2023 - Present
            </h3>
            <ul className={styles.spdDetails}>
                <li>
                  Volunteered at fundraising and community service events
                </li>
                <li>
                  Active at all chapter meetings, and involved with planning the future of the fraternity
                </li>
            </ul>
          </div>
        </section>
      </div>
      </div>
    );

}
