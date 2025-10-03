import { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${sectionId}`);
    }
    setMenuOpen(false); // Đóng menu sau khi click
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>MyPortfolio</Link>

        {/* Mobile Burger */}
        <div
          className={styles["mobile-toggle"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          <li><button onClick={() => handleNavClick("about")} className={styles.navLink}>About</button></li>
          <li><button onClick={() => handleNavClick("skills")} className={styles.navLink}>Skills</button></li>
          <li><button onClick={() => handleNavClick("projects")} className={styles.navLink}>Projects</button></li>
          <li><button onClick={() => handleNavClick("contact")} className={styles.navLink}>Contact</button></li>
          <li><Link to="/blog" className={styles.navLink}>Blog</Link></li>
        </ul>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className={styles["mobile-menu"]}>
            <ul>
              <li><button onClick={() => handleNavClick("about")} className={styles.navLink}>About</button></li>
              <li><button onClick={() => handleNavClick("skills")} className={styles.navLink}>Skills</button></li>
              <li><button onClick={() => handleNavClick("projects")} className={styles.navLink}>Projects</button></li>
              <li><button onClick={() => handleNavClick("contact")} className={styles.navLink}>Contact</button></li>
              <li><Link to="/blog" className={styles.navLink}>Blog</Link></li>
            </ul>
            <div className={styles.socials}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
              
            </div>
          </div>
        )}
        <div className={styles.socials}>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
              
            </div>
        <button className={styles.toggleButton} onClick={toggleTheme}>
                {darkMode ? '🌞' : '🌙'}
        </button>

      </div>
    </nav>
  );
}
