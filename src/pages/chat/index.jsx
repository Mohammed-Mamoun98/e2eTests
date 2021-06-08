import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { logout } from "../../firebase/auth";
import { auth } from "../../firebase/config";
import { isUserExists, updateUser } from "../../firebase/firestore";
import ChatBody from "./chat-body";

export default function Chat() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSignOut = () => {
    logout();
  };

  return (
    <>
      <div className="d-flex">
        <div className="flex-root">Hi {user?.displayName}</div>

          <Button
            className=""
            onClick={handleSignOut}
            variant="contained"
            color="secondary"
          >
            SignOut
          </Button>
      </div>
      <ChatBody />
    </>
  );
}
