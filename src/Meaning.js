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
        <h3>Synonyms</h3>
        {props.meaning.synonyms.map(function (synonyms, index) {
          return (
            <ul key={index}>
              <li>{synonyms}</li>
            </ul>
          );
        })}
        <h3>Antonyms</h3>
        {props.meaning.synonyms.map(function (antonyms, index) {
          return (
            <>
              <ul key={index}>
                <li>{antonyms}</li>
              </ul>
            </>
          );
        })}
      </div>
    );
  }
}
