import { Input } from "@material-ui/core";
import React, { useState } from "react";
import Messages from "./messages";

export default function ChatBody() {
    const [message,setMessage] = useState('')
    const [messages,setMessages] = useState([{text:'first',mine:true},{text:'second'}])

    const handleChange = ({target:{value}})=>setMessage(value)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setMessages(msgs => [...msgs,{text:message,mine:true}])
        setMessage('')
    }
  return (
    <div className="w-100 d-flex flex-column flex-root bg-light">
      
      <div className="flex-root d-flex flex-column  justify-content-end position-relative">
          <Messages messages={messages} />
      </div>
      <form onSubmit={handleSubmit}>
        <Input fullWidth placeholder="Message..." value={message} onChange={handleChange} />
      </form>
    </div>
  );
}
