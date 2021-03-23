document.getElementById('button').addEventListener('click', button)

let userInput = 0

function button () {
userInput = document.getElementById('input').value
userInput = parseInt(userInput)

if (userInput < 0) {
  document.getElementById('para').innerHTML =
  'Negative'
  document.getElementById('para').style.color = 'red'
  } else  {
  document.getElementById('para').innerHTML = 
  'Positive'
  document.getElementById('para').style.color = 'green'
  }

} 