function randomColor() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  return `rgb(${a}, ${b}, ${c})`;
}

function getRandomColors(n) {
  const colors = [];
  for (let i = 0; i < n; i++) {
    colors.push(randomColor());
  }
  return colors;
}

const box = document.querySelectorAll(".squares");
const levelEasy = document.querySelector(".easy");
const levelHard = document.querySelector(".hard");
const headBox = document.querySelector(".rgb");
const play = document.querySelector(".heading1");
const squareBox = document.querySelector(".square-box");
const play2=document.querySelector(".heading2")

function clearSquares() {
  squareBox.innerHTML = "";
  play2.textContent=""
  
}

function createSquares(num) {
  const colors = getRandomColors(num);
  const boxColor = Math.floor(Math.random() * colors.length);
  const randomHeadingColor = colors[boxColor];

  for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    square.style.backgroundColor = colors[i];
    squareBox.appendChild(square);
    // console.log(square)
    square.addEventListener("click", () => {
      const selectedColor = square.style.backgroundColor;
      const correct = document.querySelector(".heading2");

      if (selectedColor === randomHeadingColor) {
        document.querySelectorAll(".squares").forEach((sq) => {
          sq.style.backgroundColor = randomHeadingColor;
          sq.style.display = "flex";
        });
        heading.style.backgroundColor = randomHeadingColor;
        correct.textContent = "correct";
        play.textContent = "PLAY AGAIN?";
        play.style.backgroundColor = "green";
        play.style.color = "white";
      } else {
        correct.textContent = "try again!";
        square.style.display = "none";
      }
    });
  }

  headBox.textContent = `${randomHeadingColor}`;

  const heading = document.querySelector(".major-color");
  //  heading.style.backgroundColor=randomColor();
  play.addEventListener("click", function () {
    location.reload();
  });

  levelEasy.addEventListener("click", function () {
    // alert("easy");
    clearSquares();
    createSquares(3);
    play.textContent="New Colors?";
    play.style.backgroundColor="white"
    play.style.color="blue"
    

  });
  levelHard.addEventListener("click", function () {
    // alert("hard");
    clearSquares();
    createSquares(6);
    play.textContent="New Colors?"
    play.style.backgroundColor="white"
    play.style.color="blue"

  });
}

createSquares(6);
