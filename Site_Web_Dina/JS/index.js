"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const dina = document.getElementById("dina");

    dina.addEventListener("click", () => {
        function spawnDina() {
            const newDina = document.createElement("div");
            newDina.classList.add("pop-dina");
            newDina.textContent = "Dina";

            // Position aléatoire
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 50);
            newDina.style.left = x + "px";
            newDina.style.top = y + "px";

            // Taille aléatoire
            const size = Math.random() * 50 + 20;
            newDina.style.fontSize = size + "px";

            // Couleur aléatoire
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            newDina.style.color = `rgb(${r},${g},${b})`;

            // Rotation aléatoire : 50% de chance de tourner
            if (Math.random() < 0.5) {
                const spinDuration = Math.random() * 3 + 1; // 1s à 4s
                newDina.style.animation = `spin ${spinDuration}s linear infinite`;
            }

            document.body.appendChild(newDina);

            // Paillettes
            for (let i = 0; i < 20; i++) {
                const paille = document.createElement("div");
                paille.classList.add("paillette");
                paille.style.left = x + size / 2 + "px";
                paille.style.top = y + size / 2 + "px";
                const dx = (Math.random() - 0.5) * 200 + "px";
                const dy = (Math.random() - 0.5) * 200 + "px";
                paille.style.setProperty('--x', dx);
                paille.style.setProperty('--y', dy);
                document.body.appendChild(paille);
                setTimeout(() => paille.remove(), 1000);
            }

            // Mini explosion
            for (let i = 0; i < 10; i++) {
                const ex = document.createElement("div");
                ex.classList.add("explosion");
                ex.style.left = x + size / 2 + "px";
                ex.style.top = y + size / 2 + "px";
                const dx = (Math.random() - 0.5) * 150 + "px";
                const dy = (Math.random() - 0.5) * 150 + "px";
                ex.style.setProperty('--ex-x', dx);
                ex.style.setProperty('--ex-y', dy);
                const er = Math.floor(Math.random() * 256);
                const eg = Math.floor(Math.random() * 256);
                const eb = Math.floor(Math.random() * 256);
                ex.style.backgroundColor = `rgb(${er},${eg},${eb})`;
                ex.style.boxShadow = `0 0 10px rgb(${er},${eg},${eb}), 0 0 20px rgb(${er},${eg},${eb})`;
                document.body.appendChild(ex);
                setTimeout(() => ex.remove(), 600);
            }

            // Explosion GIF 1/4 du temps
            if (Math.random() < 0.25) {
                const explosionGif = document.createElement("img");
                explosionGif.src = "https://tenor.com/view/explosion-gif-transparent-gif-26964282.gif";
                explosionGif.style.position = "absolute";
                explosionGif.style.left = x + size / 2 + "px";
                explosionGif.style.top = y + size / 2 + "px";
                explosionGif.style.transform = "translate(-50%, -50%)";
                explosionGif.style.width = `${size * 2.5}px`;
                explosionGif.style.pointerEvents = "none";
                explosionGif.style.zIndex = "-1";
                document.body.appendChild(explosionGif);
                setTimeout(() => explosionGif.remove(), 800);
            }

            // Disparition ultra rapide : 50 à 150 ms
            const disappearTime = Math.random() * 100 + 50;
            setTimeout(() => {
                newDina.remove();
            }, disappearTime);

            // Nouvelle apparition aléatoire après disparition
            const nextSpawn = Math.random() * 100 + 50; // 50 à 150 ms
            setTimeout(spawnDina, nextSpawn);
        }

        // Lancer la boucle
        spawnDina();
    });
});
