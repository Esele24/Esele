import styles from "./doctrine.module.css";
//Redemption
//Baptism of the Holy Ghost
//Trinity
//The deity of Christ
//Speaking in tounges
export function Doctrine({}){
    return(
        <div>
            <div className={styles.doctrine} id="doctrine-section">
                <div className={styles.begin}>
                    <br></br>
                    <div className={styles.top}>
                        <label className={styles.txt}>
                            <b>Our</b>
                        </label>
                            <br></br>
                        <label className={styles.fell}>
                            <b>Doctrine</b>
                        </label>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.mission}>
                        <label className={styles.text}>
                            As Christians, we have common beliefs, faith, convictions,
                        </label>
                        <br></br>
                        <label className={styles.mid}>
                            things that we hold on to dearly, that define our Christian faith
                        </label>
                        <br></br>
                        <label className={styles.end}>
                                 and distinguishes us from other religons
                        </label>
                    </div>
                </div> 
                <div className={styles.pop}>
                    <div className={styles.type}>
                        <br></br>
                        <br></br>
                        <center><label className={styles.labl}>REDEMPTION</label></center>
                    </div>
                    <div className={styles.types}>
                        <center>
                            <label>"We believe strongly in the fact that the world was ravaged by sin, and</label>
                            <br></br>
                            <label>to that end, God sent his son Jesus Christ to die for humanity, whom</label>
                            <br></br>
                            <label>in turn obtained an eternal redemption for us, that we are no longer</label>
                            <br></br>
                            <label>slaves to sin, but have become the righteousness of God in Christ Jesus"</label>
                            <br></br>
                            <label>John 3:16, Hebrews 9:12, Romans 6:6, John 10:10-11</label>
                        </center>
                    </div>
                </div>
                <br></br>
                <div className={styles.popp}>
                    <div className={styles.type}>
                        <br></br>
                        <br></br>
                        <center><label>BAPTISM OF THE HOLY GHOST</label></center>
                    </div>
                    <div className={styles.types}>
                        <center>
                            <label>"We believe strongly in the baptism of the Holy Ghost, as it was bestowed</label>
                            <br></br>
                            <label>on the apostles, we believe in the profound spirtual experience</label>
                            <br></br>
                            <label>of the Holy Ghost coming upon someone resulting in deeper intimacy</label>
                            <br></br>
                            <label>with God, supernatural gifts, awakenings etc.</label>
                            <br></br>
                            <label>Acts 1:8, Mark 1:8, Acts 2:4</label>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}