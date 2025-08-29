// src/COMPONENTS/BACKGROUND/background.jsx
import styles from "./background.module.css";

export function Background({}) {
  return (
    <>
      <div className={styles.image}>
        <p className={styles.faith}>
          <label className={styles.fel}>Fellowship</label>
          <label className={styles.bottom}>&nbsp;Faith</label>
          <br />
          <label className={styles.below}>
            <label className={styles.first}>
              Join our vibrant community of faith where students gather to
            </label>
            <br />
            <label className={styles.second}>
              grow spiritually, build lasting friendships, and discover God's
            </label>
            <br />
            <label className={styles.third}>purpose for their lives.</label>
          </label>
        </p>

        <button className={styles.join}>Join Our Community</button>
      </div>
    </>
  );
}

export default Background;
