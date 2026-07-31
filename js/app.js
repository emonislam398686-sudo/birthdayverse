/* ======================================================
        BirthdayVerse V3 Ultimate
        Main Animation Engine
====================================================== */

"use strict";

/* ===============================
      SHORTCUT
=============================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ===============================
      CONFIG
=============================== */

const body = document.body;

const loader = $("#loader");

const hero = $(".hero");

const bgMusic = $("#bgMusic");

const celebration = $("#celebrationOverlay");

/* ===============================
      LOADER
=============================== */

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.remove();

},1000);

},3500);

});

/* ===============================
      TYPING EFFECT
=============================== */

const typingText = $("#typingText");

const message =

"Every heartbeat reminds me how lucky I am to have you. Happy Birthday My Princess ❤️";

let index = 0;

function typing(){

if(index < message.length){

typingText.innerHTML += message.charAt(index);

index++;

setTimeout(typing,45);

}

}

typing();

/* ===============================
      LOVE COUNTER
=============================== */

const startDate = new Date("2025-02-14");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / 86400000);

const hours = now.getHours();

const minutes = now.getMinutes();

const seconds = now.getSeconds();

$("#loveDays").innerHTML = days;

$("#loveHours").innerHTML = hours;

$("#loveMinutes").innerHTML = minutes;

$("#loveSeconds").innerHTML = seconds;

}

setInterval(updateCounter,1000);

updateCounter();

/* ===============================
      HEADER
=============================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

document.querySelector("header")

.classList.add("scrolled");

}else{

document.querySelector("header")

.classList.remove("scrolled");

}

});

/* ===============================
      MUSIC
=============================== */

let musicStarted=false;

document.addEventListener("click",()=>{

if(!musicStarted){

bgMusic.play().catch(()=>{});

musicStarted=true;

}

},{once:true});

/* ===============================
      FLOATING HEARTS
=============================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heartDrop";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

(4+Math.random()*5)+"s";

document

.getElementById("heartRain")

.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,600);

/* ===============================
      SAKURA
=============================== */

function createFlower(){

const flower=document.createElement("div");

flower.className="sakura";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=

(5+Math.random()*6)+"s";

document

.getElementById("flowers")

.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,800);
/* ======================================================
      HEART CURSOR ENGINE
====================================================== */

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursor2.style.left=e.clientX-15+"px";
cursor2.style.top=e.clientY-15+"px";

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});

/* ======================================================
      TWINKLING STARS
====================================================== */

const stars=document.getElementById("starsBg");

function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=

(Math.random()*3+2)+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

setTimeout(()=>{

star.remove();

},8000);

}

setInterval(createStar,120);

/* ======================================================
      BUTTERFLY ENGINE
====================================================== */

const butterfly=document.querySelector(".floatingButterfly");

let butterflyAngle=0;

function butterflyFly(){

butterflyAngle+=0.015;

butterfly.style.left=

50+

Math.sin(butterflyAngle)*35+

"%";

butterfly.style.top=

35+

Math.cos(butterflyAngle*1.8)*18+

"%";

requestAnimationFrame(butterflyFly);

}

butterflyFly();

/* ======================================================
      CLOUD PARALLAX
====================================================== */

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

document.querySelectorAll(".floatingCloud")

.forEach((cloud,index)=>{

cloud.style.transform=

`translateX(${scroll*(0.05+index*0.02)}px)`;

});

});

/* ======================================================
      HERO PHOTO FLOAT
====================================================== */

const photo=document.querySelector(".photoCircle");

let photoFloat=0;

function floatPhoto(){

photoFloat+=0.02;

photo.style.transform=

`translateY(${Math.sin(photoFloat)*12}px)
 rotate(${Math.sin(photoFloat)*2}deg)`;

requestAnimationFrame(floatPhoto);

}

floatPhoto();

/* ======================================================
      TEDDY FOLLOW MOUSE
====================================================== */

const teddy=document.querySelector(".heroTeddy");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-0.5)*30;

const y=(e.clientY/window.innerHeight-0.5)*20;

teddy.style.transform=

`translate(${x}px,${y}px)
 rotate(${x/2}deg)`;

});

/* ======================================================
      FIREFLY ENGINE
====================================================== */

