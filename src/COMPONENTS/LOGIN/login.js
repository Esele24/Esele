"use client";
import style from "./login.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const router = useRouter();


const handleLogin = ()=> {
    if (username === "admin" && password === "password"){
        setIsLoggedIn(true);
        router.push ("");
    } else {
        alert ("Invalid Credentials");
    }  
};
function Login(){ 
    if (isLoggedIn){
        return <div> WELCOME, {username}</div>;
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);
}
export default function Page(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState ("");
    return(
        <div className= {style.body}>
            <div className = {style.main}>
                <div className={style.login}>Login</div>
                <br/><br/><br/>
                <div className={style.inputBox}>
                    <input type="text" value = {username} onChange={(e) => setUsername(e.target.value)} placeholder="      Username" className={style.input}></input>
                    <input type="password" value = {password} onChange={(e) => setPassword(e.target.value)} placeholder="     Password" className={style.input}></input>
                    <button onClick={handleLogin} className={style.Button}>Login</button>
                </div>
            </div>
        </div>
    );
}
