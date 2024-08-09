import Image from "next/image";
import HeaderBar from "@/components/HeaderBar";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-backgroundDarkBase overflow-y-auto bg-gradient-to-b from-backgroundDarkBase from-15% to-backgroundBlueGrad2 to-100%  sm:bg-gradient-to-br  sm:from-40%">
      <HeaderBar/>
      <section className="flex flex-col justify-center align-middle px-6">
        <h1 className="jost-title text-left sm:text-center text-3xl py-4 leading-10 sm:text-6xl font-black sm:pt-16">
          Your new AI <br />
          Companion is <br />
          here. <br />  
        </h1>
        <p className="jost-para text-left sm:text-center text-sm py-6 sm:text-base font-thin pb-20 sm:px-64">
          Welcome to NextChat, your always-on chat companion. 
          Whether you need a quick answer, a thoughtful conversation,
          or just someone to listen, we&apos;re here for you 24/7. 
          Our AI is designed to understand and engage, providing 
          support and interaction whenever you need it. 
          Experience the convenience of having a reliable, friendly 
          presence at your fingertips—wherever and whenever 
          you choose.
        </p>
        <div className="flex justify-center items-center py-5">
          <Link href="/chat">
              <Button className="max-w-32 rounded-full shadow-2xl bg-backgroundBlueGrad py-8 px-20">
                <p className=" font-bold text-xl">Chat Now</p>
              </Button>
          </Link>
          
        </div>
        <div className="flex justify-center items-center pt-5 pb-8 sm:hidden">
          <Link href="/about">
              <Button className="shadow-2xl max-w-32 rounded-full bg-backgroundBlueGrad px-8 py-6">
                <p className=" font-semibold">About</p>
              </Button>
          </Link>
          
          </div>
      </section>
    </main>
  );
}
