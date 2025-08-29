import styles from "./end.module.css"
import { Heart, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function End() {
  return (
    <footer className={styles.end}>
      <div className={styles.ends}>
        
        {/* Left: Mission */}
        <div className={styles.campus}>
          <h3 className={styles.camp}>TU Fellowship</h3>
          <p className={styles.camps}>
            Building a vibrant community of faith where university students can grow spiritually,
            form lasting friendships, and discover their purpose in Christ.
          </p>
          <p className={styles.camps}>
            Made with <Heart fill="none" color="yellow" size={15}/> for our campus community
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className={styles.campuss}>
          <h3 className={styles.campss}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link href="#nav-section" className={styles.links}>Home</Link></li>
            <li><Link href="#about-section" className={styles.links}>About</Link></li>
            <li><Link href="#event-section" className={styles.links}>Events</Link></li>
            <li><Link href="#leadership-section" className={styles.links}>Leadership</Link></li>
            <li><Link href="#doctrine-section" className={styles.links}>Doctrine</Link></li>
            <li><Link href="#contact-section" className={styles.links}>Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className={styles.campuss}>
          <h3 className={styles.campss}>Contact</h3>
          <p className={styles.cammps}><MapPin size={20}/> Godwin Nwanbunka Hall</p>
          <p className={styles.cammps}><Mail size={20}/> info.tufellowships@gmail.com</p>
          <p className={styles.cammps}><Phone size={20}/> 09036669156</p>
        </div>
      </div>

      <div className={styles.under}></div>
      <div className={styles.line}>
        &copy; 2025 Topfaith University Fellowship. All rights reserved. | Building community through faith
      </div>
    </footer>
  )
}
