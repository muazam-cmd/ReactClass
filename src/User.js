import React from "react";

export default function User(props) {
  return (
    <div>
      <h1>
        My name is {props.name} and my age is {props.age}
      </h1>
    </div>
  );
}
