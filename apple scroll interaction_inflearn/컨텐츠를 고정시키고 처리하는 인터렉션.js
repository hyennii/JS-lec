var el = document.querySelector('.canvas_wrap'); //캔버스를 담을 요소
var canvas = document.createElement('canvas'); //캔버스 생성
var ctx = canvas.getContext('2d'); //렌더링 컨텍스트 타입 2d로 선언
var imgSrc = '../images/seq/';
var imgFormat = '.jpg';
var imgLength = 116; //총 이미지 갯수
var pcImgSize = [1920,1080];
var mobileImgSize = [640,360];
var imgWidth;
var imgHeight;
var imgArray = [];
var imageIterlator = 0; //이미지가 로드되었는지 체크하는 값

function scrollFunc() {

    var sequence = Math.min(imgLength, Math.max(0, Number((imgLength * scrollPerecnt).toFixed(0))));

    renderCanvas(sequence); //캔버스를 그리는 함수
    contentIn(); //중간 나타나는 컨텐츠(글자) 처리하는 함수
};

function renderCanvas(sequence) { //캔버스에 이미지를 그리는 함수

    ctx.clearRect(0, 0, imgWidth, imgHeight); //지정한 x,y위치값과 넓이,높이값을 넣어 캔버스를 클리어해줌
    ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight); //이미지 배열에 담아둔 이미지를 캔버스에 그림

};

function init() {

    el.appendChild(canvas); //canvas_wrap 엘리먼트에 js에서 생성해준 캔버스 담아줌

    for(var i = 0; i <= imgLength; i++){ //총 이미지의 갯수가 i보다 같거나 작으면 반복(116까지 반복)

        var img = new Image();
        var path = imgSrc+i+imgFormat; //이미지의 경로

            img.src = path;

            img.onload = function() {
                imageIterlator += 1; //이미지 로드 카운트를 카운트
                if(imageIterlator === imgLength) { //이미지가 로드된 횟수와 이미지 랭스(116)가 같아질 경우 인터렉션 함수들 호출

                    setProperty();
                    setCanvas();
                    bindEvent();
                    scrollFunc();
                }
            }

            imgArray.push(img); //이미지 배열에 이미지를 담음
    }
}
