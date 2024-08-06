import Logo from "./Logo";
import { Button } from "./ui/button";
const HeaderBar = () =>{
    return(
        <header className="flex items-center justify-center sm:justify-between">
            <Logo />
            <div className="mr-10 hidden sm:flex">
                <Button className="shadow-2xl max-w-32 rounded-full bg-backgroundBlueGrad px-8 py-6">
                <p className=" font-semibold">About</p>
                </Button>
            </div>
            
        </header>
    )
}

export default HeaderBar;