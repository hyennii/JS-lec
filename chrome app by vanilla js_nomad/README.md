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
   
   ## let
   1) constant와 동일하지만, let은 업데이트 가능
   2) variable을 업데이트하기 위해 let 사용
   ```javascript
   let isAnnTall = false;
   
   isAnnTall = true;
   ```
   3) 항상 const를 사용하고 let은 가끔씩 사용하기
   4) var 사용금지 (const나 let과 함께 사용불가)
   
