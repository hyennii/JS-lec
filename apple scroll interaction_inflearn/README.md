## [초보자도 만들 수 있는 애플 스크롤 인터렉션](https://www.inflearn.com/course/%EC%95%A0%ED%94%8C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B8%ED%84%B0%EB%A0%89%EC%85%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#curriculum)

### 스크롤 함수

```javaScript

    function getPercent(){
        var scrollHeight = $().height(); <!-- 스크롤 거리 -->
        var scrollRealHeight = (scrollHeight - $(window).height()); <!-- 스크롤 할 실제 거리 -->
        <!-- 실제 스크롤 할 거리 = 스크롤 거리 - 화면높이 -->
        var winScrollTop = $(window).scrollTop(); <!-- 스크롤 위치 -->
        var scrollPercent = (winScrollTop / scrollRealHeight) * 100; <!-- 백분율 구하기 -->
        var textPercent = Math.round(scrollPercent); <!-- 반올림 -->
    }

```

- Math.round(); : 반올림
- Math.floor(); : 내림
- Math.ceil(); : 올림

<br>

### calc속성
- ()안의 값을 계산해주는 css속성
- element를 %로 잡은 후 몇 px만큼 위치조정 할 때 유용 
ex) top:calc(100% - 10px);

<br>

### transform-origin 
- 시작되는 위치
ex) transform-origin:199px 163px;
                <-- x축     y축 -->

<br>

### animation key-frame

```git

    animation-name: key-frame이름
    animation-duration: <!-- 한번 재생 걸리는 시간 -->
    animation-delay: <!-- 애니메이션 지연 -->
    animation-direction: <!-- 애니메이션 재생방향 alternate:순방향, reserve:역방향 -->
    animation-iteration-count: <!-- 애니메이션 재생횟수 infinite:무한 -->
    animation-play-state: <!-- 애니메이션 재생여부 running:재생(기본값), paused:정지 -->
    animation-timing-function: <!-- 애니메이션 가속도 설정 linear, ease, ease-in, ease-out, custom 등 -->
    animation-fill-mode: both <!-- 애니메이션이 시작되기 전에 첫 번째 키프레임에서 설정한 스타일 값을 가져오고 애니메이션이 끝날 때 마지막 키프레임의 스타일 값을 유지 -->

```

<br>

### 이미지 scale 떨림현상 (IE11)
- IE11에서 사용시, 이미지 확대되면서 떨리는 현상 생김 -> scale과 rotate 요소 같이 적용하면 해결됨 ex) -webkit-transform:scale(1.2) rotate(-0.01deg); //0.01deg는 육안으로 회전하는 효과 구분 어려움

<br>

### offset()
- 제이쿼리메서드. element의 왼쪽, 위쪽 위치 가져올 때 사용함

<br>

### 스크롤 위로 올렸을 때 내려오는 animate가 바로 실행되어 안올라가고 스크롤이 다시 내려오는 문제
- 아래로 내려오는 animate가 실행되면 특정 엘리먼트에 클래스를 활용해 애니메이트가 실행됬는지 체크 -> 위로 올라가는 애니메이션 만들기

<br>

### stop()
- 애니메이션 관련 메서드 사용할 때 사용. 연속으로 호출될 경우 대기중인 애니메이션 생기게 되는데, 이를 제거하기 위해 사용.

<br>

### 스크롤의 위치가 패럴럭스 섹션에 도착했는지 체크
- parallaxThisTop 변수 선언 --> parallaxThisTop = winScrollTop - parallaxOffsetTop; 

```javaScript
function setProperty(){
    		parallaxThisTop = winScrollTop - parallaxOffsetTop; //패럴럭스가 시작될 위치값을 구함.
}
```

<br>

### Math.min, Math.max
- Math.min : 주어진 숫자들 중 가장 작은 값 반환
- Math.max : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자 반환

<br>

### 스크롤 시, 특정 엘리먼트 이동 
```javaScript
function motionParallax(){
    parallaxList.eq(0).css({
        transform:'translate(0px,' + parallaxMoveDistance + 'px)'
    });
}
```

