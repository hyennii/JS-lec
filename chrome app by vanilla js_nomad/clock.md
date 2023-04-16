## clock

### setTimeout

```javaScript
    function sayHello(){
        console.log('hello');
    }
    setTimeout(sayHello, 5000);  //5초 뒤 노출
```

- 작성한 시간 후 노출
<br>

### 매초마다 새로운 date object 불러오기

```html
    <h2 id="clock">00:00:00</h2>
```

```javaScript
    const clock = document.querySelector("h2#clock");

    function getClock(){
        const date = new Date();
        clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`    //벡틱사용
    }

    getClock()  //페이지 로딩 되자마자 getClock 실행
    setInterval(getClock, 1000);
```
