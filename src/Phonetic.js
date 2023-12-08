import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h4>{props.phonetic[1].text}</h4>
        <audio controls className="mt-2">
          <source src={props.phonetic[0].audio} type="audio/mpeg"></source>
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  } else {
    return null;
  }
}
