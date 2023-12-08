import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h4>{props.phonetic[1].text}</h4>
      </div>
    );
  } else {
    return null;
  }
}
