import { useState } from "react";
import "./App.css";
import { Editor } from "./components/Editor";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Preview } from "./components/Preview";

function App() {
  const [state, setstate] = useState("");

  return (
    <div className="App">
      <Navbar state={state} setstate={setstate} />
      <Home state={state} setstate={setstate} />
    </div>
  );
}

export default App;
