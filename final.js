let boxes = document.querySelectorAll(".box")
let startButton = document.getElementById("start")

let red = document.getElementById("red")
let orange = document.getElementById("orange")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let blue1 = document.getElementById("blue1")
let blue2 = document.getElementById("blue2")
let purple = document.getElementById("purple")
let pink = document.getElementById("pink")

// Get the Width and Height
let width = window.innerWidth - 200
let height = window.innerHeight - 100

// Get Box Coords
let center = [(width / 2) + width / 20, (height / 2) + height / 16]

function calcCircleCoords(number, center, rad) {
  let coords = []
  let sep = 2 * Math.PI / number
  
  for (let i = 0; i < number; i++) {
    coords.push([center[0] - (rad * Math.cos(i * sep)), center[1] - (rad * Math.sin(i * sep))])
  }
  
  return coords
}

let boxCoords = calcCircleCoords(boxes.length, center, 200)

// Setting Box Positions + Start Button Position
for (let i = 0; i <= boxes.length - 1; i++) {
  boxes[i].style.left = `${boxCoords[i][0]}px`
  boxes[i].style.top = `${boxCoords[i][1]}px`
}

startButton.style.left = `${center[0] - 41}px`
startButton.style.top = `${center[1]}px`

// Starts animation on start
startButton.onclick = () => {
  startButton.innerHTML = "Show Again"
  
  orange.style.animation = "pop1 1.5s steps(2, jump-none)"
  red.style.animation = "pop1 1.5s steps(2, jump-none) 0.3s"
  yellow.style.animation = "pop1 1.5s steps(2, jump-none) 0.6s"
  
  blue1.style.animation = "pop2 1.5s steps(2, jump-none) 0.1s"
  blue2.style.animation = "pop2 1.5s steps(2, jump-none) 0.25s"
  green.style.animation = "pop2 1.5s steps(2, jump-none) 0.4s"
  pink.style.animation = "pop2 1.5s steps(2, jump-none) 0.55s"
  purple.style.animation = "pop2 1.5s steps(2, jump-none) 0.7s"
}

// Removes animations when it finishes
for (let i = 0; i <= boxes.length - 1; i++) {
  boxes[i].addEventListener("animationend", () => {
    boxes[i].style.removeProperty("animation")
  })
}

// Impliment the Code: 25164387 52641873

let combo = "2516438752641873"
let currCombo = ""

function getId(box) {
  switch (box.style.backgroundColor) {
    case "red":
      return 1;
    case "orange":
      return 2;
    case "yellow":
      return 3;
    case "green":
      return 4;
    case "dodgerblue":
      return 5;
    case "blue":
      return 6;
    case "purple":
      return 7;
    case "pink":
      return 8
  }
}

for (let i = 0; i <= boxes.length - 1; i++) {
  boxes[i].onclick = () => {
    // Update Current Combo
    currCombo += getId(boxes[i])
    
    // Check if Player got Combo
    if (currCombo == combo) {
      alert("thanksforplaying.html (You know what this is at this point)")
    }
    
    // Reset Combo if Incorrect Number Shows Up
    if (currCombo != combo.slice(0, currCombo.length)) {
      currCombo = ""
    }
    
    console.log(currCombo, combo)
  }
}

