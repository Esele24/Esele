import styles from "./doctrine.module.css";

/**
 * Doctrine — refactored
 * - Visible text kept exactly as provided
 * - Uses a data array + map to remove repeated markup
 * - Semantic tags (section, header, article, h3, p)
 */

const DOCTRINES = [
  {
    title: "REDEMPTION FROM SIN",
    lines: [
      `"We believe strongly in the fact that the world was ravaged by sin, and`,
      `to that end, God sent his son Jesus Christ to die for humanity, whom`,
      `in turn obtained an eternal redemption for us, that we are no longer`,
      `slaves to sin, but have become the righteousness of God in Christ Jesus."`,
    ],
    scripture: "John 3:16, Hebrews 9:12, Romans 6:6, Ephesians 1:7, Colossians 1:20",
  },
  {
    title: "BAPTISM OF THE HOLY GHOST",
    lines: [
      `"We believe strongly in the baptism of the Holy Ghost, as it was bestowed`,
      `on the apostles, we believe in the profound spirtual experience`,
      `of the Holy Ghost coming upon someone resulting in deeper intimacy`,
      `with God, supernatural gifts, awakenings etc."`,
    ],
    scripture: "Acts 1:8, Mark 1:8, Acts 2:4",
  },
  {
    title: "SPEAKING IN TOUNGES",
    lines: [
      `"We believe strongly in the gift of speaking in tounges as dispensed by the`,
      `Holy Spirit. We believe in extraordinary insight, wisdom and power`,
      `building up as we pray in other tounges. We believe that tounges are`,
      `essential in the life of every believer for maximum impact."`,
    ],
    scripture: "Acts 2:4, 1st Corinthians 14:2,4, Mark 16:17",
  },
  {
    title: "CONSECRATION",
    lines: [
      `"We believe that as Christians, we should be set apart, separate from `,
      `those that are 'without'. We believe that as Christians, for the sake of`,
      `our relationship with God, we should take some certain steps, be`,
      `separated, be a vessel through which God can flow through, etc."`,
    ],
    scripture: "1st Timothy 2:19-21, Leviticus 20:7-8, Romans 12:1-2",
  },
  {
    title: "THE SECOND COMING OF CHRIST",
    lines: [
      `"We believe in the reality of Jesus' Second Coming. We believe that`,
      `one day, Jesus would appear in the clouds and take his own`,
      `with him to heavven. He will also judge the living and the dead`,
      `and establish his dominion forever."`,
    ],
    scripture: "Matthew 24:20, Luke 21:27, Revelation 16:15",
  },
  {
    title: "WATER BAPTISM",
    lines: [
      `"We believe in the mystery of baptism by immersion. we`,
      `believe in baptism being a type and shadow of us`,
      `being buried with Christ and raised up with him`,
      `and in the same vein, old things are passed away."`,
    ],
    scripture: "Acts 2:38, Romans 6:3-4, Colossians 2:12",
  },
];

export function Doctrine() {
  return (
    <section
      className={styles.doctrine}
      id="doctrine-section"
      aria-labelledby="doctrine-heading"
    >
      <header className={styles.header}>
        <h2 id="doctrine-heading" className={styles.smallTitle}>
          <b>Our</b>
        </h2>
        <h1 className={styles.title}>
          <b>Doctrine</b>
        </h1>

        <p className={styles.mission}>
          <span className={styles.text}>
            As Christians, we have common beliefs, faith, convictions,
          </span>
          <br />
          <span className={styles.mid}>
            things that we hold on to dearly, that define our Christian faith
          </span>
          <br />
          <span className={styles.end}>
            and distinguishes us from other religons.
          </span>
        </p>
      </header>

      <div className={styles.grid}>
        {DOCTRINES.map((d, idx) => (
          
          <article key={d.title} className={styles.card} aria-labelledby={`doc-${idx}`}>
         
            <h3 id={`doc-${idx}`} className={styles.cardTitle}>
              {d.title}
            </h3>

            <div className={styles.cardBody}>
                 
              {d.lines.map((line, i) => (
                <p key={i} className={styles.paragraph}>
                  {line}
                </p>
              ))}

              <p className={styles.scripture}>{d.scripture}</p>
               
            </div>
            
          </article>
         
        ))}
      </div>
    </section>
  );
}