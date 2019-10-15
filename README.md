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
2. rectangleLoadingBar
3. App 