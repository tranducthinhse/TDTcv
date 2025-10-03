"use client";
import { useState } from "react";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Quiz App Mobile",
    type: "Mobile",
    images: [
      "/images/Mobile1.png",
      "/images/Mobile2.png",
      "/images/Mobile3.png",
    ],
    shortDesc:
      "Ứng dụng trắc nghiệm online với đăng nhập Firebase và bảng xếp hạng.",
    tech: ["Android Studio", "Firebase"],
    goal: "Học sinh có thể ôn luyện qua bài trắc nghiệm online.",
    role: "Full-stack Developer",
    github: "https://github.com/tranducthinhse/quizapp-doanungdungmobile",
    demo: "https://quizapp-demo.com",
  },
  {
    id: 2,
    title: "Quiz App Web",
    type: "Web",
    images: [
      "/images/Web1.png",
      "/images/Web2.png",
      "/images/Web3.png",
    ],
    shortDesc: "Ứng dụng trắc nghiệm online ",
    tech: ["html", "css","JavaScripts","Node.js","MongoDB"],
    goal: "Học sinh có thể ôn luyện trắc nghiệm online trên nền tảng web",
    role: "Full-stack Developer",
    github: "https://github.com/tranducthinhse/quizzapp-doanungdungweb",
    demo: "#",
  },
  {
    id: 3,
    title: "Game 2D",
    type: "Game",
    images: [
      "/images/game1.png",
      "/images/game2.png",
      "/images/game3.png",
    ],
    shortDesc: "Trò chơi 2D đơn giản với Unity, mang đến trải nghiệm giải trí nhẹ nhàng.",
    tech: ["Unity", "C#"],
    goal: "Phát triển một game 2D để rèn luyện kỹ năng lập trình game và thiết kế gameplay.",
    role: "Game Developer",
    github: "https://github.com/username/2dgame",
    demo: "#",
  },
  {
    id: 4,
    title: "Game 2D",
    type: "Game",
    images: [
      "/images/game1.png",
      "/images/game2.png",
      "/images/game3.png",
    ],
    shortDesc: "Trò chơi 2D đơn giản với Unity, mang đến trải nghiệm giải trí nhẹ nhàng.",
    tech: ["Unity", "C#"],
    goal: "Phát triển một game 2D để rèn luyện kỹ năng lập trình game và thiết kế gameplay.",
    role: "Game Developer",
    github: "https://github.com/username/2dgame",
    demo: "#",
  },
  {
    id: 5,
    title: "Quiz App Web",
    type: "Web",
    images: [
      "/images/Web1.png",
      "/images/Web2.png",
      "/images/Web3.png",
    ],
    shortDesc: "Ứng dụng trắc nghiệm online ",
    tech: ["html", "css","JavaScripts","Node.js","MongoDB"],
    goal: "Học sinh có thể ôn luyện trắc nghiệm online trên nền tảng web",
    role: "Full-stack Developer",
    github: "https://github.com/tranducthinhse/quizzapp-doanungdungweb",
    demo: "#",
  },
  {
    id: 6,
    title: "Quiz App Mobile",
    type: "Mobile",
    images: [
      "/images/Mobile1.png",
      "/images/Mobile2.png",
      "/images/Mobile3.png",
    ],
    shortDesc:
      "Ứng dụng trắc nghiệm online với đăng nhập Firebase và bảng xếp hạng.",
    tech: ["Android Studio", "Firebase"],
    goal: "Học sinh có thể ôn luyện qua bài trắc nghiệm online.",
    role: "Full-stack Developer",
    github: "https://github.com/tranducthinhse/quizapp-doanungdungmobile",
    demo: "https://quizapp-demo.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // ảnh đang phóng to

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Dự án</h2>

      {/* Filter buttons */}
      <div className={styles.filters}>
        {["All", "Web", "Mobile", "Game"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`${styles.filterBtn} ${
              filter === type ? styles.active : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className={styles.grid}>
        {filteredProjects.map((project, i) => (
        <motion.div
          key={project.id}
          onClick={() => setSelected(project)}
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }} // chạy khi scroll vào view
          viewport={{ once: true, amount: 0.3 }} // chỉ chạy 1 lần, khi 30% card vào view
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 15,
            mass: 0.5,
            delay: i * 0.1, // xuất hiện từng card một
          }}
        >
      <img
        src={project.image || project.images?.[0]}
        alt={project.title}
        className={styles.image}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.shortDesc}>{project.shortDesc}</p>
        <div className={styles.techList}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tech}>
              {t}
            </span>
          ))}
        </div>
      </div>
          </motion.div>
        ))}
    </div>


      {/* Modal hiển thị chi tiết project */}
      {selected && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              onClick={() => {
                setSelected(null);
                setSelectedImage(null);
              }}
              className={styles.closeBtn}
            >
              ✕
            </button>

            {/* Gallery ảnh nhỏ */}
            {selected.images && (
              <div className={styles.imageGallery}>
                {selected.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selected.title} ${idx}`}
                    className={styles.modalThumb}
                    onClick={() => setSelectedImage(img)} // click ảnh nhỏ -> mở ảnh lớn
                  />
                ))}
              </div>
            )}

            {/* Ảnh được chọn để phóng to */}
            {selectedImage && (
              <div
                className={styles.fullscreenOverlay}
                onClick={() => setSelectedImage(null)}
              >
                <img
                  src={selectedImage}
                  alt="full"
                  className={styles.fullscreenImage}
                />
              </div>
            )}

            <h2 className={styles.modalTitle}>{selected.title}</h2>
            <p>{selected.goal}</p>
            <p>
              <strong>Vai trò: </strong>
              {selected.role}
            </p>
            <p>
              <strong>Công nghệ: </strong>
              {selected.tech.join(", ")}
            </p>
            <div className={styles.links}>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={selected.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
