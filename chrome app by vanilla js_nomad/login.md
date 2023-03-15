## 로그인 form 만들기

1) html

```html
<div id="login-form">
    <input type="text" placeholder="What's your name?"/>
    <button>Log In</button>
  </div>
```

2) js
  * ex)1

```javaScript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
  const value = loginInput.value;
  if(value === ""){
    alert("Please write your name");    //값이 비어져있을 때 출력
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
```

  * ex)2

```javaScript
function onLoginBtnClick(){
  const username = loginInput.value;
  if(value === ""){
    alert("Please write your name");
  } else if(username.length > 15){    //값이 15글자 넘을 때 출력
    alert("Your name is too long");
  }
}
```

 하지만 html 내에서 자체적으로 maxlength 를 이용할 수도 있음
```html
    <form id="login-form">      //form 으로 사용해야함
      <input
        required
        maxlength="15"
        type="text"
        placeholder="What's your name?"
      />
      <button>Log In</button>
    </form>
```

### 다른페이지 랜딩 막기

1. html
```html
<a href="https://nomadcoders.co">Go to courses</a>
```

2. js
```javaScript
const link = document.querySelector("a");   //링크 찾기

function handleLinkClick(event) {
  event.preventDefault();   //랜딩 막힘
  console.log(event);   //클릭한 위치값 x,y 출력
}

link.addEventListener("click", handleLinkClick);
```
- event.preventDefault() : (a태그로 인해 랜딩되는) 기본 동작을 막음(= event 멈춤)

### form 숨기고 h1 노출

1. css
```css
.hidden {
  display: none;
}
```

2. html
```html
<form id="login-form">
  <input type="text" placeholder="What's your name?" />
  <button>Log In</button>
</form>
<h1 id="greeting" class="hidden"></h1>
```

3. js
* ex)1
```javaScript
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");      //hidden class명 추가
}
```

* ex)2
```javaScript
const greeting = document.querySelector("#greeting");   //greeting 찾기
const HIDDEN_CLASSNAME = "hidden";      //일반적으로 string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = "Hello" + username; //h1 안에 greeting에 있는 텍스트 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); //hidden class 제거
}

loginForm.addEventListener("submit", onLoginSubmit);
```

