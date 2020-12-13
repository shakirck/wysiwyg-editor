import { useState } from "react";
import "./App.css";
import { Editor } from "./components/Editor";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Preview } from "./components/Preview";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
