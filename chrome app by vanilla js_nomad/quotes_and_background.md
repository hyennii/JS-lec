## quotes and background

### Math.random()
- 0부터 1 사이의 랜덤한 숫자 제공
- 10을 곱해 0부터 10사이의 숫자 추출 가능
- 정수로 만들기위한 3가지 방법

    1. round() : 소수점 아래 반올림
    2. ceil() : 올림
    3. floor() : 내림

```javaScript
   Math.floor(Math.random() * 10)   //랜덤하게 얻은 숫자에 10을 곱하고 정수로 만들기 위해 floor 사용
```

```javaScript
  const quote = document.querySelector("#quote span:first-child")   //명언
  const author = document.querySelector("#quote span:last-child")   //저자

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];    //Array.length를 사용해 길이 반환

  quote.innerText = todaysQuote.quote;    //출력
  author.innerText = todaysQuote.author;    //출력
```

```javaScript
    const images = ["0.jpg", "1.jpg", "2.jpg"];   //img 폴더 속 이미지들과 이름 같게
    
    const chosenImage = images[Math.floor(Math.random() * images.length)]
    const bgImage = document.createElement("img");   //js에서 html element 생성
    
    bgImage.src = `img/${chosenImage}`;
    
    document.body.appendChild(bgImage);   //body에 html 추가
```
