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
            <div key={index}>
              <Definition definitions={definitions} />
            </div>
          );
        })}
        {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
          <>
            <h4>Synonyms</h4>
            {props.meaning.synonyms.map(function (synonyms, index) {
              return (
                <ul key={index}>
                  <li>{synonyms}</li>
                </ul>
              );
            })}
          </>
        )}
        {props.meaning.antonyms && props.meaning.antonyms.length > 0 && (
          <>
            <h4>Antonyms</h4>
            {props.meaning.antonyms.map(function (antonyms, index) {
              return (
                <div key={index}>
                  <ul>
                    <li>{antonyms}</li>
                  </ul>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
