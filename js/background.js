const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 이게 전부 숫자로 되다.

const bgImage = document.createElement("img"); //img태그를 생성함

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// Math.random() * Array.length;
// Math.floor(1.23213) 나머지 숫자를 버림 이건 JAVA 랑 같네