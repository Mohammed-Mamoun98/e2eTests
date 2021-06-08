import { Button, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { googleAuthPopup, onAuthStateChanged } from "../../firebase/auth";
import { auth } from "../../firebase/config";
import { createUser, isUserExists } from "../../firebase/firestore";

export default function Login() {
  const { push } = useHistory();
  const signInWithGoogle = () => {
    try {
      googleAuthPopup().then(async (result) => {
        const user = result.user;
        const { email, displayName, uid } = user;
        // const isUserExist = await isUserExists(user.uid);

          localStorage.setItem("user", JSON.stringify(user));
          createUser(user?.uid, {
            email,
            displayName,
            uid,
          });
        push("/");
      });
    } catch (error) {}
  };

  return (
    <div className="row" style={{ marginTop: "7rem" }}>
      <div className="col-12 d-flex mt-">
        <Button
          onClick={signInWithGoogle}
          className="w-100 m-x-auto"
          style={{ alignSelf: "flex-end" }}
          color="primary"
          variant="contained"
        >
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}
