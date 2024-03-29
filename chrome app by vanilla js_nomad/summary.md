## variables
 1) variable 이름에 공백사용x
 2) 띄어쓰기 필요할 땐 대문자 사용
 ```javascript
 const = myName
 ```
 
 ## null
  1) '아무것도 없음'을 의미함 (=값이 없고 비어 있음)
  2) false와 다름 (false는 'false'라는 값이 존재)
  3) 문자 아님
  ```javascript
  const amIWrong = null;  //amIWrong이라는 variable에 아무것도 없는 상태로 채움
  ```
  4) undefined와 다름
  
  ## undefined
   1) variable은 존재하나, 값은 없음(정의되지 않음)
   ```javascript
   let something;
   ```
   2) null과 다름
   
   ## array
   1) [   ] 기호 사용
   2) [   ] 안은 쉼표로 구분
   ```javascript
   const daysOfWeek = [mon, tue, wed, thu, fri, sat]
   ``` 
   
   3) array에서 찾고싶은 부분은 console 안에 [   ]와 원하는 숫자 입력
   ```javascript
   console.log(daysOfWeek[5]);
   ``` 
   
   4) push : 항목 하나를 array안에 추가함
   ```javascript
   daysOfWeek.push("sun");
   ```
   
   5) item 업데이트 가능
   ```javascript
   const toBuy = ["potato", "tomato", "pizza"];
   
   console.log(toBuy[2]);  //pizza 출력
   toBuy[2] = "water";  //기존 pizza 자리에 water로 업데이트
   console.log(toBuy[2]);  //water 출력
   ```
   
   6) push = array 끝에 item 하나 추가
   ```javascript
   toBuy.push("meat");
   console.log(toBuy);
   ```
   
  ## objects
   1) console은 object이며, 그 안의 어딘가에 log가 있다는 것
   ```javascript
   const player = {
        name: "hw",
        points: 10,
        small: true,
   };
   console.log(player);
   console.log(player.name); //플레이어 이름에 접근하는 첫번째 방법
   console.log(player["name"]); //플레이어 이름에 접근하는 두번째 방법
   ```
   ```javascript
   console.log(player);
   player.small = false; //constant 수정 불가 -> object 안의 무언가를 수정
   console.log(player); 
   ```
   2) constant를 수정하면 에러 발생 -> let 사용(하단에 따로 정리)
   ```javascript
   player = false; //에러 발생
   ```
   3) object 안의 무언가를 업데이트하는 것은 아무문제 없음 (object 안에 추가하는 것도 가능)
   
   ## Nan 
   - Not a number
   
   ## boolean
   1) true와 false
   2) 무한으로 작성할 수 있는 숫자나 문자와 다름
   
   ## string
   - 문자를 의미
    
   ## Functions
   ```javascript
    function plus(firstNumber, secondNumber){
         console.log(firstNumber + secondNumber);
    }
    plus(8, 60);
   ```
    
  1) 각 변수에 맞는 데이터 순서 중요
   ```javascript
    const player = {
         name:"hyewon",
         sayHello:function(otherPersonsName){
              console.log("hello " + otherPersonsName + " nice to meet you!");
         },
    };
    player.sayHello("nico"); //실행
   ```
   
  2) array처럼 업데이트 가능
   
   ```javascript
    const player = {
          name:"hyewon",
          age:27,
    };

    console.log(player.name);   //hyewon 출력

    console.log((player.name = "hyennii"));   //hyennii 출력
   ```
   
   3) function 밖에서 data 받는 방법
   
   ```javascript
   function plus(a, b){   //a와 b는 data를 받으면 대체되는 place holder
      console.log(a + b);   //a와 b는 function 밖에서는 정의되지 않음(에러 발생)
   }
   plus(5, 10);   //원하는 data 추출
   ```
   
   ## let
   1) constant와 동일하지만, let은 업데이트 가능
   2) variable을 업데이트하기 위해 let 사용
   ```javascript
   let isAnnTall = false;
   
   isAnnTall = true;
   ```
   3) 항상 const를 사용하고 let은 가끔씩 사용하기
   4) var 사용금지 (const나 let과 함께 사용불가)
   
   ## ()
   - 실행한다는 뜻
   
   ## return;
   - return 하는 순간 해당 function이 끝나기 때문에 <br>
      그 후에 적은 console 등 아무것도 작동 안함
      
   ## Console.dir()
   1)element를 console.log보다 자세하게 보여줌

   ```html
   <h1 id="title">Grab me!</h1>
   ```
   ```javaScript
   const title = document.getElementById("title");
   console.dir(title);  //h1#title <--- 콘솔에 나타남
   ```

