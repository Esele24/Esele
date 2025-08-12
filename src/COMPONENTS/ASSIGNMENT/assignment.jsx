import styles from "./assignment.module.css"
import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
export function Assignment ({}){
return (
      <div className={styles.container}>
        <h1>WORD COUNTER</h1>
        <textarea className={styles.text} 
            rows={6} 
            placeholder="Type your text here"
            // value={text}
            // onChange={(e) => setText(e.target.value)}
            >
        </textarea>
        <p className={styles.count}>
            Word Count: 
            <strong>
                {/* {countWords(text)} */}
            </strong>
        </p>
    </div>
)
}
Assignment = () => {
  const [text, setText] = useState("");
  console.log(text);
  console.log(setText);
  // Function to count words
  const countWords = (input) => {
    // Trim and split by spaces, filter out empty strings
    return input.trim() === "" ? 0 : input.trim().split(/\s+/).length;
  };
    console.log(countWords);
}
//     <div className={styles.padding}>
//       <button
//         // onClick={toggleTheme}
//         className={styles.button}
//         // style={{
//         //   background: theme === "light" ? "#333" : "#f4f4f4",
//         //   color: theme === "light" ? "#fff" : "#000",
//         // }}
//       >
//         {/* {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"} */}
//       </button>
//       <h1>
//         {/* {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"} */}
//         </h1>
//       <p>
//         The background and text colors change based on the selected theme.
//       </p>
//     </div>
// )
// }
// const LightDarkToggle = () => {
// const [theme, setTheme] = useState("light");
// // Load theme from localStorage on mount
// useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.body.className = savedTheme; // Apply saved theme to body
// }, []);
// // Update localStorage and body class when theme changes
// useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.body.className = theme;
// }, [theme]);
// const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
// };
// console.log(toggleTheme);
// console.log(LightDarkToggle);
// }
























// 1) For the todo app, allow editing of a task, that is a user can edit an already  created task.

// Add timestamps to tasks.

// Save task to localStorage for persistence- .
// Refreshing the page won’t make the use state values to be lost


// 2)Light/Dark Theme Toggle
// Features to implement

// I)A button to switch between light and dark mode

// ii)Background and text color changes based on mode


// 3) Character Counter App
// create a form input 
// write a program to calculate the number of words present in the form

// It’s hard, I know. The best way to learn something is sometimes the hardway and at the same time life should be easy

