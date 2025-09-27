"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Menu, X } from "lucide-react";

export function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav} id="nav-section">
      <div className={styles.left_section}>
        <img
          className={styles.logo}
          src="/IMG-20250723-WA0139.jpg"
          height={30}
          alt="logo"
        />
        <p>TU Fellowship</p>
      </div>

      {/* Desktop Links */}
      <ul className={`${styles.nav_links} ${isOpen ? styles.showMenu : ""}`}>
        
        <Link href="#nav-section" className={styles.link}>
            <li>
                Home
            </li>
        </Link>
        <Link href="#about-section" className={styles.link}>
            <li>  
                About           
            </li>
        </Link>
        <Link href="#event-section" className={styles.link}>
            <li>
                Events
            </li>
        </Link>
        <Link href="#leadership-section" className={styles.link}>
            <li>
                Leadership
            </li>
        </Link>
        <Link href="#doctrine-section" className={styles.link}>
            <li> 
                Doctrine
            </li>
        </Link>
        <Link href="#contact-section" className={styles.link}>
            <li>
                Contact
            </li>
        </Link>
      </ul>

      <div className={styles.navbar_cta}>
        <button className={styles.join_us}>Join Us</button>

        {/* Hamburger button (only shows on mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
 }

// export default function Auth() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [users, setUsers] = useState([]); // temporary storage
//   const [message, setMessage] = useState("");

//   const handleAuth = (e) => {
//     e.preventDefault();

//     if (isSignUp) {
//       // Sign Up
//       const exists = users.find((u) => u.email === email);
//       if (exists) {
//         setMessage("User already exists!");
//       } else {
//         setUsers([...users, { email, password }]);
//         setMessage("Signup successful! You can now log in.");
//         setIsSignUp(false);
//       }
//     } else {
//       // Sign In
//       const validUser = users.find(
//         (u) => u.email === email && u.password === password
//       );
//       if (validUser) {
//         setMessage("Login successful! 🎉");
//       } else {
//         setMessage("Invalid credentials ❌");
//       }
//     }

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//       <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

//       <form onSubmit={handleAuth}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button type="submit">
//           {isSignUp ? "Sign Up" : "Sign In"}
//         </button>
//       </form>

//       <p style={{ marginTop: "10px", color: "green" }}>{message}</p>

//       <button onClick={() => setIsSignUp(!isSignUp)} style={{ marginTop: "10px" }}>
//         {isSignUp ? "Already have an account? Sign In" : "New user? Sign Up"}
//       </button>
//     </div>
//   );
// }