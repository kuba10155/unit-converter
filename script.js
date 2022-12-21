/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number = document.getElementById("number")
let convertBtn = document.getElementById("convert-btn")
let lengthValue = document.getElementById("length-value")
let volumeValue = document.getElementById("volume-value")
let massValue = document.getElementById("mass-value")


convertBtn.addEventListener("click", function() {
  convertLength()
  convertVolume()
  convertMass()
})

function convertLength() {
  let metersInFeet = number.value * 3.281
  let feetinMeters = number.value / 3.281

  lengthValue.textContent = `
    ${number.value} meters = ${metersInFeet.toFixed(3)} feet |
    ${number.value} feet = ${feetinMeters.toFixed(3)} meters`;
}

function convertVolume() {
  let litersInGallons = number.value * 0.264
  let gallonsInLiters = number.value / 0.264

  volumeValue.textContent = `
    ${number.value} liters = ${litersInGallons.toFixed(3)} gallons |
    ${number.value} gallons = ${gallonsInLiters.toFixed(3)} liters`;
}

function convertMass() {
  let kilogramsInPounds = number.value * 2.204
  let poundsInKilograms = number.value / 2.204

  massValue.textContent = `
    ${number.value} kilos = ${kilogramsInPounds.toFixed(3)} pounds |
    ${number.value} pounds = ${poundsInKilograms.toFixed(3)} kilos`;
}
