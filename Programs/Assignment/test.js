var sec = 0;
var ID = 0;
function printMsg() {
  document.getElementById("msg").innerHTML = sec + " seconds";
  sec++;
}
function start() {
  ID = window.setInterval(printMsg, 1000);
}
function stop() {
  window.clearInterval(ID);
}
function reset1() {
  sec = 0;
  document.getElementById("msg").innerHTML = sec + " seconds";
}
