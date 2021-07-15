import { CardActionArea } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ChatLink({ name = "test", id }) {
  return (
    <NavLink to={`/chats/${id}`}>
      <CardActionArea className="p-3">{name}</CardActionArea>
    </NavLink>
  );
}
