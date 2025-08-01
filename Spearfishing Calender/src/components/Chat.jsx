import React from "react";


function Chat(){

    function onSubmitted(event){
        event.preventDefault();
        console.log("send message")
    }

    return (
        <aside className="chat">
            <h1>online chat</h1>
            <form >
                <textarea name="message" placeholder="Enter your message"></textarea>
                <button onClick={onSubmitted} >send</button>
            </form>
        </aside>
    )
}

export default Chat;