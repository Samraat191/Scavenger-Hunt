var scavProgress = 0

let scavProgressElement = document.getElementById("scav-progress")

let scav1 = document.getElementById("scav1")
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
    alert("URL Piece: !")
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

scav2.onclick = () => {
  handleClickSecret(2)
}
