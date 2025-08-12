import styles from "./contact.module.css"
import { MapPin } from "lucide-react"
import { Clock } from "lucide-react"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
export function Contact ({}){
    return(
        <div>
            <div className={styles.contact} id="contact-section">
                <div className={styles.begin}>
                    <br></br>
                    <div className={styles.top}>
                        <label className={styles.txt}>
                            <b>Get In</b>
                        </label>
                            <br></br>
                        <label className={styles.fell}>
                            <b>Touch</b>
                        </label>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.mission}>
                        <label className={styles.text}>
                            We'd love to hear from you! Whether you have questions, want to get involved, or just
                        </label>
                        <br></br>
                        <label className={styles.mid}>
                            want to connect, don't hesitate to reach out.
                        </label>
                    </div>
                </div>
                <div className={styles.styles}>
                    <div className={styles.send}>
                        <br></br>
                        <div className={styles.message}>
                            <label>Send Us a Message</label>
                        </div>
                        <form action={""}>
                            <div className={styles.display}>
                                <div className={styles.name}>
                                    <label>First Name</label>
                                    <br></br>
                                    <input className={styles.input} type="text" placeholder="  Your first name"></input>
                                </div>
                                <div className={styles.name}>
                                    <label>Last Name</label>
                                    <br></br>
                                    <input className={styles.input} type="text" placeholder="  Your last name"></input>
                                </div>
                            </div>
                            <div className={styles.names}>
                                <label>Email</label>
                                <br></br>
                                <input className={styles.input} type="text" placeholder="  reg no@topfaith.edu.ng" required></input>
                            </div>
                            <div className={styles.names}>
                                <label>Phone</label>
                                <br></br>
                                <input className={styles.input} type="text" placeholder="  (234) XXX XXX XXX"  required></input>
                            </div>
                            <div className={styles.names}>
                                <label>Year in School</label>
                                <br></br>
                                <input className={styles.input} type="text" placeholder="  e.g. JUPEB, IUFP, 100lvl, 300lvl, Final Year" required></input>
                            </div>
                            <div className={styles.namess}>
                                <label>Message</label>
                                <br></br>
                                <input className={styles.input} type="text" placeholder="  Tell us about yourself or any questions you might have..." required></input>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button className={styles.namesss} type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className={styles.places}>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <MapPin fill="rgb(100, 30, 167)" color="white" size={50} className={styles.op}/> 
                            </div>
                            <div className={styles.texts}>
                                <label className={styles.label}><strong>Meeting Location</strong></label>
                                <br></br>
                                <br></br>
                                <label className={styles.labels}>Godwin Nwanbunka Hall</label>
                                <br></br>
                                <label className={styles.labels}>Behind the Library</label>
                                <br></br>
                                <label className={styles.labels}>Topfaith University</label>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Clock fill="none" color="white" size={50} className={styles.op}/> 
                            </div>
                            <div className={styles.texts}>
                                <label className={styles.label}><strong>Meeting Times</strong></label>
                                <br></br>
                                <br></br>
                                <label className={styles.labels}>Weekly Fellowship: Thursdays, 6:30PM</label>
                                <br></br>
                                <label className={styles.labels}>Monthly Q & A: Last Thursday of every month</label>
                                <br></br>
                                <label className={styles.labels}>Topfaith University</label>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Mail fill="none" color="white" size={50} className={styles.op}/> 
                            </div>
                            <div className={styles.texts}>
                                <label className={styles.label}><strong>Mail US</strong></label>
                                <br></br>
                                <br></br>
                                <label className={styles.labels}>info.tufellowships@gmail.com</label>
                                <br></br>
                                <label className={styles.labels}>president.tufellowships@gmail.com</label>
                                <br></br>
                                <label className={styles.labels}>pro.tufellowships@gmail.com</label>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>
                                <Phone fill="rgb(100, 30, 167)" color="white" size={50} className={styles.op}/> 
                            </div>
                            <div className={styles.texts}>
                                <label className={styles.label}><strong>Call Us</strong></label>
                                <br></br>
                                <br></br>
                                <label className={styles.labels}>President: 09036669156</label>
                                <br></br>
                                <label className={styles.labels}>Vice President: 08142302738</label>
                                <br></br>
                                <label className={styles.labels}>Secretary General: 08062169811</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// function MyForm() {
//   const handleSubmit = (formData) => {
//     const name = formData.get('name');
//     alert(`Hello, ${name}!`);
//   };

//   return (
//     <form action={handleSubmit}>
//       <label>
//         Enter your name:
//         <input type="text" name="name" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
