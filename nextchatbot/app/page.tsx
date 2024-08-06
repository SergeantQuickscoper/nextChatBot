import Image from "next/image";
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-backgroundDarkBase">
      <header className="flex items-center justify-center sm:justify-start">
        <Logo />
      </header>
      <section className="flex flex-col justify-center align-middle px-6">
        <h1 className="jost-title text-left sm:text-center text-3xl py-4 leading-10 sm:text-4xl sm:leading-10 font-black">
          Your new AI <br />
          Companion is <br />
          here. <br />  
        </h1>
        <p className="jost-para text-left sm:text-center text-sm py-6 sm:text-base font-thin">
          Welcome to NextChat, your always-on chat companion. 
          Whether you need a quick answer, a thoughtful conversation,
          or just someone to listen, we're here for you 24/7. 
          Our AI is designed to understand and engage, providing 
          support and interaction whenever you need it. 
          Experience the convenience of having a reliable, friendly 
          presence at your fingertips—wherever and whenever 
          you choose.
        </p>
        <div className="flex justify-center items-center py-5">
          <Button className="max-w-32 rounded-full bg-backgroundBlueGrad py-8 px-20">
            <p className=" font-bold text-lg">Chat Now</p>
          </Button>
        </div>
        <div className="flex justify-center items-center py-5"><Button className="max-w-32 rounded-full bg-backgroundBlueGrad">About</Button></div>
      </section>
    </main>
  );
}
