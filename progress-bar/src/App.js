import React, {useState} from 'react';
import TaskButton from ".components/TaskButton"
import './App.css';

function App() {
  const [progress, setProgress] = useState(false);
  return (
    <div className="App">
      <TaskButton />
    </div>
  );
}

export default App;