## prompt 
: 사용자에게 문자를 보여주고 값을 넣으라고 함.
이때 로딩을 계속 주면서 js를 일시정지함 <br>
```javaScript
const age = prompt("How old are you?");
```
 1) js의 코드를 정지시키는 것이 prompt <br>
 2) 현재 사용하지 x (css 설정 등 불가하기 때문)
 
 ## typeof
 : value의 type을 볼 때 typeof 사용
 ```javaScript
 console.log(typeof age);
 ```
 - string > number로 type 변경 : parseInt()사용
 ```javaScript
 const age = parseInt(prompt("How old are you?"));
 console.log(age); //number가 아니면 NAN 출력
 ```

## isNaN
: NaN이냐고 묻는 뜻 (boolean을 반환함)
```javaScript
const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age)); //false가 나오면 age가 number가 아닌게 아니란 뜻(=age가 number라는 뜻)
```

## if문
```javaScript
if(isNaN(age)){
 console.log("Please write a number");
 
} else if(age < 18){
 console.log("You are too young.");  //condition 1 추가 (조건추가)
 
} else if(age >= 18 && age <= 50){  //둘 다 만족(and)
    console.log("You can drink");
    
} else if(age >= 18 || age <= 50){  //둘 중 하나 만족(or)
    console.log("You can drink");
    
} else{ //선택적 사항으로, 꼭 쓰지 않아도 됨
    console.log("You can't drink");
}
```
 1) else는 상위의 것들이 다 false 일때만 작동
 2) 위에서 아래 순으로 되므로, 중복 조건일 경우 상단의 조건이 적용됨

## javaScript로 특정 태그 가져오기
1) id
```javaScript
document.getElementById("title")  //id 뒤에는 string이 들어와야 함
 <h1 id="title">Grab me!</h1>
```
* autofocus = "h1" 태그 안에 넣어줌. (ex. <h1 autofocus)  
   -> javascript에서 autofocus:true로 출력됨
   
- element를 찾고 나면, 그 HTML에서 뭐든지 바꾸기 가능
    (ex. id와 className을 가져올 수도 있고, html의 클래스명이 js에 의해 브라우저에서 노출도 가능)
                                
2) class
```html
<div class="hello">
 <h1>Grab me!</h1>
</div>
```
 - hello라는 class 내부에 있는 h1을 가지고 올 수 있음을 의미
 
 ```javaScript
 const title = document.querySelector(".hello h1");   //css이기 때문에 .입력
 console.log(title);    //<h1>Grab me!</h1> 출력
 ```
  - 만약 완전히 동일한 hello > h1 이 여러개 있다면 가장 첫번째 1개만 출력됨.
  - 여러개 전부 출력하려면 querySelectorAll(".hello h1"); 입력    //h1이 들어있는 array 출력

## h1의 style을 js에서 변경하기

```javascript
const title = document.querySelector(".hello:first-child h1");
console.dir(title); //element의 내부 볼 때는 log대신 dir 사용
title.style.color = "blue"; //h1의 style을 js에서 변경
```

## event를 listen 하는 방법
```javaScript
function handleTitleClick() {
    console.log("title was clicked!");
}
title.addEventListener("click",handleTitleClick); //click event를 listen하고, 이 click event가 발생하면 handleTitleClick이라는 function이 동작하도록 함
```
```javaScript
title.addEventListener("click",handleTitleClick); 
```
과
```javaScript
title.onclick = handleTitleClick; //onmouseenter 동일
```
은 같은 결과 도출
