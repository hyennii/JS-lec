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
