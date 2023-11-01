import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Where Dark Mode Is Enable Or Not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021030";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="PradTextUtils"
          aboutText="about us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to anlyze Below" mode={mode}  />} /> */}
          {/* </Routes> */}
          <TextForm heading="Enter the text to anlyze Below" mode={mode}  />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
