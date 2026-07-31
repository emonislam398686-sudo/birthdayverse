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
// NEW TAB OPENER FOR LOVE STORY CARDS
    function openStoryPage(title, imgSrc, message) {
      const newTab = window.open('', '_blank');

      const htmlContent = `
        <!DOCTYPE html>
        <html lang="bn">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title} - BirthdayVerse</title>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
            body {
              background: linear-gradient(180deg, #fff0f5 0%, #ffd6e0 100%);
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
            }
            .card {
              background: white;
              max-width: 450px;
              width: 100%;
              border-radius: 20px;
              padding: 25px;
              text-align: center;
              box-shadow: 0 10px 30px rgba(255, 64, 129, 0.2);
              animation: fadeIn 0.5s ease-in-out;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            h2 { color: #d81b60; margin-bottom: 15px; font-size: 24px; }
            .img-container {
              width: 100%;
              height: 250px;
              border-radius: 15px;
              overflow: hidden;
              margin-bottom: 20px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            .img-container img { width: 100%; height: 100%; object-fit: cover; }
            .message {
              font-size: 15px;
              color: #4a4a4a;
              line-height: 1.6;
              background: #fff0f3;
              padding: 15px;
              border-radius: 12px;
              border-left: 4px solid #ff4081;
              text-align: left;
            }
            .btn-group {
              display: flex;
              gap: 10px;
              justify-content: center;
              margin-top: 20px;
            }
            .back-btn {
              background: linear-gradient(90deg, #ff5252, #ff4081);
              color: white;
              border: none;
              padding: 12px 22px;
              border-radius: 25px;
              font-weight: 600;
              font-size: 14px;
              cursor: pointer;
              box-shadow: 0 4px 12px rgba(255, 64, 129, 0.3);
              transition: transform 0.2s ease;
            }
            .back-btn:active { transform: scale(0.95); }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>${title} ❤️</h2>
            <div class="img-container">
              <img src="${imgSrc}" alt="${title}">
            </div>
            <div class="message">${message}</div>
            
            <div class="btn-group">
              <button class="back-btn" onclick="window.close()">⬅️ Back to Main Page</button>
            </div>
          </div>
        </body>
        </html>
      `;

      newTab.document.write(htmlContent);
      newTab.document.close();
    }
