'use client'

import { usePathname } from "next/navigation";

import Link from "next/link";

const Logo = () => {
    const pathName = usePathname();
    if(pathName === "/"){
        return(
            <div className="flex flex-col max-w-64 sm:max-w-sm sm:px-10 py-5">
                <img src="./Logo.svg" alt="" />
                <hr className=" sm:hidden"></hr>
            </div>
        )
    }
    else{
        return(
            <div className="flex flex-col max-w-64 sm:max-w-sm sm:px-10 py-5">
                <Link href="/">
                    <img src="./Logo.svg" alt="" />
                </Link>
                <hr className=" sm:hidden"></hr>
            </div>
        )
    }
    
}

export default Logo;