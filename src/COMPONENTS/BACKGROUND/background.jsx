import styles from "./background.module.css";
export function Background ({}){
    return(
<<<<<<< HEAD
        <>
            <div className={styles.image}>
                <p className={styles.faith}>
                    <label className={styles.fel}>
                        Fellowship 
                    </label>
                    <label className={styles.bottom}>
                        & Faith 
                    </label>
                    <br></br>
                    <label className={styles.below}>
                        <label className={styles.first}>
                            Join our vibrant community of faith where students gather to 
                        </label>
                        <br></br>
                        <label className={styles.second}>
                            grow spiritually, build lasting friendships, and discover God's 
                        </label>
                        <br></br>
                        <label className={styles.third}>
                            purpose for their lives.
                        </label>
                    </label>
                    <button className={styles.join}>
                        Join Our Community
                    </button>
=======

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
>>>>>>> ae20c13
                </p>
            </div>
<<<<<<< HEAD
        </>
=======
            
            <button className={styles.join}>
                Join Our Community
            </button>
        </div>

>>>>>>> ae20c13
    )
}