"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#nav-section" },
  { label: "About", href: "#about-section" },
  { label: "Events", href: "#event-section" },
  { label: "Leadership", href: "#leadership-section" },
  { label: "Doctrine", href: "#doctrine-section" },
  { label: "Contact", href: "#contact-section" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        id="nav-section"
      >
        <div className={styles.left}>
          <img
            className={styles.logo}
            src="/IMG-20250723-WA0139.jpg"
            height={38}
            width={38}
            alt="TU Fellowship logo"
          />
          <span className={styles.brand}>TU Fellowship</span>
        </div>

        <ul className={styles.links}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a
            href="https://chat.whatsapp.com/Cjgh58V0BIZ8V18D5AOCUQ"
            className={styles.cta}
          >
            Join Us
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {links.map(({ label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={href}
                  className={styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <a
              href="https://chat.whatsapp.com/Cjgh58V0BIZ8V18D5AOCUQ"
              className={styles.mobileCta}
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}