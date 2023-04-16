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

```javaScript
    function getClock(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`) //벡틱 사용
    }

    getClock()  //페이지 로딩 되자마자 getclock 실행
    setInterval(getClock, 1000);
```
