"use client";
import { About } from "@/COMPONENTS/ABOUT/about";
import { Background } from "@/COMPONENTS/BACKGROUND/background";
import { Contact } from "@/COMPONENTS/CONTACT/contact";
import { Doctrine } from "@/COMPONENTS/DOCTRINE/doctrine";
import { End } from "@/COMPONENTS/END/end";
import { Events } from "@/COMPONENTS/EVENTS/events";
import { Leadership } from "@/COMPONENTS/LEADERSHIP/leadership";
import { Navbar } from "@/COMPONENTS/NAVBAR/navbar";
export default function Home ({}){
  return(
    <div>
      <a name="about"/>
      <Navbar/>
      <Background/>
      <About/>
      <Events/>
      <Leadership/>
      <Doctrine/>
      <Contact/>
      <End/>
    </div>
  )
}

