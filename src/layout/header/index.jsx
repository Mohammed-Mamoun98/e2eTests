import React from 'react'
import { Button } from '@material-ui/core';
import { logout } from '../../firebase/auth';

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));


  const handleSignOut = () => {
    logout();
  };
    return (
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
    )
}
