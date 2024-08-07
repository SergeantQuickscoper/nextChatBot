import * as React from "react" 
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    inputLogger: (event:any) => void;
    sendMessage: () => any;
  }


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({inputLogger, sendMessage, className, type, ...props }, ref, ) => {
    return (
      <div className="bg-textBox flex flex-row mb-6 w-full rounded-full border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <input
        placeholder="Chat with NextChat"
        type={type}
        className={cn(
          "ml-2 flex h-10 w-full rounded-full bg-background px-3 py-2 text-sm focus:border-none focus:outline-none text-textBoxText bg-textBox",
          className
        )}
        ref={ref}
        {...props}
        onChange={inputLogger}
        />
        <button className="pr-2">
            <img className=' max-w-8'src="/SendIcon.svg"/>
        </button>
      </div>
      
    )
  }
)
Input.displayName = "Input"

export { Input }
