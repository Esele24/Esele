"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { Hero } from "@/COMPONENTS/HERO A NAVBAR/hero"
import { Navbar } from "@/COMPONENTS/NAVBAR/navbar"
import { Back } from "@/COMPONENTS/BACKGROUND/background"
import { Phone, Weather } from "@/COMPONENTS/PHONE/phone"
import { About } from "@/COMPONENTS/ABOUT/about"
import { Events } from "@/COMPONENTS/EVENTS/events"
import { Joke } from "@/COMPONENTS/JOKES/jokes"
import { Upvote } from "@/COMPONENTS/UPVOTE/upvotee"
import { ApplicantCard } from "@/COMPONENTS/ApplicantCard"
import { Applications } from "@/COMPONENTS/Applications"
import { Leadership } from "@/COMPONENTS/LEADERSHIP/leadership"
import { Doctrine } from "@/COMPONENTS/DOCTRINE/doctrine"
import { App } from "@/COMPONENTS/APP/app"
import { MemberCard } from "@/COMPONENTS/MEMBERCARD/membercard";
import { Traveljournal } from "@/COMPONENTS/traveljournal";
import { Counter } from "@/COMPONENTS/ass1"
import { PasswordToggle } from "@/COMPONENTS/ass2"
import { TodoApp } from "@/COMPONENTS/ass3"
export default function Home({}){
  return(
    <>
    <Counter/>
    <br></br>
    <PasswordToggle/>
    <br></br>
    <TodoApp/>
    {/* <Navbar/>
    <Back/>
    <About/>
    <Events/>
    <Leadership/>
    <Doctrine/> */}
      {/* <Applications/>
      <Traveljournal/> */}
    {/* <Traveljournal/> */}
    {/* <App/> */}
    {/* const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />); */}
   




    {/* <Applications/> */}
      {/* <Joke setup="How did he crimainal escapre" punchline="he ransomeware" upvote={4} />
    <Joke setup="why did'nt the bicycle run" punchline="it was two tired" upvote={5}/>
    <Joke setup="Where is shiloh" punchline="Praying at shiloh ground" author="obed"/>
    <Joke setup="order from Mc donald" punchline="the Mc 'donald i know prays not bakes" upvote={7} author="obed"/>
    <Upvote/> */}
      {/* <Weather/>
      <Weather temp="30" cond="sunny" locn="Lagos"/>
      <Weather temp="10" cond="coldy" locn="Abuja"/>
      <Weather temp="20" cond="cloudy" locn="Jos"/> */}
    </>
  )
}

{/* <Hero/>
      <Card name="Esele" gender="male" phone="09036669156"/>
      <Card name="Esele" gender="male" phone="09036669156"/>
      <Card name="Esele" gender="male" phone="09036669156"/>
      <Card/> */}























































































// A component is a reusable piece of code that represents a UI element or part of a user inteface. it is a JavaScript function or class that returns JSX which are then rendered to the DOM
// It is in CAPS because that is the JSX syntax requiremnt. It helps next.js distingusih between HTML elements and React components
// <div>
    //   <Hero/>
    // </div>
    // <div className= {styles.react}>
    //   <h1>MY FIRST REACT CLASS</h1>
    //     <ol> 
    //       <li>It is needed everywhere</li>
    //       <li>It uses reusable components</li>
    //       <li>It sounds nice</li>
    //       <li>Big companies use it</li>
    //     </ol>
    // </div>

