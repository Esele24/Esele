import styles from "./events.module.css";
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";

export function Events({}) {
  return (
    <>
      <div className={styles.upcoming} id="event-section">
        <div className={styles.begin}>
          <div className={styles.top}>
            <label className={styles.txt}>
              <b>Upcoming</b>
            </label>
            <label className={styles.fell}>
              <b>Events</b>
            </label>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.mission}>
            <label className={styles.text}>
              Join us for meaningful gatherings that strengthen our faith and build community. All
            </label>
            <label className={styles.mid}>
              students are welcome, regardless of where you are in your spiritual journey.
            </label>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.weekly}>
            <div className={styles.loop}>
              <div className={styles.topp}></div>
              <div className={styles.meeting}>
                <label>Weekly Fellowship Meeting</label>
                <div className={styles.first}>
                  <Calendar fill="white" color="navy" size={35} />
                  <label>Every Thursday</label>
                </div>
                <div className={styles.first}>
                  <Clock fill="none" color="navy" size={35} />
                  <label>6:30pm-7:45pm</label>
                </div>
                <div className={styles.first}>
                  <MapPin fill="white" color="navy" size={35} />
                  <label>Godwin Nwabunka Hall</label>
                </div>
                <div className={styles.first}>
                  <Users fill="white" color="navy" size={35} />
                  <label>Open to both students and staff</label>
                </div>
                <div className={styles.footer}>
                  <br />
                  <label>Join us for worship, biblical teaching, and fellowship. A great</label>
                  <br />
                  <label>way to connect with other students and grow in faith.</label>
                </div>
              </div>
            </div>

            <div className={styles.loop}>
              <div className={styles.toppppp}></div>
              <div className={styles.meeting}>
                <label>Campus Prayer Walk</label>
                <div className={styles.first}>
                  <Calendar fill="white" color="navy" size={35} />
                  <label>Every last Thursday of the semester</label>
                </div>
                <div className={styles.first}>
                  <Clock fill="none" color="navy" size={35} />
                  <label>6:00pm</label>
                </div>
                <div className={styles.first}>
                  <MapPin fill="white" color="navy" size={35} />
                  <label>Around the University</label>
                </div>
                <div className={styles.first}>
                  <Users fill="white" color="navy" size={35} />
                  <label>Open to both students and staff</label>
                </div>
                <div className={styles.footer}>
                  <br />
                  <label>End the semster with prayer as we walk around campus, praying for our</label>
                  <label>   university, students, and as the spirit leads us.</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.week}>
            <div className={styles.loop}>
              <div className={styles.toppp}></div>
              <div className={styles.meeting}>
                <label>Monthly Prayer Meeting</label>
                <div className={styles.first}>
                  <Calendar fill="white" color="navy" size={35} />
                  <label>Every Second Thursday Of The Month</label>
                </div>
                <div className={styles.first}>
                  <Clock fill="none" color="navy" size={35} />
                  <label>6:30pm-7:45pm</label>
                </div>
                <div className={styles.first}>
                  <MapPin fill="white" color="navy" size={35} />
                  <label>Godwin Nwabunka Hall</label>
                </div>
                <div className={styles.first}>
                  <Users fill="white" color="navy" size={35} />
                  <label>Open to both students and staff</label>
                </div>
                <div className={styles.footer}>
                  <br />
                  <label>Join us for an impactful prayer session as we bask in God's</label>
                  <br />
                  <label>presence with an atmosphere of prayer and worship</label>
                </div>
              </div>
            </div>

            <div className={styles.loop}>
              <div className={styles.topppp}></div>
              <div className={styles.meeting}>
                <label>Monthly Question And Answer</label>
                <div className={styles.first}>
                  <Calendar fill="white" color="navy" size={35} />
                  <label>Every last Thursday of the month</label>
                </div>
                <div className={styles.first}>
                  <Clock fill="none" color="navy" size={35} />
                  <label>6:30pm-7:45pm</label>
                </div>
                <div className={styles.first}>
                  <MapPin fill="white" color="navy" size={35} />
                  <label>Godwin Nwabunka Hall</label>
                </div>
                <div className={styles.first}>
                  <Users fill="white" color="navy" size={35} />
                  <label>Open to both students and staff</label>
                </div>
                <div className={styles.footer}>
                  <br />
                  <label>Have and bugging questions about the Bible, Doctrine, Christianity?</label>
                  <label>   Join us, as we by the spirit, give answers to your questions.</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
