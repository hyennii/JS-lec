const images = ["0.jpg", "1.jpg", "2.jpg"];     //img 폴더 속 이미지들과 이름 같게

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");      //js에서 html element 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);   //body에 html 추가
