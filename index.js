var scavProgress = 0

let scavStartElement = document.getElementById("scav-start")
let scavProgressElement = document.getElementById("scav-progress")

let scav2 = document.getElementById("scav2")

let maxSecrets = 2

let secretsFound = [false, false]

// Updates the Scavenger Progress
function updateScavProgress(number) {
  scavProgress++;
  scavProgressElement.style = "opacity: 100%;"
  scavProgressElement.innerHTML = `Scavenger Hunt Progress: ${scavProgress}/${maxSecrets} Found`
  secretsFound[number - 1] = true
    
  // Gives url char if al secrets are found
  if (scavProgress == maxSecrets) {
    alert("URL Piece: b")
  }
}

// Alert's User when a secret is clicked
function handleClickSecret(id) {
  if (secretsFound[id-1]) {
    alert("Stop Clicking Me!!1!")
    return;
  }
  
  alert(`You found a SECERET (${id}/${maxSecrets})`)
  updateScavProgress(id)
}

// Onclicks for secrets
scavStartElement.onclick = () => {
  handleClickSecret(1)
}

scav2.onclick = () => {
  handleClickSecret(2)
}

// DVD LOGO

// From mdn
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let dvd = document.getElementById("dvd")

// Get the Width and Height
let width = window.innerWidth - 200
let height = window.innerHeight - 100

// Sets x, y, and velocities
let x = getRandomInt(0, width)
let y = getRandomInt(0, height)
let xVel = getRandomInt(-15, 15)
let yVel = getRandomInt(-15, 15)

// Funcrtion Called Every Frame
function updatePos() {
  // Update the Width and Height
  width = window.innerWidth - 200
  height = window.innerHeight - 100
  
  // Sets Velocity if vel gets to 0
  if (!xVel) {
    xVel = 10
  }
  
  if (!yVel) {
    yVel = -10
  }
  
  x += xVel
  y += yVel
  
  // Checks Boundaries
  if (x >= width || x <= 0) {
    x = x >= width ? width : 0
    xVel = ((Math.abs(xVel) / xVel) * -1) * getRandomInt(-15, 15)
    yVel = ((Math.abs(yVel) / yVel) * -1) * getRandomInt(-15, 15)
  }
  
  if (y >= height || y <= 0) {
    y = y >= height ? height : 0
    yVel = ((Math.abs(yVel) / yVel) * -1) * getRandomInt(-15, 15)
    xVel = ((Math.abs(xVel) / xVel) * -1) * getRandomInt(-15, 15)
  }
  
  // Sets Position
  dvd.style.left = `${x}px`
  dvd.style.top = `${y}px`
  
  window.requestAnimationFrame(updatePos)
}

window.requestAnimationFrame(updatePos)
