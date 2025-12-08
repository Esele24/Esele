"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Menu, X} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav} id="nav-section">
        <div className={styles.left_section}>
          <img
            className={styles.logo}
            src="/IMG-20250723-WA0139.jpg"
            height={30}
            alt="logo"
          />
          <p className={styles.fellowship_name}>TU Fellowship</p>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`${styles.nav_links} ${isOpen ? styles.showMenu : ""}`}>
          <li>
            <Link href="#nav-section" className={styles.link} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about-section" className={styles.link} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#event-section" className={styles.link} onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link href="#leadership-section" className={styles.link} onClick={() => setIsOpen(false)}>
              Leadership
            </Link>
          </li>
          <li>
            <Link href="#doctrine-section" className={styles.link} onClick={() => setIsOpen(false)}>
              Doctrine
            </Link>
          </li>
          <li>
            <Link href="#contact-section" className={styles.link} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={styles.navbar_cta}>
            <button 
              className={styles.join_us}
            >
            <a href="https://chat.whatsapp.com/Cjgh58V0BIZ8V18D5AOCUQ">Join Us</a> 
            </button>
          {/* Hamburger Menu */}
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
            </div>
      </nav>
    </>
  )
}