"use client";
import styles from "./leadership.module.css";
import { Mail, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Okogbo, Esele Emmanuel",
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
    name: "Ike, Isabel Amarachi",
    role: "Vice President",
    degree: "LL.B Law (in view)",
    bio: "Dedicated to helping students discover their purpose through faith and fellowship.",
    email: "202300045@topfaith.edu.ng",
    insta: "https://instagram.com/ikeisabelamarachi",
    instaLabel: "ikeisabelamarachi",
    phone: "09059291864",
    img: "/IMG-20260620-WA0052.jpg",
    // Crop to keep Isabel in frame and push the other person out of the circle.
    // Tweak: scale zooms in; objectPosition shifts which part stays visible
    // (e.g. "30% 25%" = show the left side; "70% 25%" = show the right side).
    // mediaFocus: { scale: 1.32, objectPosition: "50% 25%" },
  },
  {
    name: "Jacob, Godson Okon",
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
    name: "Egwu, Chibuikem Emmanuel",
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
    name: "Michael, Precious Idara",
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
    name: "Patrick, Success Godswill",
    role: "Public Relations Officer",
    degree: "LL.B Law (in view)",
    bio: "Ensuring healthy PR between fellowship, its members, the school, friends, families, and the world at large.",
    email: "202200179@topfaith.edu.ng",
    insta: "https://instagram.com/_s.u.x.y_",
    instaLabel: "_s.u.x.y_",
    phone: "07050377172",
    img: "/IMG-20250819-WA0250.jpg",
  },
  {
    name: "Udok, Hope Imeh",
    role: "Welface Co-ordinator",
    degree: "LL.B Law (in view)",
    bio: "Dedicated to promoting the well-being and welfare of fellow students.",
    email: "202200048@topfaith.edu.ng",
    insta: "https://instagram.com/affiliatewithhope",
    instaLabel: "affiliatewithhope",
    phone: "09064922353",
    img: "",
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

// Renders a looping muted video for video files, otherwise an image.
// `focus` optionally crops the media via { scale, objectPosition }.
function Media({ src, alt, className, focus }) {
  const isVideo = /\.(mp4|webm|mov|ogg)$/i.test(src);
  const style = focus
    ? {
        transform: focus.scale ? `scale(${focus.scale})` : undefined,
        objectPosition: focus.objectPosition,
      }
    : undefined;
  if (isVideo) {
    return (
      <video
        className={className}
        src={src}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    );
  }
  return <img src={src} alt={alt} className={className} style={style} />;
}

function LeaderCard({ person }) {
  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
    >
      <div className={styles.photoWrap}>
        <Media
          src={person.img}
          alt={person.name}
          className={styles.photo}
          focus={person.mediaFocus}
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