<br>

### date
- date.getFullYear() : 년도 출력
- date.getMonth() : 월 출력. 0부터 출력하므로 1월부터 나오기 위해 + 1 추가
- date.getDate() : 일 출력

<br>

### string()
- 숫자를 문자열로 변환하는 함수
- .split과 자주 사용됨

<br>

### text-stroke (css)
- text 외곽선 표현 (webkit기반에서만 동작)

<br>

### 이미지 마스크효과 만들기
- 해당 이미지에 가상요소 after 올려두고 transition 사용

<br>

### 제이쿼리에서 foreach문 사용
- 1.배열사용 
```javaScript
// 예제1
$.each([0,8,4,10], function(index, value) { 
    console.log(index + ':값 = ' + value);
    }); 
    
//예제2
var arr = [0,8,4,10]; 

$.each(arr, function(index, value) {
    console.log(index + ':값 = ' + value);     
    });
```

- 2.맵 사용
```javaScript
var map = { 
    'name': 'hh',
    'age': '99'
}; 
$.each(map, function(key, value) {
    console.log(key + ': ' + value); 
}); 
// 결과
name: hh
aage: 99
```

<br>

### $.fn ?
- jQuery 메소드의 종류에는 크게 2가지가 있다.
- $ 네임스페이스의 메소드는 주로 utility 타입메소드로 정적메소드 처럼 쓰임
ex) $.each()
- $.fn 네임스페이스의 메소드는 selector와 함께 쓰이는 메소드임
ex)$().each()
- 확장 또는 플러그인 이라고 하는 것은 결국 selector와 함께 쓰일 수 있도록 $.fn 네임스페이스에 메소드를 추가하는 것이라고 볼 수 있음

<br>

### 익명함수 ?
- (https://velog.io/@blackb0x/%EC%9D%B5%EB%AA%85%ED%95%A8%EC%88%98Anonymous-function)
- https://dasima.xyz/javascript-anonymous-function/

<br>

### 브라우저 버그
1) animation paused -> 단독으로 사용
2) animation keyframes -> translateX를 margin-left로 바꿔 작성

<br>

### sticky
 - https://ux.stories.pe.kr/202
 - overflow:hidden; 속성은 sticky 적용된 요소에 사용 (sticky 적용요소의 부모요소에 사용x)

<br>

### function(e)
 - 이벤트를 함수에 감쌈. 이는 이벤트가 실행되어야 할 때만 실행시키기 위함임
 - https://intrepidgeeks.com/tutorial/problems-in-event-function-e

<br>

### 모더나이저
 - https://modernizr.com/
 - 사용자의 브라우저가 현재 가지고 있는 HTML5, CSS 기능들을 감지하고 지원여부를 판별하는 Javascript 라이브러리
 - 속성 체크 후 우측 view example
   1) css 내에서 no라는 접두사 붙었을 때 : 해당 속성 사용불가
   2) 접두사 없을 때 : 해당 속성 사용가능
   3) js에서도 true와 false로 사용 가능 여부 판단
 - 사용법 : 필요한 코드 체크 후 build -> copy
   1) 좌측 minify 미리 체크하여 코드 압축
   2) 압축한 코드 복붙
   3) 개발자도구에서 확인 시, html에도 해당 요소 들어가 있음 <- minify 아래의 add css classes 체크했기 때문
   4) no 접두사 붙은 css 코드 변경
   
<br>

### canvas 요소
 - width와 height 두 속성만 존재
 ```html
<canvas id="test" width="150" height="150"></canvas>
```
 - <canvas> 요소는 고정된 크기의 드로잉 영역을 생성하며, 그 영역은 보여질 컨텐츠를 생성하고 다루게될 두가지 이상의 렌더링 컨텍스트를 노출시킴(2D, 3D)
 - 참고 : https://cornswrold.tistory.com/112
 
<br>

### toFixed
 - Number 인스턴스의 소수 부분 자릿수를 전달받은 값으로 고정한 후, 그 값을 문자열로 반환
