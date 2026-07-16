// Configurações básicas do jogo
const GAME_DURATION = 15000;      // 15 segundos (entre 10 e 20)
const SPAWN_INTERVAL = 700;       // 700 ms (entre 500 e 1000)
const ENEMY_LIFETIME = 800;       // inimigo some sozinho após 800 ms

let score = 0;
let timeLeft = GAME_DURATION / 1000;
let gameRunning = false;
let intervalId = null;
let timeoutId = null;
let timerIntervalId = null;

const scoreSpan = document.getElementById("score");
const timeSpan = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const gameArea = document.getElementById("game-area");

// Iniciar jogo
startBtn.addEventListener("click", startGame);

function startGame() {
    if (gameRunning) return;

    gameRunning = true;
    score = 0;
    scoreSpan.textContent = score;

    timeLeft = GAME_DURATION / 1000;
    timeSpan.textContent = timeLeft;

    startBtn.disabled = true;
    startBtn.textContent = "Jogando...";

    // Atualizar tempo em tela
    timerIntervalId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeSpan.textContent = timeLeft;
        }
    }, 1000);

    // Criar inimigos continuamente
    intervalId = setInterval(spawnEnemy, SPAWN_INTERVAL);

    // Limitar duração do jogo
    timeoutId = setTimeout(endGame, GAME_DURATION);
}

function endGame() {
    gameRunning = false;

    clearInterval(intervalId);
    clearInterval(timerIntervalId);
    clearTimeout(timeoutId);

    // Remover quaisquer inimigos restantes
    const enemies = document.querySelectorAll(".enemy");
    enemies.forEach(enemy => enemy.remove());

    startBtn.disabled = false;
    startBtn.textContent = "Iniciar jogo";

    alert("Fim de jogo! Sua pontuação foi: " + score);
}

// Criar inimigo (máscara) em posição aleatória
function spawnEnemy() {
    if (!gameRunning) return;

    // Criar elemento
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");

    // Posição aleatória dentro da área de jogo
    const areaRect = gameArea.getBoundingClientRect();
    const enemySize = 80;

    const maxX = areaRect.width - enemySize;
    const maxY = areaRect.height - enemySize;

    const posX = Math.random() * maxX;
    const posY = Math.random() * maxY;

    enemy.style.left = posX + "px";
    enemy.style.top = posY + "px";

    // Evento de clique para pontuar
    enemy.addEventListener("click", () => {
        if (!gameRunning) return;

        score++;
        scoreSpan.textContent = score;

        // Feedback visual simples: mudar cor da sombra rapidamente
        enemy.style.boxShadow = "0 0 20px rgba(255, 0, 0, 1)";
        setTimeout(() => {
            enemy.remove();
        }, 100); // remove logo depois do clique
    });

    // Adicionar ao DOM
    gameArea.appendChild(enemy);

    // Remover automaticamente após ENEMY_LIFETIME
    setTimeout(() => {
        enemy.remove();
    }, ENEMY_LIFETIME);
}