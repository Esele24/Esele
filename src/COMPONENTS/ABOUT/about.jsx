import styles from "./about.module.css";
import { Heart } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Star } from "lucide-react";
import { Users } from "lucide-react";

export function About({}) {
    return (
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
                            <label className={styles.point}>Discovering and pursuing</label>
                            <label className={styles.point}>God's calling for our lives</label>
                            <label className={styles.point}>while making a positive</label>
                            <label className={styles.point}>impact on campus.</label>
                        </div>
                    </div>
                </div>
                <div className={styles.midd}>
                    <br />
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
                <br />
                <br />
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
