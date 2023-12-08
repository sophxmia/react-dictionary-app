import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result[0].word}</h2>
          <Phonetic phonetic={props.result[0].phonetics} />
          <audio controls className="mt-2">
            {props.result[0].phonetics.map((phonetic, index) => (
              <source
                key={index}
                src={phonetic.audio}
                type="audio/mpeg"
              ></source>
            ))}
            Your browser does not support the audio element.
          </audio>
        </section>
        {props.result[0].meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
