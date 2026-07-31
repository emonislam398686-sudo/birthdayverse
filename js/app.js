/* ======================================================
        BirthdayVerse V3 Ultimate Engine
====================================================== */

"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const body = document.body;
const loader = $("#loader");
const bgMusic = $("#bgMusic");
const celebration = $("#celebrationOverlay");

/* ===============================
      LOADER
=============================== */
window.addEventListener("load", () => {
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => loader.remove(), 1000);
    }
  }, 2000);
});

/* ===============================
      TYPING EFFECT
=============================== */
const typingText = $("#typingText");
const message = "Every heartbeat reminds me how lucky I am to have you. Happy Birthday My Princess ❤️";
let index = 0;

function typing() {
  if (typingText && index < message.length) {
    typingText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typing, 45);
  }
}
typing();

/* ===============================
      LOVE COUNTER
=============================== */
const startDate = new Date("2025-02-14");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / 86400000);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if ($("#loveDays")) $("#loveDays").innerHTML = days;
  if ($("#loveHours")) $("#loveHours").innerHTML = hours;
  if ($("#loveMinutes")) $("#loveMinutes").innerHTML = minutes;
  if ($("#loveSeconds")) $("#loveSeconds").innerHTML = seconds;
}
setInterval(updateCounter, 1000);
updateCounter();

/* ===============================
      HEADER SCROLL
=============================== */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 80) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
});

/* ===============================
      MUSIC AUTO PLAY ON CLICK
=============================== */
let musicStarted = false;
document.addEventListener("click", () => {
  if (!musicStarted && bgMusic) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}, { once: true });

/* ===============================
      FLOATING EFFECTS
=============================== */
function createHeart() {
  const heartRain = document.getElementById("heartRain");
  if (!heartRain) return;
  const heart = document.createElement("div");
  heart.className = "heartDrop";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 5) + "s";
  heartRain.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}
setInterval(createHeart, 600);

function createFlower() {
  const flowers = document.getElementById("flowers");
  if (!flowers) return;
  const flower = document.createElement("div");
  flower.className = "sakura";
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (5 + Math.random() * 6) + "s";
  flowers.appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
}
setInterval(createFlower, 800);

/* ===============================
      CURSOR TRAIL
=============================== */
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  if (cursor && cursor2) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor2.style.left = (e.clientX - 15) + "px";
    cursor2.style.top = (e.clientY - 15) + "px";
  }

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

/* ===============================
      CELEBRATE BUTTON FIX
=============================== */
const celebrateBtn = document.getElementById("celebrateBtn");

if (celebrateBtn) {
  celebrateBtn.addEventListener("click", () => {
    // Confetti animation
    if (typeof confetti === "function") {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
    
    // Hide overlay after click
    if (celebration) {
      celebration.style.display = "none";
    }

    showToast("🎉 Happy Birthday Princess! ❤️");
  });
}

// Automatically show Celebration after 3.5 seconds
setTimeout(() => {
  if (celebration) celebration.style.display = "flex";
}, 3500);

/* ===============================
      GIFT & LETTER FIX
=============================== */
const giftBox = document.getElementById("giftBox");
const giftTop = document.querySelector(".giftTop");
const giftMessage = document.getElementById("giftMessage");

if (giftBox) {
  giftBox.addEventListener("click", () => {
    if (giftTop) giftTop.style.transform = "translateY(-100px) rotate(-12deg)";
    if (giftMessage) giftMessage.style.display = "block";
    if (typeof confetti === "function") confetti({ particleCount: 100 });
  });
}

const letterCover = document.querySelector(".letterCover");
const letterPaper = document.querySelector(".letterPaper");

if (letterCover) {
  letterCover.onclick = () => {
    letterCover.style.display = "none";
    if (letterPaper) letterPaper.style.display = "block";
  };
}

/* ===============================
      CAKE BUTTONS
=============================== */
const flame = document.getElementById("flame");
const blowBtn = document.getElementById("blowCandle");
const cakeBtn = document.getElementById("cutCake");

if (blowBtn) {
  blowBtn.onclick = () => {
    if (flame) flame.style.opacity = "0";
    showToast("🕯 Wish Granted ❤️");
  };
}

if (cakeBtn) {
  cakeBtn.onclick = () => {
    if (typeof confetti === "function") confetti({ particleCount: 120 });
    showToast("🎂 Cake Cut Successfully ❤️");
  };
}

/* ===============================
      UTILITY: TOAST MESSAGE
=============================== */
function showToast(text) {
  const toast = document.createElement("div");
  toast.innerHTML = text;
  toast.style.position = "fixed";
  toast.style.bottom = "40px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "rgba(0,0,0,.85)";
  toast.style.color = "white";
  toast.style.padding = "15px 30px";
  toast.style.borderRadius = "40px";
  toast.style.fontSize = "18px";
  toast.style.backdropFilter = "blur(10px)";
  toast.style.zIndex = "999999";
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2500);
}

console.log("BirthdayVerse V3 Fixed and Running! ❤️");
