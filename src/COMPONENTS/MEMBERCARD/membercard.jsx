import React from 'react';
import  "./membercard.module.css"
export function MemberCard({}){
const MemberCard = ({ name, role, image, bio }) => {
  return (
    <div className={member-card}>
      <img src={image} alt={name} className={member-image} />
      <div className={member-info}>
        <h2 className={member-name}>{name}</h2>
        <p className={member-role}>{role}</p>
        <p className={member-bio}>{bio}</p>
      </div>
    </div>
  );
}
};