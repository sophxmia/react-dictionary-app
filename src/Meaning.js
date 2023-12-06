import React from "react";
import Definition from "./Definition";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <p key={index}>
              <Definition definitions={definitions} />
            </p>
          );
        })}
        <p></p>
      </div>
    );
  }
}
