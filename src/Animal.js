import React from "react";

export default function Animal(props) {
  return (
    <div>
      <h2>
        displaying Animals Data {props.name} {props.type} {props.breed}{" "}
        {props.color}
      </h2>
    </div>
  );
}
