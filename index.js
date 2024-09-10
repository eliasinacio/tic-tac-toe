const allPositions = document.getElementsByClassName('position')

const a0 = document.getElementById('a0')
const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const b0 = document.getElementById('b0')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const c0 = document.getElementById('c0')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')

const m = [
  [a0, a1, a2],
  [b0, b1, b2],
  [c0, c1, c2]
]

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

function checkLine(x, y, z) {
  console.log(x, y, z)
  return (
    x.innerText && y.innerText && z.innerText &&
    x.innerText === y.innerText &&
    x.innerText === z.innerText &&
    y.innerText === z.innerText
  )
}

function checkHasWinner() {
  const grid = document.getElementById('grid')
  const winMessage = document.getElementById('winMessage')

  if (checkLine(m[0][0], m[0][1], m[0][2])) {
    grid.classList.add('h0')
    winMessage.style.opacity = 100
  } else if (checkLine(m[1][0], m[1][1], m[1][2])) {
    grid.classList.add('h1')
    winMessage.style.opacity = 100
  } else if (checkLine(m[2][0], m[2][1], m[2][2])) {
    grid.classList.add('h2')
    winMessage.style.opacity = 100
  } else if (checkLine(m[0][0], m[1][0], m[2][0])) {
    grid.classList.add('v0')
    winMessage.style.opacity = 100
  } else if (checkLine(m[0][1], m[1][1], m[2][1])) {
    grid.classList.add('v1')
    winMessage.style.opacity = 100
  } else if (checkLine(m[0][2], m[1][2], m[2][2])) {
    grid.classList.add('v2')
    winMessage.style.opacity = 100
  } else if (checkLine(m[2][0], m[1][1], m[0][2])) {
    grid.classList.add('d0')
    winMessage.style.opacity = 100
  } else if (checkLine(m[0][0], m[1][1], m[2][2])) {
    grid.classList.add('d1')
    winMessage.style.opacity = 100
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
          checkHasWinner()
          switchOption()
        }
      }
    })
  }
}

play()