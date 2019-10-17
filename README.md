# progressBar
Making a progress bar and incorporating XState.



## What we're making
-Loading bar to represent amount of thing completed



### First Step
1. Create a button and progress bar
2. Creating a fake operation
3. Total Time for Operation
4. Time as a percentage

### States
1. Inactive
  1. BUTTONCLICK -> Loading
2. Loading
  1. SUCCESS -> Final(success)
  2. FAILURE -> Final(failure)
3. Final
  1. something red if failure
  2. something green if success

### Components
1. taskButton
  1. button
    1. onClick = prop.startTask
2. rectangleLoadingBar
  STATE: [totalTime, setTotalTime] = useState(2)
  STATE: [width, setWidth] = useState(0);

  1. receives props.progress
  2. div within div in charge of increase width by % background color
  3. change inner div's width inline styles 
  4. outer div with fixed width
  
3. App
  STATE: [progress, setProgress] = useState(false)
  1. startTask =>  setProgress(true)
  2. pass startTask to taskButton
  3. pass progress to rectangleLoadingBar
