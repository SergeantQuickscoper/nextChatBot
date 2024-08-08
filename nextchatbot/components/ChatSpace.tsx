'use client';
import { useState } from "react";

import { Input } from "./ui/input";
import ChatBubble from "./ChatBubble";
import { Key } from "lucide-react";

interface ComponentData {
    key: number
    message: string
}
let text = ""

const ChatSpace = () => {
    const [chats, addChats] = useState<ComponentData[]>([])
    const [message, setMessage] = useState('')
    
    const inputLogger = (event:any) => {
        text = event.target.value;
    }

    const sendMessage = () => {
        if (text !== ""){
            console.log("Event fired!", text)
            addChats((chats) => [...chats, {key: chats.length, message:text}])
            
        }
        
    }

    return(
        <div className="w-8/12 h-full max-h-full flex flex-col align-middle items-center justify-between sm:w-6/12">
            <div className="plsWork h-full w-full overflow-auto">
                {chats.map((chat) => <ChatBubble textMessage={chat.message} /> )} 
            </div>
            
            <Input className="w-full" inputLogger={inputLogger} sendMessage={sendMessage}/>
            
            
        </div>
    )
}

export default ChatSpace;