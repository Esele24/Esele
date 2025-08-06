import styles from "./about.module.css";
import { Heart } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Star } from "lucide-react";
import { Users } from "lucide-react";
export function About ({}){
    return(
        <div>
            <div className={styles.about} id="about-section">
                <br></br>
                <div className={styles.begin}>
                    <br></br>
                    <div className={styles.top}>
                        <label className={styles.txt}>
                            <b>About Our</b>
                        </label>
                        <br></br>
                        <label className={styles.fell}>
                            <b>Fellowship</b>
                        </label>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.mission}>
                            <label className={styles.text}>
                                We are a diverse community of university students united by our faith in Jesus Christ.
                            </label>
                            <br></br>
                            <label className={styles.mid}>
                                Our fellowship provides a welcoming space for spiritual growth, authentic
                            </label>
                            <label className={styles.end}>
                                relationships, and purposeful living during your university journey
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.objectives}>
                    <div className={styles.stack}>
                        <div className={styles.circle}>
                            <Heart fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <br></br>
                        <div className={styles.faith}>
                            <label className={styles.poin}>Faith-Centered</label>
                            <br></br>
                            <br></br>
                            <label className={styles.point}>Growing together in our</label>
                            <label className={styles.point}>relationship with Christ</label>
                            <label className={styles.point}>through prayer, worship, and</label>
                            <label className={styles.point}>biblical study.</label>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <div className={styles.square}>
                            <Users fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poi}>Community</label>
                            <br></br>
                            <br></br>
                            <label className={styles.point}>Building meaningful</label>
                            <label className={styles.point}>riendships and supporting</label>
                            <label className={styles.point}>each other through university</label>
                            <label className={styles.point}>life and beyond</label>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <div className={styles.cube}>
                            <BookOpen fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poi}>Learning</label>
                            <br></br>
                            <br></br>
                            <label className={styles.point}>Exploring God's word</label>
                            <label className={styles.point}>together and applying biblical</label>
                            <label className={styles.point}>principles to our daily lives as</label>
                            <label className={styles.point}>students</label>
                        </div>
                    </div>
                    <div className={styles.stack}>
                        <div className={styles.triangle}>
                            <Star fill="rgb(100, 30, 167)" color="white" size={40}/> 
                        </div> 
                        <div className={styles.faith}>
                            <label className={styles.poi}>Purpose</label>
                            <br></br>
                            <br></br>
                            <label className={styles.point}>Discovering and pursuing</label>
                            <label className={styles.point}>God's calling for our live</label>
                            <label className={styles.point}>while making a positive</label>
                            <label className={styles.point}>impact on campus.</label>
                        </div>
                    </div>
                </div>
                <div className={styles.midd}>
                    <br></br>
                    <div className={styles.type}>
                        <center><label>Our Mission</label></center>
                    </div>
                    <div className={styles.types}>
                        <center>
                            <label>"To create a vibrant community where university students can experience God's love, grow</label>
                            <br></br>
                            <label>in their faith, build lasting friendships, and discover their purpose in Christ while navigating</label>
                            <label>the challenges and opportunities of university life."</label>
                        </center>
                    </div>
                </div>
                <div className={styles.pop}>
                    <div className={styles.type}>
                        <br></br>
                        <br></br>
                        <center><label>Our Vision</label></center>
                    </div>
                    <div className={styles.types}>
                        <center>
                            <label>"We see a time when nobody would need to tell the students of</label>
                            <br></br>
                            <label>Topfaith University about Christ, because they will all know him</label>
                            <br></br>
                            <label>they will all pray to him, praise, and worship him"</label>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}