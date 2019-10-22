import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TaskButton from "./components/TaskButton";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(false);

  const startTask = () => {
    setProgress(true);
  };

  return (
    <div className="App">
      <ProgressBar
        startTask={startTask}
        setProgress={setProgress}
        progress={progress}
      />
    </div>
  );
}

export default App;
