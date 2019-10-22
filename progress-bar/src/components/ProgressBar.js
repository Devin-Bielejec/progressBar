import React, { useState, useEffect } from "react";
import TaskButton from "./TaskButton";
import "./ProgressBar.css";

const ProgressBar = ({ progress, setProgress, startTask }) => {
  const [totalTime, setTotalTime] = useState(200);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = () => {
      let time = 0;
      setInterval(() => {
        if (time < totalTime) {
          time += totalTime * 0.01;

          setWidth(Math.floor((time / totalTime) * 100));
        } else {
          setProgress(false);
          clearInterval();
        }
      }, totalTime * 0.01);
    };
    if (progress) {
      timer();
    }
  }, [progress]);

  console.log(width);

  return (
    <div>
      <div className="progress-bar">
        <div
          className="filler"
          style={{
            width: `${width}%`
          }}
        ></div>
      </div>
      <TaskButton startTask={startTask} />
    </div>
  );
};

export default ProgressBar;
