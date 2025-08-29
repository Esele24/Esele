"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav} id="nav-section">
      <div className={styles.left_section}>
        <img
          className={styles.logo}
          src="/IMG-20250723-WA0139.jpg"
          height={30}
          alt="logo"
        />
        <p>TU Fellowship</p>
      </div>

      {/* Desktop Links */}
      <ul className={`${styles.nav_links} ${isOpen ? styles.showMenu : ""}`}>
        
        <Link href="#nav-section" className={styles.link}>
            <li>
                Home
            </li>
        </Link>
        <Link href="#about-section" className={styles.link}>
            <li>  
                About           
            </li>
        </Link>
        <Link href="#event-section" className={styles.link}>
            <li>
                Events
            </li>
        </Link>
        <Link href="#leadership-section" className={styles.link}>
            <li>
                Leadership
            </li>
        </Link>
        <Link href="#doctrine-section" className={styles.link}>
            <li> 
                Doctrine
            </li>
        </Link>
        <Link href="#contact-section" className={styles.link}>
            <li>
                Contact
            </li>
        </Link>
      </ul>

      <div className={styles.navbar_cta}>
        <button className={styles.join_us}>Join Us</button>

        {/* Hamburger button (only shows on mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
