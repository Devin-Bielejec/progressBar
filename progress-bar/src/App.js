import React, {useState} from 'react';
import ProgressBar from "./components/ProgressBar"
import TaskButton from "./components/TaskButton"
import './App.css';

function App() {
  const [progress, setProgress] = useState(false);
  
  const startTask = () => {
    setProgress(true);
  }
  
  return (
    <div className="App">
      <ProgressBar progress={progress} />
      <TaskButton startTask={startTask}/>
    </div>
  );
}

export default App;
