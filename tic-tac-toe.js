// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function topleft() {
  var Shape= document.createElementNS(namespace, "circle")
  var topleft= document.createElementNS(namespace, "circle")
  var canvas=document.getElementById("game-board")

  topleft.setAttribute("cx", 45)
  topleft.setAttribute("cy", 50)
  topleft.setAttribute("r", 30)
  topleft.setAttribute("fill", "green")
  canvas.appendChild(topleft)
}
function topmid() {
  var topmid= document.createElementNS(namespace, "circle")
  var canvas=document.getElementById("game-board")
  topmid.setAttribute("cx", 135)
  topmid.setAttribute("cy", 45)
  topmid.setAttribute("r", 30)
  topmid.setAttribute("fill", "green")
  canvas.appendChild(topmid)
}
function topright() {
  var topright= document.createElementNS(namespace, "circle")
  var canvas=document.getElementById("game-board")
  topright.setAttribute("cx", 225)
  topright.setAttribute("cy", 45)
  topright.setAttribute("r", 30)
  topright.setAttribute("fill", "green")
  canvas.appendChild(topright)
}
function midleft() {
  var midleft= document.createElementNS(namespace, "circle")
  var canvas=document.getElementById("game-board")
  midleft.setAttribute("cx", 45)
  midleft.setAttribute("cy", 140)
  midleft.setAttribute("r", 30)
  midleft.setAttribute("fill", "green")
  canvas.appendChild(midleft)
}
function midmid() {
  var midmid= document.createElementNS(namespace, "circle")
  var canvas=document.getElementById("game-board")
  midmid.setAttribute("cx", 135)
  midmid.setAttribute("cy", 140)
  midmid.setAttribute("r", 30)
  midmid.setAttribute("fill", "green")
  canvas.appendChild(midmid)
}
function midright() {
  var midright= document.createElementNS(namespace, "circle")
  var canvas= document.getElementById("game-board")
  midright.setAttribute("cx", 225)
  midright.setAttribute("cy", 140)
  midright.setAttribute("r", 30)
  midright.setAttribute("fill", "green")
  canvas.appendChild(midright)
}
function botleft() {
  var botleft= document.createElementNS(namespace, "circle")
  var canvas= document.getElementById("game-board")
  botleft.setAttribute("cx", 45)
  botleft.setAttribute("cy", 230)
  botleft.setAttribute("r", 30)
  botleft.setAttribute("fill", "green")
  canvas.appendChild(botleft)
}
function botmid() {
  var botmid= document.createElementNS(namespace, "circle")
  var canvas= document.getElementById("game-board")
  botmid.setAttribute("cx", 135)
  botmid.setAttribute("cy", 230)
  botmid.setAttribute("r", 30)
  botmid.setAttribute("fill", "green")
  canvas.appendChild(botmid)
}
function botright() {
  var botright= document.createElementNS(namespace, "circle")
  var canvas= document.getElementById("game-board")
  botright.setAttribute("cx", 225)
  botright.setAttribute("cy", 230)
  botright.setAttribute("r", 30)
  botright.setAttribute("fill", "green")
  canvas.appendChild(botright)
}
