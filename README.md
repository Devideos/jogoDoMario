# 🎮 Mario Jump Game

Um jogo simples e divertido inspirado no clássico **Mario**, desenvolvido com **HTML, CSS e JavaScript puro**.  
O objetivo é pular os obstáculos (canos) no momento certo e sobreviver o máximo possível!

---

## 📸 Preview do Projeto

![Mario Jump Preview](./img/mario.gif)

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando apenas tecnologias base da web:

- **HTML5** – Estrutura da aplicação
- **CSS3** – Estilização e animações
- **JavaScript (Vanilla JS)** – Lógica do jogo, eventos e colisões

---

## 🕹️ Como Jogar

- Pressione **qualquer tecla do teclado** para fazer o Mario pular
- Desvie dos canos
- Se encostar no cano → **Game Over**
- Atualize a página para jogar novamente

---

## ⚙️ Funcionalidades

✔️ Animação contínua do cenário  
✔️ Sistema de pulo com animação CSS  
✔️ Detecção de colisão em tempo real  
✔️ Animação de Game Over  
✔️ Código simples, didático e fácil de entender  

---

## 🧠 Lógica do Jogo (Resumo)

- O **cano** se move continuamente da direita para a esquerda usando `@keyframes`
- O **Mario** pula quando uma tecla é pressionada
- Um `setInterval` verifica:
  - A posição horizontal do cano
  - A posição vertical do Mario
- Se houver colisão:
  - As animações são interrompidas
  - A imagem do Mario muda para *Game Over*
  - O loop de verificação é encerrado

---

## 📂 Estrutura de Pastas

```bash
mario-jump/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── mario.gif
    ├── game-over.png
    ├── pipe.png
    └── clouds.png
