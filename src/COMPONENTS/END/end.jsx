import styles from "./end.module.css"
import { Heart } from "lucide-react"
import { MapPin } from "lucide-react"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import Link from "next/link"
export function End({}){
    return(
        <div>
            <div className={styles.end}>
                <div className={styles.ends}>
                    <br></br>
                    <div className={styles.campus}>
                        <label className={styles.camp}>TU Fellowship</label>
                        <br></br>
                        <br></br>
                        <label className={styles.camps}>Building a vibrant community of faith where university students can grow spiritually,</label>
                        <br></br>
                        <label className={styles.camps}>form lasting friendships, and discover their purpose in Christ</label>
                        <br></br>
                        <br></br>
                        <label className={styles.camps}>Made with <Heart fill="none" color="yellow" size={15}/> for our campus community</label>
                    </div>
                    <div className={styles.campuss}>
                        <label className={styles.campss}>Quick Links</label>
                        <br></br>
                        <br></br>
                        <label className={styles.camps}><Link href="#nav-section" className={styles.links}>Home</Link></label>
                        <br></br>
                        <label className={styles.camps}><Link href="#about-section" className={styles.links}>About</Link></label>
                        <br></br>
                        <label className={styles.camps}><Link href="#event-section" className={styles.links}>Events</Link></label>
                        <br></br>
                        <label className={styles.camps}><Link href="#leadership-section" className={styles.links}>Leadership</Link></label>
                        <br></br>
                        <label className={styles.camps}><Link href="#doctrine-section" className={styles.links}>Doctrine</Link></label>
                        <br></br>
                        <label className={styles.camps}><Link href="#contact-section" className={styles.links}>Contact</Link></label>
                    </div>
                    <div className={styles.campuss}>
                        <label className={styles.campss}>Contact</label>
                        <br></br>
                        <br></br>
                        <label className={styles.cammps}><MapPin fill="navy" color="white" size={20}/>Godwin Nwanbunka Hall</label>
                        <br></br>
                        <label className={styles.cammps}><Mail fill="none" color="white" size={20}/>info.tufellowships@gmail.com</label>
                        <br></br>
                        <label className={styles.cammps}><Phone fill="navy" color="white" size={20}/>09036669156</label>
                    </div>
                </div>
                <div className={styles.under}></div>
                <div className={styles.line}>
                    <center>&copy; 2025 Campus Fellowship. All rights reserved. | Building community through faith</center>
                </div>
            </div>
        </div>
    )
}