"use client";
import styles from "./doctrine.module.css";
import { motion } from "framer-motion";

const DOCTRINES = [
  {
    number: "01",
    title: "Redemption from Sin",
    text: "We believe strongly in the fact that the world was ravaged by sin, and to that end, God sent his son Jesus Christ to die for humanity, whom in turn obtained an eternal redemption for us, that we are no longer slaves to sin, but have become the righteousness of God in Christ Jesus.",
    scripture: "John 3:16 · Hebrews 9:12 · Romans 6:6 · Ephesians 1:7 · Colossians 1:20",
  },
  {
    number: "02",
    title: "Baptism of the Holy Ghost",
    text: "We believe strongly in the baptism of the Holy Ghost. As it was bestowed on the apostles, we believe in the profound spiritual experience of the Holy Ghost coming upon someone, resulting in deeper intimacy with God, supernatural gifts, and awakenings.",
    scripture: "Acts 1:8 · Mark 1:8 · Acts 2:4",
  },
  {
    number: "03",
    title: "Speaking in Tongues",
    text: "We believe strongly in the gift of speaking in tongues as dispensed by the Holy Spirit. We believe in extraordinary insight, wisdom, and power building up as we pray in other tongues. We believe tongues are essential in the life of every believer for maximum impact.",
    scripture: "Acts 2:4 · 1 Corinthians 14:2,4 · Mark 16:17",
  },
  {
    number: "04",
    title: "Consecration",
    text: "We believe that as Christians, we should be set apart and separate from those that are 'without'. We believe that for the sake of our relationship with God, we should take certain steps to be a vessel through which God can flow.",
    scripture: "1 Timothy 2:19-21 · Leviticus 20:7-8 · Romans 12:1-2",
  },
  {
    number: "05",
    title: "The Second Coming of Christ",
    text: "We believe in the reality of Jesus' Second Coming. We believe that one day, Jesus would appear in the clouds and take his own with him to heaven. He will also judge the living and the dead and establish his dominion forever.",
    scripture: "Matthew 24:30 · Luke 21:27 · Revelation 16:15",
  },
  {
    number: "06",
    title: "Water Baptism",
    text: "We believe in the mystery of baptism by immersion. We believe in baptism being a type and shadow of us being buried with Christ and raised up with him, and in the same vein, old things are passed away.",
    scripture: "Acts 2:38 · Romans 6:3-4 · Colossians 2:12",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Doctrine() {
  return (
    <section className={styles.section} id="doctrine-section">
      {/* Background decorative orbs */}
      <div className={styles.orbTop} />
      <div className={styles.orbBottom} />

      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.span className={styles.label} variants={fadeUp}>
          Our Beliefs
        </motion.span>
        <motion.h2 className={styles.title} variants={fadeUp}>
          Our <span className={styles.accent}>Doctrine</span>
        </motion.h2>
        <motion.p className={styles.intro} variants={fadeUp}>
          As Christians, we have common beliefs and convictions that we hold
          dearly — things that define our Christian faith and distinguish us as
          a community rooted in the Word of God.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        {DOCTRINES.map((d) => (
          <motion.article
            key={d.title}
            className={styles.card}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
          >
            <span className={styles.number}>{d.number}</span>
            <h3 className={styles.cardTitle}>{d.title}</h3>
            <p className={styles.cardText}>{d.text}</p>
            <p className={styles.scripture}>{d.scripture}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}