"use client";
import styles from "./background.module.css";
import { motion } from "framer-motion";

export function Background() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          ✦ Topfaith University
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Fellowship
          <br />
          <span className={styles.accent}>&amp; Faith</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          Join our vibrant community of faith where students gather to grow
          spiritually, build lasting friendships, and discover God&apos;s
          purpose for their lives.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
        >
          <a
            href="https://chat.whatsapp.com/Cjgh58V0BIZ8V18D5AOCUQ"
            className={styles.primaryBtn}
          >
            Join Our Community
          </a>
          <a href="#about-section" className={styles.secondaryBtn}>
            Discover More
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut", delay: 2 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </div>
  );
}