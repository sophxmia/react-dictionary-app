import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h1>{props.result[0].word}</h1>
          <Phonetic phonetic={props.result[0].phonetics} />
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
