import React, {useState} from "react";

const ProgressBar = ({progress}) => {
    const [totalTime, setTotalTime] = useState(2);
    const [width, setWidth] = useState(0);

    return(
        <div style={{"width":"400px"}}>
            <div style={{"width":{width}, "backgroundColor":"black"}}>
            </div>
        </div>
    )
}

export default ProgressBar;