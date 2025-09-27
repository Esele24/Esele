import styles from "./about.module.css";
import { Heart } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Star } from "lucide-react";
import { Users } from "lucide-react";

export function About() {
  return (
    <section className={styles.about} id="about-section" aria-labelledby="about-heading">
      {/* Intro / Header */}
      <header className={styles.begin}>
        <div className={styles.top}>
          <h2 id="about-heading" className={styles.txt}>
            <b>About Our</b>
          </h2>
          <h1 className={styles.fell}>
            <b>Fellowship</b>
          </h1>
        </div>

        <div className={styles.bottom}>
          <div className={styles.mission}>
            <p className={styles.text}>
              We are a diverse community of Topfaith yuniversity students united by our faith in Jesus Christ.
            </p>

            <p className={styles.mid}>
              Our fellowship provides a welcoming space for spiritual growth, authentic
            </p>

            <p className={styles.end}>
              relationships, and purposeful living during your university journey.
            </p>
          </div>
          <div className={styles.missions}>
            <p className={styles.text}>
              Our Founders
            </p>

            <p className={styles.miid}>
              Marylyn A. Ibem, Precious N. Onah, Mfonido O. Akpabio, Imadara O. Akpabio
            </p>

          </div>
        </div>
      </header>

      {/* Objectives / Features */}
      <div className={styles.objectives} aria-label="Core objectives">
        <article className={styles.stack}>
          <div className={styles.circle} aria-hidden="true">
            <Heart fill="rgb(100, 30, 167)" color="white" size={40} />
          </div>

          <div className={styles.faith}>
            <h3 className={styles.poin}>Faith-Centered</h3>
            <p className={styles.point}>Growing together in our</p>
            <p className={styles.point}>relationship with Christ</p>
            <p className={styles.point}>through prayer, worship, and</p>
            <p className={styles.point}>bible study.</p>
          </div>
        </article>

        <article className={styles.stack}>
          <div className={styles.square} aria-hidden="true">
            <Users fill="rgb(100, 30, 167)" color="white" size={40} />
          </div>

          <div className={styles.faith}>
            <h3 className={styles.poi}>Community</h3>
            <p className={styles.point}>Building meaningful</p>
            <p className={styles.point}>friendships and supporting</p>
            <p className={styles.point}>each other through university</p>
            <p className={styles.point}>life and beyond.</p>
          </div>
        </article>

        <article className={styles.stack}>
          <div className={styles.cube} aria-hidden="true">
            <BookOpen fill="rgb(100, 30, 167)" color="white" size={40} />
          </div>

          <div className={styles.faith}>
            <h3 className={styles.poii}>Learning</h3>
            <p className={styles.point}>Exploring God's word</p>
            <p className={styles.point}>together and applying biblical</p>
            <p className={styles.point}>principles to our daily lives as</p>
            <p className={styles.point}>students.</p>
          </div>
        </article>

        <article className={styles.stack}>
          <div className={styles.triangle} aria-hidden="true">
            <Star fill="rgb(100, 30, 167)" color="white" size={40} />
          </div>

          <div className={styles.faith}>
            <h3 className={styles.poiii}>Purpose</h3>
            <p className={styles.point}>Discovering and pursuing</p>
            <p className={styles.point}>God's calling for our lives</p>
            <p className={styles.point}>while making a positive</p>
            <p className={styles.point}>impact on campus.</p>
          </div>
        </article>
      </div>

      {/* Mission block */}
      <section className={styles.midd} aria-labelledby="mission-heading">
        <h4 id="mission-heading" className={styles.tyype}>
          Our Mission
        </h4>

        <div className={styles.types}>
          <p>
            "To create a vibrant community where university students can experience God's love, grow
            in their faith, build lasting friendships, and discover their purpose in Christ while navigating
            the challenges and opportunities of university life."
          </p>
        </div>
      </section>

      {/* Vision block */}
      <section className={styles.pop} aria-labelledby="vision-heading">
        <h4 id="vision-heading" className={styles.type}>
          Our Vision
        </h4>
        <p>
            "We see a time when nobody would need to tell the students of
            Topfaith University about Christ, because they will all know him
            they will all pray to him, praise, and worship him"
        </p>
      </section>
    </section>
  );
}
