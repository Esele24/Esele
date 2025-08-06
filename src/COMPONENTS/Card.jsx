import React from 'react'
export function Card({}){}
const Card = (props) => {
  return (
    <div className="mt-4" >
      <p>Name: {props.name} </p>
      <p>Gender: {props.gender} </p>
      <p >phone: {props.phone}</p>
      {/* <p>Name: daniel</p>
      <p>Gender: Male</p>
      <p>phone: 090435678</p> */}
    </div>
  )
}


