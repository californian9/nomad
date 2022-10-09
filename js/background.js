const backgroundImage = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg"
]

// 랜덤 넘버 추출
const randomBgNumber = Math.floor(Math.random() * backgroundImage.length);
// 배경이미지 변경
document.body.style.backgroundImage = `url(img/${backgroundImage[randomBgNumber]})`;