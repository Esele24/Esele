"use client";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { Heart, BookOpen, Star, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const CORE_VALUES = [
  {
    icon: Heart,
    label: "Faith-Centered",
    text: "Growing together in our relationship with Christ through prayer, worship, and deep Bible study.",
  },
  {
    icon: Users,
    label: "Community",
    text: "Building meaningful friendships and supporting each other through university life and beyond.",
  },
  {
    icon: BookOpen,
    label: "Learning",
    text: "Exploring God's word together and applying biblical principles to our daily lives as students.",
  },
  {
    icon: Star,
    label: "Purpose",
    text: "Discovering and pursuing God's calling for our lives while making a positive impact on campus.",
  },
];

const founders = [
  "Marylyn A. Ibem",
  "Precious N. Onah",
  "Mfonido O. Akpabio",
  "Imadara O. Akpabio",
];

export function About() {
  return (
    <section className={styles.about} id="about-section">
      {/* Section header */}
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.span className={styles.label} variants={fadeUp}>
          About Us
        </motion.span>
        <motion.h2 className={styles.title} variants={fadeUp}>
          About Our <span className={styles.accent}>Fellowship</span>
        </motion.h2>
        <motion.p className={styles.intro} variants={fadeUp}>
          We are a diverse community of Topfaith University students united by
          our faith in Jesus Christ. Our fellowship provides a welcoming space
          for spiritual growth, authentic relationships, and purposeful living
          during your university journey.
        </motion.p>
      </motion.div>

      {/* Core values grid */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        {CORE_VALUES.map(({ icon: Icon, label, text }) => (
          <motion.article
            key={label}
            className={styles.card}
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.22 } }}
          >
            <div className={styles.iconWrap}>
              <Icon size={26} color="white" />
            </div>
            <h3 className={styles.cardTitle}>{label}</h3>
            <p className={styles.cardText}>{text}</p>
          </motion.article>
        ))}
      </motion.div>

      {/* Founders marquee */}
      <motion.div
        className={styles.foundersWrap}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <h4 className={styles.foundersTitle}>Our Founders</h4>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeLine}>
            {[...founders, ...founders, ...founders].map((name, i) => (
              <span key={i} className={styles.chip}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className={styles.mvGrid}>
        <motion.div
          className={styles.mvCard}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.mvEmoji}>🎯</span>
          <h3 className={styles.mvTitle}>Our Mission</h3>
          <p className={styles.mvText}>
            &ldquo;To create a vibrant community where university students can
            experience God&apos;s love, grow in their faith, build lasting
            friendships, and discover their purpose in Christ while navigating
            the challenges and opportunities of university life.&rdquo;
          </p>
        </motion.div>

        <motion.div
          className={`${styles.mvCard} ${styles.mvVision}`}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.mvEmoji}>👁️</span>
          <h3 className={styles.mvTitle}>Our Vision</h3>
          <p className={styles.mvText}>
            &ldquo;We see a time when nobody would need to tell the students of
            Topfaith University about Christ, because they will all know him,
            they will all pray to him, praise, and worship him.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}