import { useState } from "react";
import "./App.css";
import { EditorContextProvider } from "./components/EditorContext";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
function App() {
  const [state, setstate] = useState("");

  return (
    <div className="App">
      <EditorContextProvider>
        <Navbar state={state} setstate={setstate} />
        <Home state={state} setstate={setstate} />
      </EditorContextProvider>
    </div>
  );
}

export default App;
