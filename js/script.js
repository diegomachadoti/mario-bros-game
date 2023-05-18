
/* pegar o elemento da imagem do mario*/
const mario = document.querySelector('.mario') 
const pipe = document.querySelector('.pipe') 
const gameOver = document.querySelector('.gameOver') 


/* Logica para o Mario pular */
const jump = () => {

    /* quando clicar qualquer tecla add a função jump no mario */
    mario.classList.add('jump') 
    
    
    /* remove a class para ADD de novo conforme timeout da animação mario-jump-animation 500ms para ADD novamente conforme evento do teclado */
    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500);

}


/* Logica quando o deslocamento do pipe com o mario encostar o jogo acabe no caso fazer um replace na imagem do mario */
const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft; // delocamento esquerdo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); // trazer a altura e intervalo da posição do mario de acordo com o pulo (+ converte para inteiro)
    //console.log(pipePosition)
    //console.log(marioPosition)


    /* Se posicição do pipe com o mario 120 || posição do pipe > 0 || posição do mario com jump ao pipe*/
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 96){
        pipe.style.animation = 'none'// para animação do pipe
        pipe.style.left = `${pipePosition}px`  // posiçao de parada exatamento a posição quando encosta no mario

        mario.style.animation = 'none'// para animação do mario
        mario.style.bottom = `${marioPosition}px`  // posiçao do mario se encostra no pipe seja a mesma do pipe

        // Se der game over substituir a imagem do mario
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameOver.src = './images/mario-game-over.png'
        gameOver.style.display = 'block'; 

        // para o loop apos gameOver
        clearInterval(loop);
        //pauseMusic();
        
    }

    }, 10)


/* Função para tocar música */
function playMusic() {
    var audio = document.getElementById('audioContainer');
    audio.play();
  
 
//   var audio = document.querySelector('.music-player');
//   audio.play();
}

// function pauseMusic() {
//   var audio = document.querySelector('.music-player');
//   audio.pause();
// }
  

/* Escutar o evento do teclado */
document.addEventListener('keydown', jump) 