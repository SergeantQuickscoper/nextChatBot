import HeaderLogoOnly from "@/components/HeaderLogoOnly"
import ChatSpace from "@/components/ChatSpace"
import { createOpenAI } from '@ai-sdk/openai';

export default function Chat(){
    return(
        <main className= "bg-backgroundDarkBase flex flex-col w-screen h-screen overflow-auto">
            <HeaderLogoOnly />
            <div className="h-full w-full items-center flex justify-center">
                <ChatSpace apiKey={process.env.GROQ_API_KEY} />
            </div>
            
        </main>
    )

}