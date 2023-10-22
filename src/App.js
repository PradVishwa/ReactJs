import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="PradTextUtils" aboutText="about us" />
      <div className="container my-3">
        <TextForm heading="Enter the text to anlyze Below" />
      </div>
    </>
  );
}

export default App;
