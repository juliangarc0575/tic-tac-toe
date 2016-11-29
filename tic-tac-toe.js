// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var player1 = "circle"
function topleft() {
  var canvas = document.getElementById("game-board")
  if (player1 == "circle") {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 45)
      circle.setAttribute("cy", 50)
        circle.setAttribute("r", 20)
        circle.setAttribute("fill", "magenta")
        canvas.appendChild(circle)
        player1 = "rect"
  } else {
    var rect = document.createElementNS(namespace, "rect")
    rect.setAttribute("x", 45)
    rect.setAttribute("y", 50)
    rect.setAttribute("fill", "blue")
    canvas.appendChild(rect)
    player1 = "circle"
  }
}
var player1 = "rect"
function topmid() {
  var canvas = document.getElementById("game-board")
  if (player1 == "circle") {
    var circle = document.createElementNS(namespce, "circle")
    circle.setAttribute("cx", 140)
    circle.setAttribute("cy", 50)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "magenta")
    circle.appendChild(circle)
    player1 = "rect"

  }else {
    var rect = docuument.createElementNS(namespace, "rect")
    rect.setAttribute("x", 140)
    rect.setAttribute("y", 50)
    rect.setAttribute("fill", "blue")
    rect.appendChild(rect)
    player1 = "circle"
  }
}
