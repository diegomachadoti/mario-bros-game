/* pegar o elemento da imagem do mario*/
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".gameOver");

/* Logica para o Mario pular */
const jump = () => {
    /* quando clicar qualquer tecla add a função jump no mario */
    mario.classList.add("jump");

    /* remove a class para ADD de novo conforme timeout da animação mario-jump-animation 500ms para ADD novamente conforme evento do teclado */
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};

/* Logica quando o deslocamento do pipe com o mario encostar o jogo acabe no caso fazer um replace na imagem do mario */
const loop = setInterval(() => {
    console.log("loop");
      playMusic();

    const pipePosition = pipe.offsetLeft; // delocamento esquerdo
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", ""); // trazer a altura e intervalo da posição do mario de acordo com o pulo (+ converte para inteiro)
    //console.log(pipePosition)
    //console.log(marioPosition)

    /* Se posicição do pipe com o mario 120 || posição do pipe > 0 || posição do mario com jump ao pipe*/
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 96) {
        pipe.style.animation = "none"; // para animação do pipe
        pipe.style.left = `${pipePosition}px`; // posiçao de parada exatamento a posição quando encosta no mario

        mario.style.animation = "none"; // para animação do mario
        mario.style.bottom = `${marioPosition}px`; // posiçao do mario se encostra no pipe seja a mesma do pipe

        // Se der game over substituir a imagem do mario
        mario.src = "./images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        gameOver.src = "./images/mario-game-over.png";
        gameOver.style.display = "block";

        // para o loop apos gameOver
        clearInterval(loop);
        pauseMusic();
        playMusicGameOver();
    }
}, 10);





// Atualizando a velocidade do pipe conforme o tempo
var pipeElement = document.querySelector('.pipe');
var initialDuration = 2  ; // Duração inicial da animação em segundos
var animationStart = null;

function increaseAnimationSpeed(timestamp) {
  if (!animationStart) {
    animationStart = timestamp; // Salva o tempo de início da animação
  }

  var elapsed = (timestamp - animationStart) / 50000; // Tempo decorrido em segundos
  console.log("TEMPO INICIO " + elapsed);
  var newDuration = initialDuration - elapsed; // Duração atualizada da animação
  console.log("TEMPO CALCULADO " + newDuration);

  if (newDuration <= 0) {
    newDuration = 0.1; // Defina um valor mínimo para a duração
  }

  // Atualiza a propriedade de animação com a nova duração
  var timeAtual = pipeElement.style.animationDuration = newDuration + 's';
  console.log("TEMPO ATUAL " + timeAtual);

  // Chama a função novamente na próxima renderização
  requestAnimationFrame(increaseAnimationSpeed);

//   // Chama a função novamente na próxima renderização
//   setTimeout(function () {
//     requestAnimationFrame(increaseAnimationSpeed);
//   }, 5000); // Aguarda 10 segundos para chamar novamente a função
}

// Inicia a função para aumentar a velocidade da animação
requestAnimationFrame(increaseAnimationSpeed);







/* Função para tocar música */
function playMusic() {
    document.getElementById("audioContainer").play();
}

function pauseMusic() {
    var audio = document.getElementById("audioContainer");
    audio.pause();
}

function playMusicGameOver() {
    document.getElementById("audioContainerGameOver").play();
}

function pauseMusicGameOver() {
    var audio = document.getElementById("audioContainerGameOver");
    audio.pause();
}

/* Escutar o evento do teclado */
document.addEventListener("keydown", jump);
