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

- append 하기 전에 button 생성

```javaScript
const button = document.createElement("button");
button.innerText = "❌";
```
