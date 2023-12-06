import React from "react";

export default function Definition(props) {
  if (props.definitions) {
    return (
      <div className="Definition">
        <p>{props.definitions.definition}</p>
        <em>
          <small>{props.definitions.example}</small>
        </em>
      </div>
    );
  } else {
    return null;
  }
}
