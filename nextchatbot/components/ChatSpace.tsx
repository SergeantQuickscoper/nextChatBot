'use client';
import { useState } from "react";

import { Input } from "./ui/input";
import ChatBubble from "./ChatBubble";
import { Key } from "lucide-react";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';




interface ComponentData {
    type: string
    key: number
    message: string
}
let text = ""

const ChatSpace = (props:any) => {
    const [chats, addChats] = useState<ComponentData[]>([])
    const [message, setMessage] = useState('')
    const groq = createOpenAI({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: props.apiKey,
      })
      
    const model = groq('llama3-8b-8192');
    
    const inputLogger = (event:any) => {
        text = event.target.value;
    }
    const sendMessage = (event:any) => {
        if(event.key === "Enter" || event.button === 0)
        {
            event.target.value = "";
            if (text !== ""){
                console.log("Event fired!", text)
                addChats((chats) => [...chats, {type: "user", key: chats.length, message:text}])
                generateAIresponse(text)
            }
        }
    }

    const generateAIresponse = async(req:string) => {
        const { text }:any = await generateText({
            model: model,
            prompt: req,
            system: "Your name is NextChat and you are an AI companion. Introduce yourself only when the the prompt gives an Introductory greeting"
          });
        await addChats((chats) => [...chats, {type: "bot", key: chats.length, message:text}])
    }

    return(
        <div className="flex flex-col h-full w-full items-center">
            <div className="middle w-9/12 h-full flex flex-col items-center justify-between sm:w-6/12 pb-5">
                <div className="h-full w-full max-h-[75vh] flex flex-col-reverse overflow-auto">
                    {chats.toReversed().map((chat) => <ChatBubble textMessage={chat.message} type={chat.type}/> )}
                    <div className="h-[1px]"></div> 
                </div>
            </div>
            <div className="footer w-9/12 sm:w-6/12">
                <Input className="w-full" inputLogger={inputLogger} sendMessage={sendMessage}/>
            </div>
            
            
            
        </div>
        
        
        
        
    )
}

export default ChatSpace;