"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Đang gửi...");
    const form = e.target;

    emailjs
      .sendForm(
        "service_3bif1ha",
        "template_azf30ak",
        form,
        "QS4yhuRnVg3eNxsV-"
      )
      .then(
        () => {
          setStatus("Cảm ơn! Tin nhắn của bạn đã được gửi.");
          form.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Có lỗi xảy ra, vui lòng thử lại.");
        }
      );
  };

  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>Liên hệ</h2>
        <p className={styles.subtitle}>
          Gửi tin nhắn hoặc liên hệ trực tiếp qua các kênh dưới đây
        </p>

        <div className={styles.left}>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Tên của bạn"
              className={styles.input}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Nội dung"
              rows="5"
              className={styles.textarea}
              required
            />
            <button type="submit" className={styles.button}>
              Gửi
            </button>
          </motion.form>
          {status && <p className={styles.status}>{status}</p>}
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.contactInfo}>
            <a href="mailto:tranducthinh31125879@gmail.com">
              <FaEnvelope /> tranducthinh31125879@gmail.com
            </a>
            <a href="tel:+84931870656">
              <FaPhone /> +84 931870656
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
