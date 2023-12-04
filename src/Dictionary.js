import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <section>
        <form>
          <label>Welcome to the Dictionary? What is your search today?</label>
          <div className="row my-3">
            <div className="col-sm-7">
              <input
                type="search"
                placeholder="Enter your search..."
                className="form-control mb-3"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-2 mb-1">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <small className="hint">Examples: coding, program, developer</small>
      </section>
    </div>
  );
}
