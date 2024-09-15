// timer.js

const timer = (() => {
  let startTime = null;
  let elapsedTime = 0;
  let timerInterval = null;

  const start = () => {
    if (timerInterval) return; // Prevent multiple intervals
    startTime = new Date();
    timerInterval = setInterval(() => {
      if (startTime) {
        // elapsedTime = Math.floor((new Date() - startTime) / 1000);
        // elapsedTime = ((new Date() - startTime)).toFixed(2)/ 1000;
        elapsedTime = parseFloat(((new Date() - startTime) / 1000).toFixed(2));
 // Elapsed time in seconds
      }
    }, 1000);
  };

  const stop = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  };

  const reset = () => {
    stop();
    startTime = new Date(); // Set startTime to now to prevent negative time
    elapsedTime = 0;
  };

  const getTime = () => elapsedTime;

  return {
    start,
    stop,
    reset,
    get time() {
      return getTime();
    }
  };
})();

export default timer;
