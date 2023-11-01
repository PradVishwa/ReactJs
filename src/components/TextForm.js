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
  const handelCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert('Content copied to clipboard');
  };

  const handelSpace = () => {
    let nText = text.replace(/\s+/g, ' ');
    setText(nText);
  };

  const handelCaptalize = () => {
    let nText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(nText);
  };


  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color : props.mode==='dark'? 'white' : '#021030'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="TextBox"
            onChange={handelOnChange}
            value={text}
            rows="8"
            style={{backgroundColor : props.mode==='dark' ? '#021030' : 'white', color : props.mode==='dark'? 'white' : 'black'}}
          ></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1" onClick={handelUpClick}> Convert UpperCase </button>
        <button className="btn btn-outline-info mx-1" onClick={handelLoClick}> Convert UpperCase </button>
        <button className="btn btn-outline-danger mx-1" onClick={handelClearClick}> Clear </button>
        <button className="btn btn-outline-success mx-1" onClick={handelCopyClick}> Copy </button>
        <button className="btn btn-outline-warning mx-1" onClick={handelSpace}> Remove Extra Space</button>
        <button className={`btn btn-outline-${props.mode==='dark'? 'light' : 'dark'} mx-1`} onClick={handelCaptalize}>First Later Capitle</button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'? 'white' : '#021030'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something text in text box and then preview"}</p>
      </div>
    </>
  );
}
