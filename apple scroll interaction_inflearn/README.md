## [초보자도 만들 수 있는 애플 스크롤 인터렉션](https://www.inflearn.com/course/%EC%95%A0%ED%94%8C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B8%ED%84%B0%EB%A0%89%EC%85%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#curriculum)

### calc속성
- ()안의 값을 계산해주는 css속성
- element를 %로 잡은 후 몇 px만큼 위치조정 할 때 유용 
ex) top:calc(100% - 10px);

### transform-origin 
- 시작되는 위치
ex) transform-origin:199px 163px;
                <-- x축     y축 -->

### animation key-frame

```html
{
    animation-name: key-frame이름
    animation-duration: <!-- 한번 재생 걸리는 시간 -->
    animation-delay: <!-- 애니메이션 지연 -->
    animation-direction: <!-- 애니메이션 재생방향 alternate:순방향, reserve:역방향 -->
    animation-iteration-count: <!-- 애니메이션 재생횟수 infinite:무한 -->
    animation-play-state: <!-- 애니메이션 재생여부 running:재생(기본값), paused:정지 -->
    animation-timing-function: <!-- 애니메이션 가속도 설정 linear, ease, ease-in, ease-out, custom 등 -->
    animation-fill-mode: both <!-- 애니메이션이 시작되기 전에 첫 번째 키프레임에서 설정한 스타일 값을 가져오고 애니메이션이 끝날 때 마지막 키프레임의 스타일 값을 유지 -->
}