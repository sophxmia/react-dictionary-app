import React, { useEffect, useState } from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    if (props.result) {
      setAudioSrc(getAudioSource(props.result[0]));
    }
  }, [props.result]);

  const getAudioSource = (result) => {
    for (const phonetic of result.phonetics) {
      if (phonetic.audio) {
        return phonetic.audio;
      }
    }

    return result.sourceUrls[0] || "";
  };

  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result[0].word}</h2>
          <Phonetic phonetic={props.result[0].phonetics} />
          <audio controls className="mt-2" id="audioElement" src={audioSrc}>
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
