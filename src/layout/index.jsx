import React from "react";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="container-fluid w-100 vh-100 p-3 d-flex flex-column">
      <Header />
      {children}
    </div>
  );
}
