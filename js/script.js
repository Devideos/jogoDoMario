// Seleciona os elementos Mario, cano e nuvens do DOM
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


// Função para fazer o Mario pular
const jump = () => {
    mario.classList.add('jump');

    // Remove a classe 'jump' após 500ms
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


// Loop para verificar colisão entre Mario e o cano
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // Verifica se o cano está na posição do Mario
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Parar a animação do cano
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Parar a animação das nuvens
        if (clouds) {
            const cloudsPosition = clouds.offsetLeft;
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;
        }

        // Parar a animação do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Muda a imagem do Mario para a imagem de game over
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); // Para o loop de verificação de colisão
    }
}, 10);


// Adiciona um ouvinte de evento para a tecla pressionada
document.addEventListener('keydown', jump);