import React from 'react';
// import MemberCard from './components/MemberCard';
import styles from "./app.module.css";
export function App({}){
const team = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Loves UI design and coffee ☕",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Enjoys working with databases 🛢",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    bio: "Passionate about minimalism 🎨",
  },
  {
    id: 4,
    name: "James Brown",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Loves automation and scripting ⚙",
  },
  {
    id: 5,
    name: "Maria Garcia",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    bio: "Keeps everyone on track 📅",
  },
];
const App = () => {
  return (
    <div className={styles.app-container}>
      <h1 className={styles.app-title}>Our Team</h1>
      <div className={styles.team-grid}>
        {team.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}
};