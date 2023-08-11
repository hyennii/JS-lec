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
    const lng = position.coords.longitude;  //경도
    console.log(position)
}
function onGeoError(){
    alert('못찾음');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
- position.coords 는 고정값
