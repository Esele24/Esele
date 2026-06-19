"use client";
import styles from "./leadership.module.css";
import { Mail, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Esele E. Okogbo",
    role: "President",
    degree: "B.Sc Software Engineering (in view)",
    bio: "Passionate about creating inclusive spaces for spiritual growth and community building.",
    email: "202300112@topfaith.edu.ng",
    insta: "https://instagram.com/eseleokogbo",
    instaLabel: "eseleokogbo",
    phone: "09036669156",
    img: "/IMG-20250312-WA0069.jpg",
  },
  {
    name: "Precious N. Onah",
    role: "Vice President",
    degree: "LL.B Law (in view)",
    bio: "Dedicated to helping students discover their purpose through faith and fellowship.",
    email: "202100062@topfaith.edu.ng",
    insta: "https://instagram.com/omo_baba17",
    instaLabel: "omo_baba17",
    phone: "08142302738",
    img: "/IMG-20250823-WA0180.jpg",
  },
  {
    name: "Godson O. Jacob",
    role: "Secretary General",
    degree: "LL.B Law (in view)",
    bio: "Dedicated to grooming students' spiritual life through discipleship, mentorship and fellowship.",
    email: "202400323@topfaith.edu.ng",
    insta: "https://instagram.com/godson10011",
    instaLabel: "godson10011",
    phone: "08062169811",
    img: "/IMG-20250801-WA0181.jpg",
  },
  {
    name: "Chibuikem E. Egwu",
    role: "Deputy Secretary General",
    degree: "LL.B Law (in view)",
    bio: "Passionate about souls, prayer, worship, word study, and creating an enabling environment for people to grow in the faith.",
    email: "202300062@topfaith.edu.ng",
    insta: "https://instagram.com/chibuikem_egwu",
    instaLabel: "chibuikem_egwu",
    phone: "08166636128",
    img: "/IMG-20250801-WA0174.jpg",
  },
  {
    name: "Precious I. Michael",
    role: "Treasurer",
    degree: "LL.B Law (in view)",
    bio: "Keeping financial records safe, secure, and fostering accountability within the fellowship.",
    email: "202200098@topfaith.edu.ng",
    insta: "https://instagram.com/michaelprecious727",
    instaLabel: "michaelprecious727",
    phone: "07065882434",
    img: "/IMG-20250803-WA0154(1).jpg",
  },
  {
    name: "Success G. Patrick",
    role: "Public Relations Officer",
    degree: "LL.B Law (in view)",
    bio: "Ensuring healthy PR between fellowship, its members, the school, friends, families, and the world at large.",
    email: "202200179@topfaith.edu.ng",
    insta: "https://instagram.com/_s.u.x.y_",
    instaLabel: "_s.u.x.y_",
    phone: "07050377172",
    img: "/IMG-20250819-WA0250.jpg",
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

function LeaderCard({ person }) {
  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
    >
      <div className={styles.photoWrap}>
        <img
          src={person.img}
          alt={person.name}
          className={styles.photo}
        />
        <div className={styles.photoOverlay} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{person.name}</h3>
        <span className={styles.role}>{person.role}</span>
        <p className={styles.degree}>{person.degree}</p>
        <p className={styles.bio}>{person.bio}</p>

        <div className={styles.contacts}>
          <a
            href={`mailto:${person.email}`}
            className={styles.contactLink}
            title={`Email ${person.name}`}
          >
            <Mail size={14} />
            <span>{person.email}</span>
          </a>
          <a
            href={person.insta}
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
            title={`Instagram: ${person.instaLabel}`}
          >
            <Instagram size={14} />
            <span>{person.instaLabel}</span>
          </a>
          <a
            href={`tel:${person.phone}`}
            className={styles.contactLink}
            title={`Call ${person.name}`}
          >
            <Phone size={14} />
            <span>{person.phone}</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Leadership() {
  return (
    <section className={styles.section} id="leadership-section">
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.span className={styles.label} variants={fadeUp}>
          Our Team
        </motion.span>
        <motion.h2 className={styles.title} variants={fadeUp}>
          Meet Our <span className={styles.accent}>Leadership</span>
        </motion.h2>
        <motion.p className={styles.intro} variants={fadeUp}>
          Meet the dedicated students who serve our fellowship community with
          passion and commitment. They&apos;re here to support you on your
          spiritual journey and help you find your place in our community.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        {leaders.map((person) => (
          <LeaderCard key={person.name} person={person} />
        ))}
      </motion.div>
    </section>
  );
}