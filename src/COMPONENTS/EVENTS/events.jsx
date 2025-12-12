import styles from "./events.module.css";
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";

export function Events() {
  return (
    <section className={styles.upcoming} id="event-section" aria-labelledby="events-heading">
      <header className={styles.begin}>
        <div className={styles.top}>
          <h2 id="events-heading" className={styles.txt}><b>Upcoming</b></h2>
          <h1 className={styles.fell}><b>Events</b></h1>
        </div>
      </header>

      <div className={styles.bottom}>
        <p className={styles.mission}>
          <span className={styles.text}>
            Join us for meaningful gatherings that strengthen our faith and build community. All
          </span>
          <br />
          <span className={styles.mid}>
            students are welcome, regardless of where you are in your spiritual journey.
          </span>
        </p>
      </div>

      {/* Primary events row */}
      <div className={styles.weekly} role="list">
        <article className={styles.loop} role="listitem">
          <div className={styles.topp} aria-hidden="true"></div>

          <div className={styles.meeting}>
            <h2>Weekly Fellowship Meeting</h2>

            <ul className={styles.details}>
              <li className={styles.first}>
                <Calendar fill="white" color="navy" size={28} />
                <span>Every Thursday</span>
              </li>

              <li className={styles.first}>
                <Clock fill="none" color="navy" size={28} />
                <span>6:30pm-7:45pm</span>
              </li>

              <li className={styles.first}>
                <MapPin fill="white" color="navy" size={28} />
                <span>Godwin Nwabunka Hall</span>
              </li>

              <li className={styles.first}>
                <Users fill="white" color="navy" size={28} />
                <span>Open to both students and staff</span>
              </li>
            </ul>

            <div className={styles.footer}>
              <p>Join us for worship, biblical teaching, and fellowship. A great</p>
              <p>way to connect with other students and grow in faith.</p>
            </div>
          </div>
        </article>

        <article className={styles.loop} role="listitem">
          <div className={styles.toppppp} aria-hidden="true"></div>

          <div className={styles.meeting}>
            <h2>Campus Prayer Walk</h2>

            <ul className={styles.details}>
              <li className={styles.first}>
                <Calendar fill="white" color="navy" size={28} />
                <span>Every last Thursday of the semester</span>
              </li>

              <li className={styles.first}>
                <Clock fill="none" color="navy" size={28} />
                <span>6:00pm</span>
              </li>

              <li className={styles.first}>
                <MapPin fill="white" color="navy" size={28} />
                <span>Around the University</span>
              </li>

              <li className={styles.first}>
                <Users fill="white" color="navy" size={28} />
                <span>Open to both students and staff</span>
              </li>
            </ul>

            <div className={styles.footer}>
              <p>End the semster with prayer as we walk around campus, praying for our</p>
              <p>   university, students, and as the spirit leads us.</p>
            </div>
          </div>
        </article>
      </div>

      {/* Secondary events row */}
      <div className={styles.week} role="list">
        <article className={styles.loop} role="listitem">
          <div className={styles.toppp} aria-hidden="true"></div>

          <div className={styles.meeting}>
            <h2>Monthly Prayer Meeting</h2>

            <ul className={styles.details}>
              <li className={styles.first}>
                <Calendar fill="white" color="navy" size={28} />
                <span>Every Second Thursday Of The Month</span>
              </li>

              <li className={styles.first}>
                <Clock fill="none" color="navy" size={28} />
                <span>6:30pm-7:45pm</span>
              </li>

              <li className={styles.first}>
                <MapPin fill="white" color="navy" size={28} />
                <span>Godwin Nwabunka Hall</span>
              </li>

              <li className={styles.first}>
                <Users fill="white" color="navy" size={28} />
                <span>Open to both students and staff</span>
              </li>
            </ul>

            <div className={styles.footer}>
              <p>Join us for an impactful prayer session as we bask in God's</p>
              <p>presence with an atmosphere of prayer and worship.</p>
            </div>
          </div>
        </article>

        <article className={styles.loop} role="listitem">
          <div className={styles.topppp} aria-hidden="true"></div>

          <div className={styles.meeting}>
            <h2>Monthly Question And Answer</h2>

            <ul className={styles.details}>
              <li className={styles.first}>
                <Calendar fill="white" color="navy" size={28} />
                <span>Every last Thursday of the month</span>
              </li>

              <li className={styles.first}>
                <Clock fill="none" color="navy" size={28} />
                <span>6:30pm-7:45pm</span>
              </li>

              <li className={styles.first}>
                <MapPin fill="white" color="navy" size={28} />
                <span>Godwin Nwabunka Hall</span>
              </li>

              <li className={styles.first}>
                <Users fill="white" color="navy" size={28} />
                <span>Open to both students and staff</span>
              </li>
            </ul>

            <div className={styles.footer}>
              <p>Have and bugging questions about the Bible, Doctrine, Christianity?</p>
              <p>   Join us, as we by the spirit, give answers to your questions.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}