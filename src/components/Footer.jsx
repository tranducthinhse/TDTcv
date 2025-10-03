import styles from "./Footer.module.css";
import { Link } from "react-scroll";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} - Portfolio của tôi
      </p>

      {/* Nút tròn nhô lên */}
      <div className={styles.scrollTop} onClick={scrollToTop}>
        ^
      </div>


      <ul className={styles.menu}>
        <li><Link to="about" smooth={true} duration={600}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={600}>Contact</Link></li>
      </ul>
    </footer>
  );
}
