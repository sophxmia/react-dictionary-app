import React, { useEffect } from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  useEffect(() => {
    if (props.result) {
      const audioElement = document.getElementById("audioElement");
      const word = props.result[0].word;

      // Check if the UK pronunciation is available, otherwise use the US pronunciation
      const ukPronunciationUrl = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-uk.mp3`;
      const usPronunciationUrl = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;

      audioElement.src =
        props.result[0].phonetics[0]?.audio || usPronunciationUrl;
    }
  }, [props.result]);

  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result[0].word}</h2>
          <Phonetic phonetic={props.result[0].phonetics} />
          <audio controls className="mt-2" id="audioElement">
            <source
              src={`https://api.dictionaryapi.dev/media/pronunciations/en/${props.result[0].word}-uk.mp3`}
              type="audio/mpeg"
            ></source>
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
