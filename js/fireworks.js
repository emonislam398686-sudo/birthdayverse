// =====================================
// Fireworks + Confetti
// =====================================

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function launchFireworks() {

    for (let i = 0; i < 25; i++) {

        const firework = document.createElement("div");

        firework.innerHTML = "✨";
        firework.style.position = "fixed";
        firework.style.left = random(10, 90) + "vw";
        firework.style.top = random(20, 80) + "vh";
        firework.style.fontSize = random(20, 40) + "px";
        firework.style.zIndex = "999999";
        firework.style.pointerEvents = "none";
        firework.style.transition = "all 1s ease-out";

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.style.transform = `scale(3) rotate(${random(0,360)}deg)`;
            firework.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            firework.remove();
        }, 1200);
    }
}

function createConfetti() {

    const colors = [
        "#ff4d6d",
        "#ffd60a",
        "#4cc9f0",
        "#80ed99",
        "#c77dff"
    ];

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.zIndex = "999999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = random(2,5);

        confetti.animate([
            {
                transform:"translateY(0) rotate(0deg)"
            },
            {
                transform:`translateY(110vh) rotate(${random(360,1080)}deg)`
            }
        ],{
            duration:duration*1000,
            easing:"linear"
        });

        setTimeout(()=>{
            confetti.remove();
        },duration*1000);
    }
}
