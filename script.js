const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const container = document.getElementById('game-container');
let score = 0;

function moveTarget() {
    const maxX = container.clientWidth - target.clientWidth;
    const maxY = container.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}


function showPoints(x, y, points) {
    const pointEl = document.createElement('div');
    pointEl.textContent = `+${points}`;
    pointEl.style.position = 'absolute';
    pointEl.style.left = `${x}px`;
    pointEl.style.top = `${y}px`;
    pointEl.style.color = '#0f0';
    pointEl.style.fontWeight = 'bold';
    pointEl.style.fontSize = '18px';
    pointEl.style.pointerEvents = 'none';
    pointEl.style.transition = 'all 0.8s ease-out';
    container.appendChild(pointEl);

    setTimeout(() => {
        pointEl.style.top = `${y - 30}px`;
        pointEl.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        pointEl.remove();
    }, 800);
}


target.addEventListener('click', (e) => {
    const points = Math.floor(Math.random() * 11) + 5;
    score += points;
    scoreDisplay.textContent = score;
    showPoints(e.clientX - container.offsetLeft, e.clientY - container.offsetTop, points);
    moveTarget();
});


container.addEventListener('click', (e) => {
    if (e.target.id !== 'target') {
        score = 0;
        scoreDisplay.textContent = score;
    }
});


setInterval(moveTarget, 2000);
