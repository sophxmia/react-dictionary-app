import React from "react";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return <div className="Result"></div>;
  } else {
    return null;
  }
}
