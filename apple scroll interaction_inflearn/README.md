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

### calc속성
- ()안의 값을 계산해주는 css속성
- element를 %로 잡은 후 몇 px만큼 위치조정 할 때 유용 
ex) top:calc(100% - 10px);

### transform-origin 
- 시작되는 위치
ex) transform-origin:199px 163px;
                <-- x축     y축 -->

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

### 이미지 scale 떨림현상 (IE11)
- IE11에서 사용시, 이미지 확대되면서 떨리는 현상 생김 -> scale과 rotate 요소 같이 적용하면 해결됨 ex) -webkit-transform:scale(1.2) rotate(-0.01deg); //0.01deg는 육안으로 회전하는 효과 구분 어려움

### offset()
- 제이쿼리메서드. element의 왼쪽, 위쪽 위치 가져올 때 사용함

### 스크롤 위로 올렸을 때 내려오는 animate가 바로 실행되어 안올라가고 스크롤이 다시 내려오는 문제
- 아래로 내려오는 animate가 실행되면 특정 엘리먼트에 클래스를 활용해 애니메이트가 실행됬는지 체크 -> 위로 올라가는 애니메이션 만들기

### stop()
- 애니메이션 관련 메서드 사용할 때 사용. 연속으로 호출될 경우 대기중인 애니메이션 생기게 되는데, 이를 제거하기 위해 사용.

### 스크롤의 위치가 패럴럭스 섹션에 도착했는지 체크
- parallaxThisTop 변수 선언 -> parallaxThisTop = winScrollTop - parallaxOffsetTop; 

```javaScript
function setProperty(){
    		parallaxThisTop = winScrollTop - parallaxOffsetTop; //패럴럭스가 시작될 위치값을 구함.
}
```

### Math.min, Math.max
- Math.min : 주어진 숫자들 중 가장 작은 값 반환
- Math.max : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자 반환

### 스크롤 시, 특정 엘리먼트 이동 
```javaScript
function motionParallax(){
    parallaxList.eq(0).css({
        transform:'translate(0px,' + parallaxMoveDistance + 'px)'
    });
}
```