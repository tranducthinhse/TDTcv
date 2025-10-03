import { useContext } from "react";
import styles from "./About.module.css";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  // Lấy trạng thái dark mode từ ThemeContext
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`${styles.aboutSection} ${darkMode ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        {/* Left text */}
        <div className={styles.textBox}>
          <h1 className={styles.name}>Mr.TranDucThinh</h1>
          <h2 className={styles.job}>Software Engineer</h2>
          <p className={styles.location}>Ho Chi Minh City, Vietnam</p>

          <p className={styles.description}>
            Since 2021, I have loved solving problems with computers.
            My direction is to become a fullstack developer focusing on 
            <br />
            When I am not coding, you will find me cooking and working out at the gym.
          </p>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvButton}
          >
            Download CV
          </a>
        </div>

        {/* Right image */}
        <div className={styles.imageBox}>
          <img src="/brush.jpg" alt="Avatar" className={styles.avatar} />
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.gallery}>
        <img src="/g1.jpg" alt="gallery1" />
        <img src="/g2.jpg" alt="gallery2" />
        <img src="/g3.jpg" alt="gallery3" />
        <img src="/g4.jpg" alt="gallery4" />
        <img src="/g2.jpg" alt="gallery5" />
        <img src="/g6.jpg" alt="gallery6" />
      </div>
    </section>
  );
}
