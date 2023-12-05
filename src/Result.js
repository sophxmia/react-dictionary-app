import React from "react";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h1>{props.result[0].word}</h1>
          <Phonetic phonetic={props.result[0].phonetics} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
