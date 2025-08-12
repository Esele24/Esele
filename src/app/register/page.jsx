"use client"
import React, { useState } from 'react'
import styles from "./pages.module.css"

const page = () => {
    const [firstname, setFirstname]=useState("")
    const [lastname, setLastname]=useState("")
    const [password, setPassword]=useState("")
    const [err,setErrmsg]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!firstname) {
            console.log("Provide firstname")
            setErrmsg("Please provide firstname")
        }else if (!lastname){
            console.log("Provide lastname")
            setErrmsg("Please provide lastname")
        }
        else if (!password) {
            console.log("Provide password")
            setErrmsg("Please provide password")
        }
        else{
            console.log("Form submitted")
            setErrmsg("")
        }
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={styles.form}>
        {err && (<p className={styles.class}>{err}</p>)}
        <div className={styles.div}>
            <label htmlFor="" className={styles.label}>FIRST NAME</label>
            <input onChange={(e)=>setFirstname(e.target.value)} type="text" className={styles.text}/>
        </div>
        <br></br>
        <div className={styles.div}>
            <label htmlFor="" className={styles.label}>LAST NAME</label>
            <input onChange={(e)=>setLastname(e.target.value)} type="text" className={styles.text}/>
        </div>
        <div className={styles.div}>
            <label htmlFor="" className={styles.label}>PASSWORD</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" className={styles.text}/>
        </div>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </div>
  )
}

