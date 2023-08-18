const quotes = [
  {
    quote: "쿼카는 귀엽다",
    author: "다이노탱",
  },
  {
    quote: "늦었다고 생각했을 땐 진짜 늦은거다",
    author: "나",
  },
  {
    quote: "재택 최고",
    author: "나",
  },
  {
    quote: "뽑기 하려고 돈 버는거다",
    author: "나",
  },
  {
    quote: "합리화 금지",
    author: "나",
  },
  {
    quote: "고생 끝에 별거 없다",
    author: "나",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //Array.length를 사용해 길이 반환

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
