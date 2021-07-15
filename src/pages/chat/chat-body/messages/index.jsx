import React, { useEffect, useRef, useState } from "react";
import Message from "./message";

export default function Messages({ messages = [] }) {
  const divRef = useRef(null);
  const messagesRef = document.getElementById('messages')
  useEffect(() => {
      if(!divRef.current) return
      divRef.current.scrollTop = divRef.current?.scrollHeight
  },[messages.length,messagesRef]);
  return (
    <div className="position-absolute w-100 mh-100 overflow-auto p-3"  ref={divRef} id="messages">
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
}