function createFirefly(){

const fly=document.createElement("div");

fly.style.position="fixed";

fly.style.width="6px";

fly.style.height="6px";

fly.style.borderRadius="50%";

fly.style.background="#FFD700";

fly.style.boxShadow="0 0 20px gold";

fly.style.left=Math.random()*100+"vw";

fly.style.top=Math.random()*100+"vh";

fly.style.zIndex="3";

fly.style.pointerEvents="none";

document.body.appendChild(fly);

let angle=Math.random()*6.28;

let speed=0.5+Math.random();

function animate(){

angle+=0.04;

fly.style.left=

parseFloat(fly.style.left)+

Math.cos(angle)*speed+

"px";

fly.style.top=

parseFloat(fly.style.top)+

Math.sin(angle)*speed+

"px";

requestAnimationFrame(animate);

}

animate();

setTimeout(()=>{

fly.remove();

},12000);

}

setInterval(createFirefly,900);

/* ======================================================
      HERO BUTTON EFFECT
====================================================== */

document.querySelectorAll(".heroButtons button")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/* ======================================================
      SMOOTH SCROLL
====================================================== */

document.querySelectorAll('a[href^="#"]')

.forEach(link=>{

link.onclick=function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

};

});
/* ======================================================
      GIFT BOX ANIMATION
====================================================== */

const giftBox=document.getElementById("giftBox");
const giftTop=document.querySelector(".giftTop");
const giftMessage=document.getElementById("giftMessage");

if(giftBox){

giftBox.addEventListener("click",()=>{

giftTop.style.transform=
"translateY(-100px) rotate(-12deg)";

giftMessage.style.display="block";

giftMessage.animate([

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:900,

fill:"forwards"

});

launchFireworks();

createConfetti();

});

}

/* ======================================================
      LOVE LETTER
====================================================== */

const letterCover=document.querySelector(".letterCover");
const letterPaper=document.querySelector(".letterPaper");

if(letterCover){

letterCover.onclick=()=>{

letterCover.style.display="none";

letterPaper.style.display="block";

letterPaper.animate([

{

opacity:0,

transform:"scale(.8)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:700,

fill:"forwards"

});

};

}

/* ======================================================
      CAKE
====================================================== */

const flame=document.getElementById("flame");

const blowBtn=document.getElementById("blowCandle");

const cakeBtn=document.getElementById("cutCake");

if(blowBtn){

blowBtn.onclick=()=>{

flame.style.opacity=0;

showToast("🕯 Wish Granted ❤️");

};

}

if(cakeBtn){

cakeBtn.onclick=()=>{

launchFireworks();

createConfetti();

showToast("🎂 Cake Cut Successfully ❤️");

};

}

/* ======================================================
      TEDDY PARTY
====================================================== */

const danceBtn=document.getElementById("danceBtn");

const hugBtn=document.getElementById("hugBtn");

const flowersBtn=document.getElementById("flowersBtn");

const teddyFriends=document.querySelectorAll(".teddyFriends img");

if(danceBtn){

danceBtn.onclick=()=>{

teddyFriends.forEach((item)=>{

item.animate([

{transform:"translateY(0) rotate(0deg)"},

{transform:"translateY(-30px) rotate(-15deg)"},

{transform:"translateY(0) rotate(15deg)"}

],{

duration:700,

iterations:6

});

});

};

}

if(hugBtn){

hugBtn.onclick=()=>{

showToast("🤗 Sending A Big Hug ❤️");

};

}

if(flowersBtn){

flowersBtn.onclick=()=>{

for(let i=0;i<30;i++){

createFlower();

}

showToast("🌹 Flowers For You ❤️");

};

}

/* ======================================================
      PROPOSAL
====================================================== */

const yesBtn=document.getElementById("yesBtn");

const foreverBtn=document.getElementById("alwaysBtn");

if(yesBtn){

yesBtn.onclick=()=>{

launchFireworks();

createConfetti();

showToast("💍 Forever Begins ❤️");

};

}

if(foreverBtn){

foreverBtn.onclick=()=>{

showToast("♾️ Forever Together ❤️");

};

}

/* ======================================================
      CELEBRATION
====================================================== */

const celebrateBtn=document.getElementById("celebrateBtn");

if(celebrateBtn){

celebrateBtn.onclick=()=>{

launchFireworks();

createConfetti();

for(let i=0;i<15;i++){

setTimeout(()=>{

launchFireworks();

},i*400);

}

};

}

/* ======================================================
      TOAST
====================================================== */

function showToast(text){

const toast=document.createElement("div");

toast.innerHTML=text;

toast.style.position="fixed";

toast.style.bottom="40px";

toast.style.left="50%";

toast.style.transform="translateX(-50%)";

toast.style.background="rgba(0,0,0,.85)";

toast.style.color="white";

toast.style.padding="15px 30px";

toast.style.borderRadius="40px";

toast.style.fontSize="18px";

toast.style.backdropFilter="blur(10px)";

toast.style.zIndex="999999";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},2500);

}
/* ======================================================
      GALLERY VIEWER
====================================================== */

