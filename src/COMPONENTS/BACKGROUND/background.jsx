import styles from "./background.module.css";
import { motion } from "framer-motion";
export function Background (){
    return(
        <>
        <div className={styles.imageBackground}>
            <p className={styles.faithMessage}>
                              <motion.o
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 , ease: "easeOut" }} // delay for a stagger effect
      >
                Fellowship 
                   </motion.o>
                <span className={styles.bottom}>
                     <motion.o
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut"}} // delay for a stagger effect
        transform={{scale:25}}
      >
                    & Faith 
                </motion.o>
                    </span>   
            </p>
            <div className={styles.herotext}>
                     <motion.o
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2.0, ease: "easeOut"}} // delay for a stagger effect
      >
        
                <p>
                    Join our vibrant community of faith where students gather to 
                </p>
                <p>
                    grow spiritually, build lasting friendships, and discover God's 
                </p>
                <p>
                    purpose for their lives.
                </p>
                  </motion.o>
            </div>
             <motion.o
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2.0, ease: "easeOut"}} // delay for a stagger effect
      >
            <button className={styles.join}>
                Join Our Community
            </button>
            </motion.o>
        </div>
        </>
    )
}