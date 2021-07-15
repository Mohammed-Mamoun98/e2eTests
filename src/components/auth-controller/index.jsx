import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase/config";

export default function AuthController() {
  const { push } = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        push("/login");
        localStorage.removeItem("user");
      } else push("/chats");
    });
  }, []);

  return null;
}
