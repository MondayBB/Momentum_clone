const images = ["img01", "img02", "img03"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bodyBg = document.body;
bodyBg.style.backgroundImage = `url(img/${randomImg}.jpg)`;
bodyBg.style.backgroundRepeat = "no-repeat";
bodyBg.style.backgroundPosition = "center";
bodyBg.style.backgroundSize = "cover";
