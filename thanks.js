document.getElementById("black").onclick = () => {
  alert("You don't have to look for secrets anymore. You can rest.")
}

// DVD LOGO

// From mdn
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let dvds = document.querySelectorAll(".dvd")

// Get the Width and Height
let width = window.innerWidth - 200
let height = window.innerHeight - 100

// Sets x, y, and velocities
let x = []
let y = []
let xVel = []
let yVel = []

for(let i = 0; i <= dvds.length - 1; i++) {
  x.push(getRandomInt(0, width))
  y.push(getRandomInt(0, height))
  if (dvds[i].id == "black") {
    xVel.push(getRandomInt(25, 30))
    yVel.push(getRandomInt(25, 30))
  } else {
    xVel.push(getRandomInt(-15, 15))
    yVel.push(getRandomInt(-15, 15))
  }
}

// Function Called Every Frame
function updatePos() {
  // Update the Width and Height
  width = window.innerWidth - 200
  height = window.innerHeight - 100
  
  // Loops through all dvds
  for(let i = 0; i <= dvds.length - 1; i++) {
    // Sets Velocity if vel gets to 0
    if (!xVel[i]) {
      xVel[i] = 10
    }

    if (!yVel[i]) {
      yVel[i] = -10
    }

    x[i] += xVel[i]
    y[i] += yVel[i]

    if (x[i] >= width || x[i] <= 0) {
      x[i] = x[i] >= width ? width : 0
      
      if (dvds[i].id == "black") {
        xVel[i] = ((Math.abs(xVel[i]) / xVel[i]) * -1) * getRandomInt(25, 30)
      } else {
        xVel[i] = ((Math.abs(xVel[i]) / xVel[i]) * -1) * getRandomInt(-15, 15)
        yVel[i] = ((Math.abs(yVel[i]) / yVel[i]) * -1) * getRandomInt(-15, 15)
      }
    }

    if (y[i] >= height || y[i] <= 0) {
      y[i] = y[i] >= height ? height : 0
      
      if (dvds[i].id == "black") {
        yVel[i] = ((Math.abs(yVel[i]) / yVel[i]) * -1) * getRandomInt(25, 30)
      } else {
        xVel[i] = ((Math.abs(xVel[i]) / xVel[i]) * -1) * getRandomInt(-15, 15)
        yVel[i] = ((Math.abs(yVel[i]) / yVel[i]) * -1) * getRandomInt(-15, 15)
      }
    }

    // Sets Position
    dvds[i].style.left = `${x[i]}px`
    dvds[i].style.top = `${y[i]}px`
  }
  
  window.requestAnimationFrame(updatePos)
}

window.requestAnimationFrame(updatePos)