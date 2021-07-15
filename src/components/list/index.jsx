import React from "react";

export const List = ({ data = [], ListComponent,...rest })=> {
  return (
    <>
      {data.map((elem) => (
        <ListComponent {...elem} key={elem?.id} {...rest} />
      ))}
    </>
  );
}
