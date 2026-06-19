"use client";
import styles from "./contact.module.css";
import { MapPin, Clock, Mail, Phone, CheckCircle } from "lucide-react";
import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Meeting Location",
    lines: ["Godwin Nwanbunka Hall", "Behind the Library", "Topfaith University"],
  },
  {
    icon: Clock,
    title: "Meeting Times",
    lines: [
      "Weekly Fellowship: Thursdays, 6:30 PM",
      "Monthly Q&A: Last Thursday of every month",
      "Monthly Prayers: 2nd Thursday of every month",
    ],
  },
  {
    icon: Mail,
    title: "Mail Us",
    lines: [
      "info.tufellowships@gmail.com",
      "202300112@topfaith.edu.ng",
      "202200179@topfaith.edu.ng",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      "President: 09036669156",
      "Vice President: 08142302738",
      "Secretary General: 08062169811",
    ],
  },
];

const SOCIALS = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/tu_fellowships",
  },
  {
    icon: FaSpotify,
    label: "Spotify",
    href: "https://open.spotify.com/show/0voZtfepu40d36nLjYK6nT?si=52067f57fc1642d7np",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com/@tu_fellowship?si=zMp7qgmGO9H7oEPO",
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

export function Contact() {
  const [state, handleSubmit] = useForm("xwprpeql");

  if (state.succeeded) {
    return (
      <section className={styles.section} id="contact-section">
        <motion.div
          className={styles.success}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle size={56} color="var(--p-500)" strokeWidth={1.5} />
          <h3 className={styles.successTitle}>Message Sent!</h3>
          <p className={styles.successText}>
            Thank you for reaching out. We&apos;ll get back to you soon.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="contact-section">
      <motion.div
        className={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.span className={styles.label} variants={fadeUp}>
          Contact
        </motion.span>
        <motion.h2 className={styles.title} variants={fadeUp}>
          Get In <span className={styles.accent}>Touch</span>
        </motion.h2>
        <motion.p className={styles.intro} variants={fadeUp}>
          We&apos;d love to hear from you! Whether you have questions, want to
          get involved, or just want to connect — don&apos;t hesitate to reach
          out.
        </motion.p>
      </motion.div>

      <div className={styles.layout}>
        {/* Form card */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className={styles.formTitle}>Send Us a Message</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="firstName" className={styles.fieldLabel}>
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className={styles.input}
                  type="text"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="lastName" className={styles.fieldLabel}>
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className={styles.input}
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                className={styles.input}
                type="email"
                placeholder="regNo@topfaith.edu.ng"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone" className={styles.fieldLabel}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                className={styles.input}
                type="tel"
                placeholder="(234) XXX XXX XXX"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="year" className={styles.fieldLabel}>
                Year in School
              </label>
              <input
                id="year"
                name="year"
                className={styles.input}
                type="text"
                placeholder="e.g. JUPEB, 100 Level, Final Year"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Tell us about yourself or any questions you have…"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className={styles.submitBtn}
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending…" : "Send Message →"}
            </button>
          </form>
        </motion.div>

        {/* Info panel */}
        <motion.aside
          className={styles.infoPanel}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {INFO_CARDS.map(({ icon: Icon, title, lines }) => (
            <div key={title} className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <Icon size={20} color="white" />
              </div>
              <div>
                <p className={styles.infoTitle}>{title}</p>
                {lines.map((l, i) => (
                  <p key={i} className={styles.infoLine}>
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className={styles.socialCard}>
            <p className={styles.socialTitle}>Follow Us</p>
            <div className={styles.socials}>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}