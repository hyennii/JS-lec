## todo 생성

: li를 js로 만들어서 ul에 넣어주기

- handleToDoSubmit이 paintToDo 사용


```javaScript
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";   //input value에 빈 값을 넣어 enter치면 입력값 사라지게
    paintToDo(newTodo); //paintToDo한테 newTodo 보내기
}
```


```javaScript
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);   //li 안에 span태그 넣기
    span.innerText = newTodo;  //span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 됨
    toDoList.appendChild(li);
}
```

---------------------------------------------------------------------

## todo 삭제

: x 이모지 들어간 button js로 생성

1) append 하기 전에 button 생성

```javaScript
const button = document.createElement("button");
button.innerText = "❌";
```

2) li에 버튼 추가

```javaScript
li.appendChild(button);
```

3) 삭제버튼 활성화

   1) 버튼이 클릭되었는지 확인하기 위해 click eventListener 추가

      ```javaScript
        button.addEventListener("click", deleteToDo)
      ```

   2) todo 삭제할 function 생성
   
      - console.log(event.target) 으로 어떤 button이 클릭되는지 확인 필요

         ```javaScript
            function deleteToDo(event){
                console.log(event.target.parentElement);    //parentElement는 클릭된 element의 부모
            }    
         ```
         
       - 삭제하고 싶은 li 설정

         ```javaScript
            function deleteToDo(event){
                 const li = (event.target.parentElement);
                 li.remove();
            } 
         ```

---------------------------------------------------------------------

## todo 저장

: localStorage에 저장

    * localStorage에는 텍스트만 저장 가능

1) array 만들고, newTodo가 생길때마다 해당 텍스트를 array에 push

   ```javaScript
        const toDos = [];
   ```

2) newTodo 생성되기 전에 array(toDos)에 newTodo를 push

   ```javaScript
        toDos.push(newTodo); 
        paintToDo(newTodo);
   ```

3) localStorage 넣는 함수 추가 및 호출
   
   ```javaScript
    function saveToDos(){
        localStorage.setItem("todos", toDos)   //toDos array를 localStorage에 넣기
    }

   saveToDos();    //toDos array localStorage에 저장
   ```

*<h4> localStorage에 저장은 되지만 새로 고치면 화면에서 제거됨</h4>*
*<h4>이를 해결하려면?</h4>*

1) localStorage에 텍스트가 아닌 array로 저장하기 위해 JSON.stringify 사용
    - JSON.stringify : JS object나 array, 어떤 JS코드건 간에 string으로 바꿔줌

2) toDos를 stringify

```javaScript
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));  
}
```

        또는 JSON.parse 로 array를 string으로 바꿀 수 있음

```javaScript
JSON.parse("[1,2,3,4]")
```

3) localStorage에 있던걸 들고와서 이 string을 JSON.parse에 넣으면 실제로 무언가를 할 수 있는 배열을 얻음

```javaScript
    localStorage.getItem("todos")    //localStorage에 있는거 출력
    JSON.parse(localStorage.getitem("todos"))    //배열 출력
```

4) localStorage에 item 저장되어있는 갯수만큼 호출

```javaScript
const TODOS_KEY = "todos";

function sayHello(){
    console.log("this si the turn of", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of", item));    //arrow function(화살표 함수)
}

```

5) localStorage에 저장된 item 노출

```javaScript
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
}
```

*<h4> todo 목록을 추가하면 새 item이 localstorage에 있던 기존 item을 덮음(기존 todo 사라짐) </h4>*
*<h4>이를 해결하려면?</h4>*

1) 이유

```javaScript
    const toDos = [];
```
    : application이 시작될때 toDos array는 항상 비어있기 때문

2) 해결

    1. const -> let 변경하여 업데이트 가능하도록 설정

    2. localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo 들을 복원
       
    3. 결론적으로, array가 공백으로 비어있어도 이전의 toDo들을 복원하기 때문에 새 item이 생겨도 기존 item에 추가됨
  
```javaScript
let toDos = [];

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;  //이전에 있던 toDo 복원
  parsedToDos.forEach(paintToDo);
}
``` 

---------------------------------------------------------

*<h4> todo 목록을 삭제하고 새로고침하면 다시 생성되어있음 </h4>*
*<h4>이를 해결하려면?</h4>*

1) 이유
   : 화면에서는 지워졌지만 localStorage에서는 지우지 않았기 때문

2) 해결

   1. todo들에게 ID 부여 <- 어떤 item을 삭제할지 정확히 하기 위해

      1. todo들을 object로 변경하여 저장시키기
     
         ```javaScript
            const newTodoObj = { 
                text:newTodo,
                id:Date.now()    //밀리초를 주는 함수(랜덤한 id값을 얻기 위해 사용)
              }
             toDos.push(newTodoObj);    //toDos 배열에 newTodoObj 추가
             paintToDo(newTodoObj);    //paintToDo에 text 말고 object인 newTodoObj 호출
         ```

         * todo 목록에 [object Object] 출력되므로, paintToDo 변경필요
          : paintToDo는 이제 object 받음. object는 text와 id를 가지고 있으므로, span.innerText = newTodo.text 되어야함

    2. li.id = newTodo.id 추가
  
    3. 사용자가 x를 누른 버튼의 id 얻어야 함
       
    4. array에서 item을 지우는 법
  
       - array에서 뭔가를 삭제할때 실제로 array에서 그걸 지우는게 아니라, 삭제할 item을 제외하고 새로운 array 생성하는 것 -> filter 함수 사용하면 됨
       - <strong>filter 함수</strong>
         ```javaScript
            function oneFilter(){    
             }
         
             [1, 2, 3, 4].filter(oneFilter)    //filter는 onefilter에 1,2,3,4를 넣어서 부름
         
             onefilter(4);    //js가 onefilter를 4번 부르는 것(매번 숫자는 달라짐)
         ```
         - filter는 forEach와 비슷함
         - 새 array에서도 위 1,2,3,4를 포함하고 싶으면 onefilter는 반드시 true를 리턴해야 함(만약 false를 리턴하면 새 array에 포함되지 않음)
         - function oneFilter(){return true}, [1, 2, 3, 4, 5].filter(oneFilter) 하면 무조건 true 리턴
         - function oneFilter(){return false}, [1, 2, 3, 4, 5].filter(oneFilter) 하면 [] (비어있는 array)
         - 3번 지우기 : item이 3이 아니면 true 리턴. function oneFilter(item){return item !== 3}
         - 응용
            ```javaScript
                const arr = [1234, 5454, 223, 122, 45, 6775, 334]
                function twoFilter(num){return num <= 1000}    //1000보다 큰 수들은 지우기
                arr.filter(twoFilter)
            ```
        
    5. toDo의 id가 li의 id와 다른걸 남기기
       ```javaScript
            toDos = toDos.filter((toDo) => toDo.id !== li.id);    //클릭한 li.id와 다른 toDo는 남겨두기
       ```
       ```javaScript
            toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
       ```
       - toDo의 id는 number타입이고 li의 id는 string이기 때문에 parseInt를 이용해 문자열을 숫자로 변경해줌(둘 타입이 서로 달라 삭제되지 않음)
