## variables
 - variable 이름에 공백사용x
 - 띄어쓰기 필요할 땐 대문자 사용
 ```javascript
 const = myName
 ```
 
 ## null
  - '아무것도 없음'을 의미함 (=값이 없고 비어 있음)
  - false와 다름 (false는 'false'라는 값이 존재)
  - 문자 아님
  ```javascript
  const amIWrong = null;  //amIWrong이라는 variable에 아무것도 없는 상태로 채움
  ```
  
  ## undefined
   - variable은 존재하나, 값은 없음(정의되지 않음)
   ```javascript
   let something;
   ```
   
   ## array
   - [   ] 기호 사용
   - [   ] 안은 쉼표로 구분
   ```javascript
   const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]
   ```
   - array에서 찾고싶은 부분은 console 안에 [   ]와 원하는 숫자 입력
   ```javascript
   console.log(daysOfWeek[5]);
   ```
