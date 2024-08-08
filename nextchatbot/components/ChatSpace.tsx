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
        <div className="flex flex-col h-full w-full items-center">
            <div className="middle w-8/12 h-full flex flex-col align-middle items-center justify-between sm:w-6/12 pb-5">
                <div className="h-full w-full overflow-auto max-h-[75vh]">
                    {chats.map((chat) => <ChatBubble textMessage={chat.message} /> )} 
                </div>
            </div>
            <div className="footer w-8/12">
                <Input className="w-full" inputLogger={inputLogger} sendMessage={sendMessage}/>
            </div>
            
            
            
        </div>
        
        
        
        
    )
}

export default ChatSpace;