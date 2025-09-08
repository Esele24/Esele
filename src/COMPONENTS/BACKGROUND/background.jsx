import styles from "./background.module.css";
import { motion } from "framer-motion";
export function Background ({}){
    return(
        <>
        <div className={styles.imageBackground}>
            <p className={styles.faithMessage}>
                              <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} // delay for a stagger effect
        className="mt-4 text-lg text-gray-600"
      >
                Fellowship 
                   </motion.p>
                <span className={styles.bottom}>
                     <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut"}} // delay for a stagger effect
        className="mt-4 text-lg text-gray-600"
      >
                    & Faith 
                </motion.p>
                    </span>   
            </p>
            <div className={styles.herotext}>
                <p>
                    Join our vibrant community of faith where students gather to 
                </p>
                <p>
                    grow spiritually, build lasting friendships, and discover God's 
                </p>
                <p>
                    purpose for their lives.
                </p>
            </div>
            
            <button className={styles.join}>
                Join Our Community
            </button>
        </div>
        </>
    )
}