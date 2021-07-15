import { Input } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Messages from "./messages";
import { User } from './../../../firebase/classes/user';

export default function ChatBody() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const {chatID} = useParams()

  const handleChange = ({ target: { value } }) => setMessage(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((msgs) => [...msgs, { text: message, mine: true }]);
    setMessage("");
  };

  const clearMessages = () => setMessages([])

  useEffect(() => {
    clearMessages()
  },[chatID])

  return (
    <div className="w-100 d-flex flex-column flex-root bg-light h-100">
      <div className="flex-root d-flex flex-column  justify-content-end position-relative">
        <Messages messages={messages} />
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          fullWidth
          placeholder="Message..."
          value={message}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
