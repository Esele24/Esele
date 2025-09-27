"use client";
import React from "react"
import { Navbar } from "@/COMPONENTS/NAVBAR/navbar"
import { Background } from "@/COMPONENTS/BACKGROUND/background"
import { About } from "@/COMPONENTS/ABOUT/about"
import { Events } from "@/COMPONENTS/EVENTS/events"
import { Leadership } from "@/COMPONENTS/LEADERSHIP/leadership"
import { Doctrine } from "@/COMPONENTS/DOCTRINE/doctrine"
import { Contact } from "@/COMPONENTS/CONTACT/contact"
import { End } from "@/COMPONENTS/END/end"
export default function Home (){
  return(
    <>
      <Navbar/>
      <Background/>
      <About/>
      <Events/>
      <Leadership/>
      <Doctrine/>
      <Contact/>
      <End/>
    </>
  )
}
