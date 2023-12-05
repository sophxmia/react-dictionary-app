import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(word);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>Welcome to the Dictionary? What is your search today?</label>
            <div className="row my-2">
              <div className="col-sm-7">
                <input
                  type="search"
                  placeholder="Enter your search..."
                  defaultValue={props.defaultWord}
                  className="form-control mb-3"
                  autoFocus="on"
                  onChange={handleWordChange}
                />
              </div>
              <div className="col-sm-2 mb-1">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <small className="hint">Examples: coding, program, developer</small>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
