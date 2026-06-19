"use client";
import styles from "./events.module.css";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const EVENTS = [
  {
    title: "Weekly Fellowship Meeting",
    accentColor: "#7c3aed",
    details: [
      { icon: Calendar, text: "Every Thursday" },
      { icon: Clock, text: "6:30 PM – 7:45 PM" },
      { icon: MapPin, text: "Godwin Nwabunka Hall" },
      { icon: Users, text: "Open to students & staff" },
    ],
    description:
      "Join us for worship, biblical teaching, and fellowship. A great way to connect with other students and grow in faith.",
  },
  {
    title: "Campus Prayer Walk",
    accentColor: "#f59e0b",
    details: [
      { icon: Calendar, text: "Last Thursday of every semester" },
      { icon: Clock, text: "6:00 PM" },
      { icon: MapPin, text: "Around the University" },
      { icon: Users, text: "Open to students & staff" },
    ],
    description:
      "End the semester with prayer as we walk around campus, interceding for our university, students, and as the Spirit leads us.",
  },
  {
    title: "Monthly Prayer Meeting",
    accentColor: "#6d28d9",
    details: [
      { icon: Calendar, text: "2nd Thursday of every month" },
      { icon: Clock, text: "6:30 PM – 7:45 PM" },
      { icon: MapPin, text: "Godwin Nwabunka Hall" },
      { icon: Users, text: "Open to students & staff" },
    ],
    description:
      "Join us for an impactful prayer session as we bask in God's presence with an atmosphere of deep prayer and worship.",
  },
  {
    title: "Monthly Q & A",
    accentColor: "#059669",
    details: [
      { icon: Calendar, text: "Last Thursday of every month" },
      { icon: Clock, text: "6:30 PM – 7:45 PM" },
      { icon: MapPin, text: "Godwin Nwabunka Hall" },
      { icon: Users, text: "Open to students & staff" },
    ],
    description:
      "Have burning questions about the Bible, Doctrine, or Christianity? Join us as we, by the Spirit, give honest answers to your questions.",
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
  visible: { transition: { staggerChildren: 0.12 } },
};

export function Events() {
  return (
    <section className={styles.events} id="event-section">
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.span className={styles.label} variants={fadeUp}>
          Events
        </motion.span>
        <motion.h2 className={styles.title} variants={fadeUp}>
          Upcoming <span className={styles.accent}>Events</span>
        </motion.h2>
        <motion.p className={styles.intro} variants={fadeUp}>
          Join us for meaningful gatherings that strengthen our faith and build
          community. All students are welcome, regardless of where you are in
          your spiritual journey.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        {EVENTS.map((event) => (
          <motion.article
            key={event.title}
            className={styles.card}
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
          >
            <div
              className={styles.cardTop}
              style={{ background: event.accentColor }}
            />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <ul className={styles.details}>
                {event.details.map(({ icon: Icon, text }) => (
                  <li key={text} className={styles.detail}>
                    <span className={styles.detailIcon}>
                      <Icon size={15} />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.description}>{event.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}