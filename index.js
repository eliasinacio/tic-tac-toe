const allPositions = document.getElementsByClassName('position')

const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')

const optionX = document.getElementById('optionX')
const optionO = document.getElementById('optionO')

const options = [optionX, optionO]

function clearGame() {
  for (pos of allPositions) {
    pos.innerHTML = ''
  }
}

function getOption() {
  for (option of options) {
    if (option.checked) return option
  }
}

function clearOption() {
  for (option of options) {
    option.checked = false
  }
}

function switchOption() {
  if (optionX.checked) {
    optionX.checked = false
    optionO.checked = true
  } else optionX.checked = true
}

function mark(element) {
  if (getOption().value === 'x') {
    element.innerHTML = '&#10060;'
  } else {
    element.innerHTML = '&#11093;'
  }
}

function play() {
  clearGame()
  clearOption()

  for (pos of allPositions) {
    pos.addEventListener('click', function (event) {
      if (getOption()) {
        if (event.target.innerHTML === '') {
          mark(event.target)
          switchOption()
        }
      }
    })
  }
}

play()