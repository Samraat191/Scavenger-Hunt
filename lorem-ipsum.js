var scavProgress = 0

let scavProgressElement = document.getElementById("scav-progress")

let scav1 = document.getElementById("scav1")

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
    alert("URL Piece: 3")
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
scav1.onclick = () => {
  handleClickSecret(1)
}


// Draggable Image + Define Combo
const combo = "1234"
let currCombo = ""

let image = document.getElementById("img")
let box = document.querySelectorAll(".box")

// Sets data when Image is draggged
image.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.effectAllowed = "move";
});

// Loops through every box
for (let i = 0; i <= box.length - 1; i++) {
  // Make it so that user can drop the image
  box[i].addEventListener("dragover", (e) => {
    e.preventDefault()
  })

  // Appends the image to the box when dropped
  box[i].addEventListener("drop", (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("text/plain")
    image.style = "position: relative;"
    e.target.appendChild(image)
    
    // Checks Combonation
    // Gets the id
    let id = e.target.innerHTML[26]
    currCombo += id
    
    // Checks if the user got the Combonation
    if (currCombo == combo) {
      handleClickSecret(2)
    }
    
    // Reset Combo if Incorrect Number Shows Up
    if (currCombo != combo.slice(0, currCombo.length)) {
      currCombo = ""
    }
  })
}
