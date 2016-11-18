// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function topleft() {
  var topleft= document.createElementNS(namespace, "circle")
  var canvas=document.getElementById("game-board")
  topleft.setAttribute("cx", 45)
  topleft.setAttribute("cy", 50)
  topleft.setAttribute("r", 30)
  topleft.setAttribute("fill", "green")
  canvas.appendChild(topleft)
}
