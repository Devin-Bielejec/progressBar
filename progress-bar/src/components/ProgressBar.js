import React, {useState} from "react";

export default ProgressBar = ({progress}) => {

}

2. rectangleLoadingBar
  STATE: [totalTime, setTotalTime] = useState(2)
  STATE: [width, setWidth] = useState(0);

  1. receives props.progress
  2. div within div in charge of increase width by % background color
  3. change inner div's width inline styles 
  4. outer div with fixed width