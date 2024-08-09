const ChatBubble = (props:any) => {

    if(props.type === "user"){
        return(
            <div className="my-4 flex flex-row justify-end">
                <div className="bg-chatBubbleBG rounded-xl max-w-64 sm:max-w-96 h-fit">
                    <p className=" py-3 px-4 sm:p-4">{props.textMessage}</p>
                </div>
            </div>
        )
    }
    else if(props.type ==="bot"){
        return(
            <div className="my-4 flex flex-row justify-start">
                <div className="bg-white rounded-xl max-w-64 sm:max-w-96 h-fit">
                    <p className="py-3 px-4 sm:p-4 text-black">{props.textMessage}</p>
                </div>
            </div>
        )
        
    }
    

}

export default ChatBubble;