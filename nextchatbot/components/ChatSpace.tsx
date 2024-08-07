'use client';
import { useState } from "react";

import { Input } from "./ui/input";

const ChatSpace = () => {
    const [message, setMessage] = useState('')

    const inputLogger = (event:any) => {
        setMessage(event.target.value)
        console.log(event.target.value)
    }

    const sendMessage = () => {

    }

    return(
        <div className="w-8/12 h-full flex flex-col align-middle items-center justify-between sm:w-6/12">
            <div className="h-full">
                <h1>Chat Space</h1>
            </div>
            
            <Input className="w-full" inputLogger={inputLogger} sendMessage={sendMessage}/>
            
            
        </div>
    )
}

export default ChatSpace;