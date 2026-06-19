import styles from "./end.module.css";
import { Heart, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "#nav-section" },
  { label: "About", href: "#about-section" },
  { label: "Events", href: "#event-section" },
  { label: "Leadership", href: "#leadership-section" },
  { label: "Doctrine", href: "#doctrine-section" },
  { label: "Contact", href: "#contact-section" },
];

const CONTACT_LINES = [
  { icon: MapPin, text: "Godwin Nwanbunka Hall, Topfaith University" },
  { icon: Mail, text: "info.tufellowships@gmail.com" },
  { icon: Phone, text: "09036669156" },
];

export function End() {
  return (
    <footer className={styles.footer}>
      {/* Wave divider */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="var(--p-950)"
          />
        </svg>
      </div>

      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.brandName}>TU Fellowship</h3>
          <p className={styles.brandDesc}>
            Building a vibrant community of faith where university students can
            grow spiritually, form lasting friendships, and discover their
            purpose in Christ.
          </p>
          <p className={styles.brandHeart}>
            Made with{" "}
            <Heart fill="#f59e0b" color="#f59e0b" size={14} />{" "}
            for our campus community
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={styles.footerLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.contactList}>
            {CONTACT_LINES.map(({ icon: Icon, text }) => (
              <p key={text} className={styles.contactLine}>
                <Icon size={15} className={styles.contactIcon} />
                <span>{text}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      <p className={styles.copyright}>
        &copy; 2025 Topfaith University Fellowship. All rights reserved.
        &nbsp;|&nbsp; Building community through faith.
      </p>
    </footer>
  );
}