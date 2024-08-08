const ChatBubble = (props:any) => {
    return(
        <div className="my-4 flex flex-row justify-end">
            <div className="bg-chatBubbleBG rounded-xl w-48 sm:w-96">
                <p className="p-2 sm:p-4">{props.textMessage}</p>
            </div>
        </div>
    )

}

export default ChatBubble;