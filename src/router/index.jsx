import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthController from "../components/auth-controller";
import Chat from "../pages/chat";
import Counter from "../pages/Counter";
import Login from "../pages/login";
import TestPage from "../pages/testPage";

export default function Router() {
  return (
    <div className="container-fluid w-100 vh-100 p-3 d-flex flex-column">
      <BrowserRouter>
        <AuthController />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Chat} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/counter" component={Counter} />
      </BrowserRouter>
    </div>
  );
}
