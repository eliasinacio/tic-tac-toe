// export default function createGame() {
//   // Remover chamadas que buscam coisas no front, pois esse código será executado no back
//   // Em vez disso, construir uma matriz que será retornada pro front e lá sim será mostrado com base na matriz
  
//   const matriz = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', ''],
//   ]

//   function getPositions () {
//     return matriz
//   }

//   function clearGame() {
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         matriz[i][j] = ''
//       }
//     }
//   }

//   function getOption() {
//     for (option of options) {
//       if (option.checked) return option
//     }
//   }

//   function clearOption() {
//     for (option of options) {
//       option.checked = false
//     }
//   }

//   function switchOption() {
//     if (optionX.checked) {
//       optionX.checked = false
//       optionO.checked = true
//     } else optionX.checked = true
//   }

//   function mark(element, value) {
//     element.innerHTML = value
//   }

//   function checkLine(x, y, z) {
//     return (
//       x === y && x === z && y === z && x !== ''
//     )
//   }

//   let hasWinner = false

//   function checkHasWinner() {
//     if (checkLine(matriz[0][0], matriz[0][1], matriz[0][2])) {
//       grid.classList.add('h0')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[1][0], matriz[1][1], matriz[1][2])) {
//       grid.classList.add('h1')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[2][0], matriz[2][1], matriz[2][2])) {
//       grid.classList.add('h2')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[0][0], matriz[1][0], matriz[2][0])) {
//       grid.classList.add('v0')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[0][1], matriz[1][1], matriz[2][1])) {
//       grid.classList.add('v1')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[0][2], matriz[1][2], matriz[2][2])) {
//       grid.classList.add('v2')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[2][0], matriz[1][1], matriz[0][2])) {
//       grid.classList.add('d0')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     } else if (checkLine(matriz[0][0], matriz[1][1], matriz[2][2])) {
//       grid.classList.add('d1')
//       hasWinner = true
//       winMessage.style.opacity = 100
//     }
//   }

//   function play() {
//     clearGame()
//     clearOption()

//     for (pos of allPositions) {
//       pos.addEventListener('click', function (event) {
//         if (getOption() && !hasWinner) {
//           if (event.target.innerHTML === '') {
//             mark(event.target, getOption().value)
//             checkHasWinner()
//             switchOption()
//           }
//         }
//       })
//     }
//   }

//   return {
//     clearGame,
//     getOption,
//     clearOption,
//     switchOption,
//     mark,
//     checkLine,
//     checkHasWinner,
//     play,
//   }
// }

function draw() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  if (canvas.getContext) {
    context.fillStyle = "rgb(200 200 200)";
    context.fillRect(0, 0, 40, 40);

    context.fillStyle = "rgb(150 150 150)";
    context.fillRect(0, 41, 40, 40);
    
    context.fillStyle = "rgb(200 200 200)";
    context.fillRect(0, 82, 40, 40);

    context.fillStyle = "rgb(150 150 150)";
    context.fillRect(41, 0, 40, 40);
    
    context.fillStyle = "rgb(200 200 200)";
    context.fillRect(41, 41, 40, 40);
    
    context.fillStyle = "rgb(150 150 150)";
    context.fillRect(41, 82, 40, 40);
    
    context.fillStyle = "rgb(200 200 200)";
    context.fillRect(82, 0, 40, 40);
    
    context.fillStyle = "rgb(150 150 150)";
    context.fillRect(82, 41, 40, 40);
    
    context.fillStyle = "rgb(200 200 200)";
    context.fillRect(82, 82, 40, 40);
  }
}

draw();
