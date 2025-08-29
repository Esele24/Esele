import styles from "./about.module.css";
import { Heart } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Star } from "lucide-react";
import { Users } from "lucide-react";
<<<<<<< HEAD
export function About ({}){
    return(
        <>
            <div className={styles.about} id="about-section">
                <div className={styles.begin}>
                    <div className={styles.top}>
                        <label className={styles.txt}>
                            <b>About Our</b>
                        </label>
                        <label className={styles.fell}>
                            <b>Fellowship</b>
                        </label>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.mission}>
                            <label className={styles.text}>
                                We are a diverse community of university students united by our faith in Jesus Christ.
                            </label>
                            <label className={styles.mid}>
                                Our fellowship provides a welcoming space for spiritual growth, authentic
                            </label>
                            <label className={styles.end}>
                                relationships, and purposeful living during your university journey.
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.founders}>
                    <label className={styles.found}>Established, 2022</label>
                    <label className={styles.found}>Our Founders</label>
                    <div className={styles.yours}>
                        <label className={styles.founds}>Marylyn A. Ibem,</label>
                        <label className={styles.founds}>Precious N. Onah,</label>
                        <label className={styles.founds}>Mfonido O. Akpabio,</label>
                        <label className={styles.founds}>Imadara O. Akpabio</label>
                    </div>
                </div>
                <div className={styles.objectives}>
                    <div className={styles.stack}>
                        <div className={styles.circle}>
                            <Heart fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poin}>Faith-Centered</label>
                            <br></br>
                            <label className={styles.point}>Growing together in our</label>
                            <label className={styles.point}>relationship with Christ</label>
                            <label className={styles.point}>through prayer, worship, and</label>
                            <label className={styles.point}>bible study.</label>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <div className={styles.square}>
                            <Users fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poi}>Community</label>
                            <br></br>
                            <label className={styles.point}>Building meaningful</label>
                            <label className={styles.point}>friendships and supporting</label>
                            <label className={styles.point}>each other through university</label>
                            <label className={styles.point}>life and beyond.</label>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <div className={styles.cube}>
                            <BookOpen fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poii}>Learning</label>
                            <br></br>
                            <label className={styles.point}>Exploring God's word</label>
                            <label className={styles.point}>together and applying biblical</label>
                            <label className={styles.point}>principles to our daily lives as</label>
                            <label className={styles.point}>students.</label>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <div className={styles.triangle}>
                            <Star fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poiii}>Purpose</label>
                            <br></br>
                            <label className={styles.point}>Discovering and pursuing</label>
                            <label className={styles.point}>God's calling for our lives</label>
                            <label className={styles.point}>while making a positive</label>
                            <label className={styles.point}>impact on campus.</label>
                        </div>
                    </div>
                </div>
                <div className={styles.midd}>
                    <br></br>
                    <div className={styles.tyype}>
                        <label>Our Mission</label>
                    </div>
                    <div className={styles.types}>
                        <center>
                            <label>"To create a vibrant community where university students can experience God's love, grow</label>
                            <label>in their faith, build lasting friendships, and discover their purpose in Christ while navigating</label>
                            <label>the challenges and opportunities of university life."</label>
                        </center>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className={styles.pop}>
                    <div className={styles.type}>
                        <label>Our Vision</label>
                    </div>
                    <div className={styles.typess}>
                        <center>
                            <label>"We see a time when nobody would need to tell the students of</label>
                            <label>Topfaith University about Christ, because they will all know him</label>
                            <label>they will all pray to him, praise, and worship him"</label>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}
=======

export function About({}) {
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
              We are a diverse community of university students united by our faith in Jesus Christ.
            </p>

            <p className={styles.mid}>
              Our fellowship provides a welcoming space for spiritual growth, authentic
            </p>

            <p className={styles.end}>
              relationships, and purposeful living during your university journey.
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
>>>>>>> ae20c13
