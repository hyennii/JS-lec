## setup

### form js로 가져오기

```html
<form id="todo-form">
    <input type="text" placeholder="write a To Do and Press Enter" required>
</form>
<ul id="todo-list"></ul>
```

```javaScript
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";   //input value 비우기
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```
