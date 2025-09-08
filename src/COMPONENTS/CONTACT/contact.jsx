import styles from "./contact.module.css";
import { MapPin, Clock, Mail, Phone, Instagram } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
const infoCards = [
  {
    title: "Meeting Location",
    icon: MapPin,
    lines: ["Godwin Nwanbunka Hall", "Behind the Library", "Topfaith University"],
  },
  {
    title: "Meeting Times",
    icon: Clock,
    lines: [
      "Weekly Fellowship: Thursdays, 6:30PM",
      "Monthly Q & A: Last Thursday of every month",
      "Monthly Prayers: Second Thursday of every month",
    ],
  },
  {
    title: "Mail Us",
    icon: Mail,
    lines: [
      "info.tufellowships@gmail.com",
      "202300112@topfaith.edu.ng",
      "202200179@topfaith.edu.ng",
    ],
  },
  {
    title: "Call Us",
    icon: Phone,
    lines: [
      "President: 09036669156",
      "Vice President: 08142302738",
      "Secretary General: 08062169811",
    ],
  },
];

export function Contact() {
  return (
    <section className={styles.contact} id="contact-section" aria-labelledby="contact-heading">
      <header className={styles.begin}>
        <div className={styles.top}>
          <h2 id="contact-heading" className={styles.txt}><b>Get In</b></h2>
          <h1 className={styles.fell}><b>Touch</b></h1>
        </div>

        <p className={styles.mission}>
          <span className={styles.text}>
            We'd love to hear from you! Whether you have questions, want to get involved, or just
          </span>
          <br />
          <span className={styles.mid}>want to connect, don't hesitate to reach out.</span>
        </p>
      </header>

      <div className={styles.styles}>
        {/* Form column */}
        <article className={styles.send} aria-labelledby="contact-form-title">
          <h3 id="contact-form-title" className={styles.message}>Send Us a Message</h3>

          <form className={styles.form} action="" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.display}>
              <div className={styles.name}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" className={styles.input} type="text" placeholder="  Your first name" />
              </div>

              <div className={styles.name}>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" className={styles.input} type="text" placeholder="  Your last name" />
              </div>
            </div>

            <div className={styles.names}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" className={styles.input} type="email" placeholder="  reg no@topfaith.edu.ng" required />
            </div>

            <div className={styles.names}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" className={styles.input} type="tel" placeholder="  (234) XXX XXX XXX" required />
            </div>

            <div className={styles.names}>
              <label htmlFor="year">Year in School</label>
              <input id="year" name="year" className={styles.input} type="text" placeholder="  e.g. JUPEB, IUFP, 100lvl, 300lvl, Final Year" required />
            </div>

            <div className={styles.namess}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className={styles.textarea} placeholder="  Tell us about yourself or any questions you might have..." required />
            </div>

            <button className={styles.namesss} type="submit">Send Message</button>
          </form>
        </article>

        {/* Info column */}
        <aside className={styles.places} aria-label="Contact details">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className={styles.item}>
                <div className={styles.icon}>
                  <Icon fill="navy" color="white" size={40} className={styles.op} />
                </div>
              
                <div className={styles.texts}>
                  <div className={styles.label}><strong>{card.title}</strong></div>
                  <div className={styles.labels}>
                    {card.lines.map((l, i) => (
                      <div key={i} className={styles.line}>{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Social row */}
          <div className={styles.itemsss}>
            <div className={styles.icons}>
              <span className={styles.socialTitle}>Follow Us On Social Media</span>
            </div>

            <div className={styles.div}>
              <div className={styles.isa}>
                <Instagram fill="navy" color="white" size={22} className={styles.op} />
                <Link className={styles.link} href="https://instagram.com/tu_fellowships">Instagram</Link>
              </div>

              <div className={styles.isa}>
                <FaSpotify fill="navy" color="white" size={22} className={styles.op} />
                <Link className={styles.link} href="https://spotify.com/">Spotify</Link>
              </div>
            </div>

            <div className={styles.isab}>
              <FaYoutube fill="navy" color="white" size={22} className={styles.op} />
              <Link className={styles.link} href="https://youtube.com/@tu_fellowship?si=zMp7qgmGO9H7oEPO">YouTube</Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
