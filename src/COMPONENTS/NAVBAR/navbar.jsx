import Link from "next/link";
import styles from "./navbar.module.css";
export function Navbar ({}){
    return(
        <div>
            <div className={styles.nav} id="#nav-section">
                <br></br>
                <div className={styles.menu}>
                    <img className={styles.firstimg} src={"IMG-20250723-WA0139.jpg"} height={30}/>  
                    <label className={styles.firsttext}>TU Fellowship</label>
                </div>
                <div className={styles.middlesection}>
                    <label className={styles.text}><Link href="#nav-section" className={styles.link}>Home</Link></label>
                    <label className={styles.text}><Link href="#about-section" className={styles.link}>About</Link></label>
                    <label className={styles.text}><Link href="#event-section" className={styles.link}>Events</Link></label>
                    <label className={styles.text}><Link href="#leadership-section" className={styles.link}>Leadership</Link></label>
                    <label className={styles.text}><Link href="#doctrine-section" className={styles.link}>Doctrine</Link></label>
                    <label className={styles.text}>Contact</label>
                </div>
                <div className={styles.button}>
                    <button className= {styles.click}>Join Us </button>
                </div>
            </div>
        </div>
        
    )
}