// Seleciona o elemento Mario
const mario = document.querySelector('.mario');

// Função para fazer o Mario pular
const jump = () => {
    mario.classList.add('jump');

    // Remove a classe 'jump' após 500ms
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Adiciona um ouvinte de evento para a tecla pressionada
document.addEventListener('keydown', jump);