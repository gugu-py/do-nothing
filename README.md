# Nothing (inspired by the game on Steam)

This is a practice project on `React.js`. The mechanism is inspired by 'Nothing' on Steam. **It is not original.**


## Functions

That’s a fun and intriguing concept! Here’s a breakdown of the functions you'll need to implement for the "Nothing" website, along with their difficulty levels:

### Functions to Implement:

1. **Start Button Functionality**
   - **Description**: Initializes the timer when the user clicks the "Start" button.
   - **Difficulty**: Easy
   - **Details**: Set up a `useState` to manage the timer and a `useEffect` or similar mechanism to start the timer when the button is clicked.

2. **Timer Functionality**
   - **Description**: Keeps track of the elapsed time from when the user clicks "Start" until they interact with the page.
   - **Difficulty**: Medium
   - **Details**: Use `setInterval` or `setTimeout` to increment the timer and manage the state. Make sure to clean up intervals when necessary.

3. **Detect User Interaction**
   - **Description**: Detects any mouse movement, keypresses, or clicks to stop the timer.
   - **Difficulty**: Medium
   - **Details**: Add event listeners for `mousemove`, `keydown`, and `click`. Use `useEffect` to add and clean up these event listeners.

4. **Stop Timer and Record Time**
   - **Description**: Stops the timer and records the total time when user interaction is detected.
   - **Difficulty**: Easy
   - **Details**: When any interaction is detected, clear the timer and save the elapsed time.

5. **Display Time**
   - **Description**: Shows the total time spent.
   - **Difficulty**: Medium


6. **Reset Timer**
   - **Description**: Provide an option to reset the timer.
   - **Difficulty**: Easy
   - **Details**: Implement a reset button to clear the timer.

8. **UI/UX Design**
   - **Description**: Create an intuitive and engaging user interface for the website.
   - **Difficulty**: Medium
   - **Details**: Design a layout that clearly shows the timer, start button, and results. Consider adding styling and animations to enhance user experience.

