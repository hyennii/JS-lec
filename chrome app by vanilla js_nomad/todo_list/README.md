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
