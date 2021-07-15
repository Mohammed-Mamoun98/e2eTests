import React from "react";
import { Route } from "react-router-dom";
import ChatBody from "./chat-body";
import ChatList from "./chat-list/index";

export default function Chat() {
  return (
    <div className="row flex-root">
      <div className="col-3">
        <ChatList />
      </div>
      <div className="col-9">
        <Route path="/chats/:chatID">
          <ChatBody />
        </Route>
      </div>
    </div>
  );
}
