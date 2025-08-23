import React from 'react'
import { LuMessageCircle } from "react-icons/lu";
import { useState } from 'react';
export default function Notifications({unreadMessages}) {
    const [unreadMessages, setunreadMessages] = React.useState(0)
    if (unreadMessages === 0){
        <p>You have no unread message</p>
    } else if(unreadMessages === 1){
        <p>You have 1 unread message</p>
    } else {
        return <p>You have ({unreadMessages}) unread messages</p>
    }
}
    return (
        <div>
            <Notification unreadMessages = {unreadMessages}/>
            <button onClick = {()=> setunreadMessages(unreadMessages + 1)}>
                Increment unread messages
            </button>
        </div>
    )
    // <div className='relative w-4 mt-6  '>
    //     <LuMessageCircle/>
    //     <p className=" absolute -right-2 top-0 h-3 w-3 rounded-full bg-blue-700 flex justify-center items-center text-white text-[8px]">1</p>
    //     <p>You have one message</p>

        /* challenge:
        -If there are no unread messages display "you are all caught up!
        -if there is exactly one unread message, it should read "You have 1 unread message"(singular) 
        -if there are > 1 unread messages, display you have (n) unread messages
        " */
    /* </div> */
