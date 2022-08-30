# Canvas API
 : JavaScript로 그래픽 그릴 수 있게 하는 API <br>
 
``````JavaScript
const context = canvas.getContext("2d"); //캔버스에 그림 그릴 때 context 사용
``````

``````JavaScript
//rect
ctx.fillRect(x축 좌표값, y축 좌표값, 가로길이, 세로길이); //사각형 채우기(함축함수)
ctx.rect(50, 50, 100, 200); //사각형
ctx.fill(); //색채우기
ctx.stroke(); //선 

ctx.beginPath(); //새 경로 

//moveTo
ctx.moveTo(x축 좌표값, y축 좌표값);
ctx.lineTo(x축 좌표값, y축 좌표값); //선을 그을 곳
``````

 1) 좌표 0,0은 캔버스 좌측 상단 코너(0,0이 모든 시작점)
 2) 새 경로를 주지 않으면 style 주었을 때 모두 같아짐 - beginPath();는 따로 지정될 도형 윗줄에 넣어줌
 3) 마지막 lineTo 좌표값이 현재의 위치이기에, 추가로 그릴 땐 직전 위치값을 기준으로 좌표값 입력

``````JavaScript
ctx.lineWidth = 2;
ctx.strokeRect(300,300,50,100);  // 해당 ctx 전에 미리 css 설정
``````

### 원그리기
 : ctx.arc(x축, y축, 반지름, startingangle, endingangle); <br>
 
 `````JavaScript
 ctx.arc(260, 80, 8, 0, 2 * Math.PI);
 `````
