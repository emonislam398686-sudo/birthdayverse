/* ======================================================
      BirthdayVerse V3 - Smooth JS
====================================================== */

// Loader Fix
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => loader.style.display = "none", 500);
    }, 1200);
  }
});

// Scroll to Sections
const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  });
}

const galleryBtn = document.getElementById("galleryBtn");
if (galleryBtn) {
  galleryBtn.addEventListener("click", () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  });
}

// Floating Actions
const topBtn = document.getElementById("topBtn");
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const shareBtn = document.getElementById("shareBtn");
if (shareBtn) {
  shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Link Copied to Clipboard!");
  });
}

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  });
}

// Celebration Overlay
const celebration = document.getElementById("celebrationOverlay");
const celebrateBtn = document.getElementById("celebrateBtn");

setTimeout(() => {
  if (celebration) celebration.style.display = "flex";
}, 2500);

if (celebrateBtn) {
  celebrateBtn.addEventListener("click", () => {
    if (typeof confetti === "function") {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }
    if (celebration) celebration.style.display = "none";
  });
}
