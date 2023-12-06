import React from "react";

export default function Definition(props) {
  if (props.definitions) {
    return (
      <div className="Definition">
        <ul>
          <li>{props.definitions.definition}</li>
          <ol>
            <em>
              <small>{props.definitions.example}</small>
            </em>
          </ol>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
