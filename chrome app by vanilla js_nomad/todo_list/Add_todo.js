const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);   //li 안에 span태그 넣기
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";   //input value에 빈 값을 넣어 enter치면 입력값 사라지게
    paintToDo(newTodo); //paintToDo 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);
