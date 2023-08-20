const COUNTER_KEY = 'my-counter';

export function countDown(i, callback) {
  //callback = callback || function(){};
  timer = setInterval(function() {
    minutes = parseInt(i / 60, 10);
    seconds = parseInt(i % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("displayDiv").innerHTML = "Time (h:min:sec) left for this station is  " + "0:" + minutes + ":" + seconds;

    if ((i--) > 0) {
      window.sessionStorage.setItem(COUNTER_KEY, i);
    } else {
      window.sessionStorage.removeItem(COUNTER_KEY);
      clearInterval(timer);
      callback();
    }
  }, 1000);
}