import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AuthController from "../components/auth-controller";
import Chat from "../pages/chat";
import Counter from "../pages/Counter";
import Login from "../pages/login";
import PostList from "../pages/post-list";
import PostViewer from "../pages/post-viewer";
import TestPage from "../pages/testPage";
import { TodoList } from "../pages/todo-list";
import Layout from "./../layout/index";

export default function Router() {
  return (
    <Layout>
      <BrowserRouter>
        <AuthController />
        <Route exact path="/login" component={Login} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/todo" component={TodoList} />
        <Route exact path="/view/:postId" component={PostViewer} />
        <Route  path="/chats" component={Chat} />
      </BrowserRouter>
    </Layout>
  );
}
