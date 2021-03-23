document.getElementById('button').addEventListener('click', button)

let userInput = 0

function button () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)
  // notices what user inputs

  if (userInput < 0) {
  // Determine if written number has < 0 or is regular like 4
    document.getElementById('para').innerHTML =
  'Negative'
  // Display Negative Text in red
    document.getElementById('para').style.color = 'red'
  } else {
    document.getElementById('para').innerHTML =
  'Positive'
  // determine if number is above 0 and if so positive is written in green
    document.getElementById('para').style.color = 'green'
  }
}
