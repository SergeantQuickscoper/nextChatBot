import HeaderLogoOnly from "@/components/HeaderLogoOnly"
import ChatSpace from "@/components/ChatSpace"

export default function Chat(){
    return(
        <main className="bg-backgroundDarkBase flex flex-col w-screen h-screen">
            <HeaderLogoOnly />
            <div className="h-full w-full items-center flex justify-center">
                <ChatSpace />
            </div>
            
        </main>
    )

}