const viewer = document.getElementById("photoViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

const galleryImages = document.querySelectorAll(".polaroid img");

let currentImage = 0;

galleryImages.forEach((img,index)=>{

img.onclick=()=>{

currentImage=index;

openViewer();

};

});

function openViewer(){

viewer.style.display="flex";

viewerImage.src=

galleryImages[currentImage].src;

}

if(closeViewer){

closeViewer.onclick=()=>{

viewer.style.display="none";

};

}

/* ============================= */

const nextPhoto=document.getElementById("nextPhoto");

const prevPhoto=document.getElementById("prevPhoto");

if(nextPhoto){

nextPhoto.onclick=()=>{

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

openViewer();

};

}

if(prevPhoto){

prevPhoto.onclick=()=>{

currentImage--;

if(currentImage<0){

currentImage=

galleryImages.length-1;

}

openViewer();

};

}

/* ======================================================
      SETTINGS PANEL
====================================================== */

const settings=document.getElementById("settingsPanel");

const themeBtn=document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick=()=>{

settings.style.display=

settings.style.display==="block"

?"none":"block";

};

}

/* ======================================================
      DARK MODE
====================================================== */

const toggleTheme=document.getElementById("toggleTheme");

let dark=true;

if(toggleTheme){

toggleTheme.onclick=()=>{

dark=!dark;

document.body.classList.toggle("light");

toggleTheme.innerHTML=

dark?"Dark":"Light";

};

}

/* ======================================================
      MUSIC
====================================================== */

const musicBtn=document.getElementById("musicBtn");

const toggleMusic=document.getElementById("toggleMusic");

if(musicBtn){

musicBtn.onclick=()=>{

if(bgMusic.paused){

bgMusic.play();

musicBtn.innerHTML=

'<i class="fa-solid fa-pause"></i>';

}else{

bgMusic.pause();

musicBtn.innerHTML=

'<i class="fa-solid fa-music"></i>';

}

};

}

if(toggleMusic){

toggleMusic.onclick=()=>{

if(bgMusic.paused){

bgMusic.play();

toggleMusic.innerHTML="ON";

}else{

bgMusic.pause();

toggleMusic.innerHTML="OFF";

}

};

}

/* ======================================================
      SHARE
====================================================== */

const shareBtn=document.getElementById("shareBtn");

if(shareBtn){

shareBtn.onclick=()=>{

if(navigator.share){

navigator.share({

title:"BirthdayVerse",

text:"Happy Birthday ❤️",

url:location.href

});

}else{

navigator.clipboard.writeText(location.href);

showToast("🔗 Link Copied ❤️");

}

};

}

/* ======================================================
      BACK TO TOP
====================================================== */

const topBtn=document.getElementById("topBtn");

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* ======================================================
      CELEBRATION
====================================================== */

setTimeout(()=>{

celebration.style.display="flex";

},3000);

/* ======================================================
      KEYBOARD SHORTCUTS
====================================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

viewer.style.display="none";

settings.style.display="none";

}

if(e.key==="ArrowRight"){

if(viewer.style.display==="flex"){

nextPhoto.click();

}

}

if(e.key==="ArrowLeft"){

if(viewer.style.display==="flex"){

prevPhoto.click();

}

}

});

/* ======================================================
      END
====================================================== */

console.log(
"BirthdayVerse V3 Loaded Successfully ❤️");
