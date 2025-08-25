import styles from "./background.module.css";
export function Background ({}){
    return(
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
                </p>
                <img className={styles.backimg} src="IMG-20250725-WA0037.jpg"/>
            </div>
        </>
    )
}