const images = ["img01", "img02", "img03"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${randomImg}.jpg`;

document.body.append(bgImg);