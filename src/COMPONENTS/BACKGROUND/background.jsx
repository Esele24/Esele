import styles from "./background.module.css";
export function Background ({}){
    return(

        <div className={styles.imageBackground}>
            <p className={styles.faithMessage}>
                Fellowship <span className={styles.bottom}>& Faith </span>   
            </p>
            <div className={styles.herotext}>
                <p>
                    Join our vibrant community of faith where students gather to 
                </p>
                <p>
                    grow spiritually, build lasting friendships, and discover God's 
                </p>
                <p >
                    purpose for their lives.
                </p>
            </div>
            
            <button className={styles.join}>
                Join Our Community
            </button>
        </div>

    )
}