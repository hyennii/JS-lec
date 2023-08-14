## navigator, geolocation

브라우저에서 위치 좌표 얻기

```javaScript
navigator.geolocation.getCurrentPosition(성공함수, 실패함수)
```
- 2개의 argument 필요 (잘 됐을때 실행될 함수&에러 발생했을때 실행될 함수)

<br>
<h4>1. getCurrentPosition</h4>

```javaScript
function onGeoOk(position){
    const lat = position.coords.latitude;  //위도
    const lon = position.coords.longitude;  //경도
    console.log("You live in", lat, lon);
}
function onGeoError(){
    alert('못찾음');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
- position.coords 는 고정값

----------------------------

## API 계정

openweathermap.org/api 사이트 접속 - 로그인 - api 중 current weather data - API call 에 있는 url에 좌표를 보낼 수 있음(콘솔로 위도/경도 확인 후 대입, api key는 내 프로필 - my api keys 복붙)

<br>

<h4>JS에서 URL 부르는 방법</h4>

1. url 변수 만들고 백틱으로 감싸기
2. 실제 수치로 대입한 영역 다시 변수로 변경

```javaScript
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`    //API_KEY, lon, lat 은 반드시 값이 있어야 함
console.log(url);    //url 출력
```

*<h4>만약 화씨 온도로 출력되어, 단위 변경이 필요할때는?</h4>*

- API weather map 문서에 따르면 unit을 URL에 같이 보낼 수 있음.
- url 파라미터로 &units=metric 붙이면 섭씨로 변경되어 출력

<br>

<h4>fetch로 url 불러오기</h4>

```javaScript
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url);
```

network 새로고침하면 js가 fetch를 사용하여 url로 요청한 것 볼 수 있음
