import Logo from "@/components/Logo"


export default function About(){
    return(
        <main className="flex flex-col bg-backgroundDarkBase w-screen h-screen">
            <header className="flex items-center justify-center sm:justify-between">
                <Logo />
            </header>
            
            <div className="mx-6 sm:mx-10">
                <h1 className="jost-title text-left text-3xl py-4 leading-10 sm:text-6xl font-black sm:pt-16">About</h1>
                <p className="jost-para text-left text-sm py-6 sm:text-base font-thin pb-20 ">
                    This project was made using NEXT.js, Vercel AI SDK and
                    GroqAPI.  Made by Don Chacko.
                </p>
            </div>
        </main>
    )
}