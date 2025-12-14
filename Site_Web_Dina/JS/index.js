"use strict";

const dina = document.getElementById("dina");

dina.addEventListener("click", () => {
    const newDina = document.createElement("div");
    newDina.classList.add("pop-dina");
    newDina.textContent = "Dina";

    // Position aléatoire
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    newDina.style.left = x + "px";
    newDina.style.top = y + "px";

    // Taille aléatoire
    const size = Math.random() * 50 + 20; // 20px à 70px
    newDina.style.fontSize = size + "px";

    // Couleur aléatoire
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    newDina.style.color = `rgb(${r},${g},${b})`;

    // Rotation aléatoire
    const rotate = Math.random() * 360;
    newDina.style.transform = `rotate(${rotate}deg)`;

    document.body.appendChild(newDina);

    // Supprimer après 5 secondes pour ne pas saturer
    setTimeout(() => {
        newDina.remove();
    }, 5000);
});

