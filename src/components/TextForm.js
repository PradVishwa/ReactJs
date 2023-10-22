import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    let nText = text.toUpperCase();
    setText(nText);
  };

  const handelLoClick = () => {
    let nText = text.toLowerCase();
    setText(nText);
  };

  const handelClearClick = () => {
    let nText = ("");
    setText(nText);
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="TextBox"
            onChange={handelOnChange}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1" onClick={handelUpClick}> Convert UpperCase </button>
        <button className="btn btn-outline-info mx-1" onClick={handelLoClick}> Convert UpperCase </button>
        <button className="btn btn-outline-danger mx-1" onClick={handelClearClick}> Clear </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
