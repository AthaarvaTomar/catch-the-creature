document.addEventListener("DOMContentLoaded", function () {
  const playGameButton = document.querySelector(".screen:first-child button");
  const characterButtons = document.querySelectorAll(".watch");
  const screens = document.querySelectorAll(".screen");
  const playGround = document.querySelector(".playground");
  const scoreValue = document.querySelector(".time-score h5 span");
  
  let selectedCreature = "";

  playGameButton.addEventListener("click", function () {
      screens[0].style.display = "none";
      screens[1].style.display = "flex";
  });

  characterButtons.forEach(function (characterButton, index) {
      characterButton.addEventListener("click", function () {
          screens[1].style.display = "none";
          screens[2].style.display = "flex";

          selectedCreature = characterButton.querySelector("img").getAttribute("src");

          setInterval(function () {
              createCreature();
          }, 1000);
      });
  });

  function createCreature() {
      const newCreature = document.createElement("img");
      newCreature.setAttribute("src", selectedCreature);
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rot = Math.random() * 360;
      newCreature.style.left = x + "%";
      newCreature.style.top = y + "%";
      newCreature.style.transform = "rotate(" + rot + "deg)";
      playGround.appendChild(newCreature);

      newCreature.addEventListener("click", function () {
          score++;
          scoreValue.innerHTML = score;
          playGround.removeChild(newCreature);
      });

      setTimeout(function () {
          playGround.removeChild(newCreature);
      }, 1200);
  }
});

  

