const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = (event.target.parentElement);    //삭제할 button의 부모 li 찾기
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)    //클릭되었는지 확인을 위해 eventListener 사용
    li.appendChild(span);   //li 안에 span태그 넣기
    li.appendChild(button);     //li 안에 button 추가
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";   //input value에 빈 값을 넣어 enter치면 입력값 사라지게
    paintToDo(newTodo); //paintToDo 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);
