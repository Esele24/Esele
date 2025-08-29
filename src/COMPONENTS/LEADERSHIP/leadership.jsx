import styles from "./leadership.module.css";
import { Mail, Instagram, Phone } from "lucide-react";
import Link from "next/link";

const leaders = [
  {
    name: "Esele E. Okogbo",
    role: "President",
    degree: "B.Sc Software Engineering (in view)",
    bioLines: [
      "Passionate about creating inclusive",
      "spaces for spiritual growth and",
      "community building",
    ],
    email: "202300112@topfaith.edu.ng",
    insta: "https://instagram.com/eseleokogbo",
    instaLabel: "eseleokogbo",
    phone: "09036669156",
    img: "/IMG-20250312-WA0069.jpg",
    imgAlt: "Esele E. Okogbo",
  },
  {
    name: "Precious N. Onah",
    role: "Vice President",
    degree: "LL.B Law (in view)",
    bioLines: [
      "Dedicated to helping students",
      "discover their purpose through faith",
      "and fellowship.",
    ],
    email: "202100062@topfaith.edu.ng",
    insta: "https://instagram.com/omo_baba17",
    instaLabel: "omo_baba17",
    phone: "08142302738",
    img: "/IMG-20250823-WA0180.jpg",
    imgAlt: "Precious N. Onah",
  },
  {
    name: "Godson O. Jacob",
    role: "Secretary General",
    degree: "LL.B Law (in view)",
    bioLines: [
      "Dedicated to grooming sstudents'",
      "spiritual life through discipleship, mentorship",
      "and fellowship.",
    ],
    email: "202400323@topfaith.edu.ng",
    insta: "https://instagram.com/godson10011",
    instaLabel: "godson10011",
    phone: "08062169811",
    img: "/IMG-20250801-WA0181.jpg",
    imgAlt: "Godson O. Jacob",
  },
  {
    name: "Emmanuel C. Egwu",
    role: "Deputy Secratary General",
    degree: "LL.B Law (in view)",
    bioLines: [
      "Passionate about souls,prayer,worship",
      "word study, and creating an enabling",
      "environment for peopele to grow in the faith",
    ],
    email: "202300062@topfaith.edu.ng",
    insta: "https://instagram.com/chibuikem_egwu",
    instaLabel: "chibuikem_egwu",
    phone: "08166636128",
    img: "/IMG-20250801-WA0174.jpg",
    imgAlt: "Emmanuel C. Egwu",
  },
  {
    name: "Precious I. Michael",
    role: "Treasurer",
    degree: "LL.B Law (in view)",
    bioLines: [
      "Keeping financial records",
      "safe, secure and ",
      "fostering accountability",
    ],
    email: "202200098@topfaith.edu.ng",
    insta: "https://instagram.com/michaelprecious727",
    instaLabel: "michaelprecious727",
    phone: "07065882434",
    img: "/IMG-20250803-WA0154(1).jpg",
    imgAlt: "Precious I. Michael",
  },
  {
    name: "Success G. Patrick",
    role: "Public Relations Officer",
    degree: "LL.B Law (in view)",
    bioLines: [
      "Ensuring healthy PR between fellowship, its",
      "members, the school, friends",
      "families, and thw rold at large",
    ],
    email: "202200179@topfaith.edu.ng",
    insta: "https://instagram.com/_s.u.x.y_",
    instaLabel: "_s.u.x.y_",
    phone: "07050377172",
    img: "/IMG-20250819-WA0250.jpg",
    imgAlt: "Success G. Patrick",
  },
];

function LeaderCard({ person }) {
  return (
    <article className={styles.card} role="listitem">
      <div className={styles.avatar}>
        <img src={person.img} alt={person.imgAlt} className={styles.avatarImg} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.role}>{person.role}</p>
        <p className={styles.degree}>{person.degree}</p>

        <div className={styles.bio}>
          {person.bioLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className={styles.contact}>
          <a className={styles.contactLink} href={`mailto:${person.email}`}>
            <Mail size={18} aria-hidden="true" /> <span>{person.email}</span>
          </a>

          <a className={styles.contactLink} href={person.insta} target="_blank" rel="noreferrer">
            <Instagram size={18} aria-hidden="true" /> <span>{person.instaLabel}</span>
          </a>

          <a className={styles.contactLink} href={`tel:${person.phone}`}>
            <Phone size={18} aria-hidden="true" /> <span>{person.phone}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Leadership() {
  return (
    <section className={styles.leadership} id="leadership-section" aria-labelledby="leadership-heading">
      <header className={styles.header}>
        <h2 id="leadership-heading" className={styles.sectionTitle}>
          <b>Our</b>
        </h2>
        <h1 className={styles.sectionSubtitle}>
          <b>Leadership</b>
        </h1>

        <p className={styles.intro}>
          Meet the dedicated students who serve our fellowship community with passion and
          <br />
          commitment. They're here to support you on your spiritual journey and help you find
          <br />
          your place in our community.
        </p>
      </header>

      <div className={styles.list} role="list" aria-label="Leadership team list">
        {leaders.map((p) => (
          <LeaderCard key={p.name} person={p} />
        ))}
      </div>
    </section>
  );
}
