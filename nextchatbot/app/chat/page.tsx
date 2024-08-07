import HeaderLogoOnly from "@/components/HeaderLogoOnly"
import ChatSpace from "@/components/ChatSpace"

export default function Chat(){
    return(
        <main className="bg-backgroundDarkBase flex flex-col w-screen h-screen">
            <HeaderLogoOnly />
            <ChatSpace />
        </main>
    )

}