const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; //array

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos array를 localStorage에 넣기
}

function deleteToDo(event) {
  const li = event.target.parentElement; //삭제할 button의 부모 li 찾기
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); //클릭되었는지 확인을 위해 eventListener 사용
  li.appendChild(span); //li 안에 span태그 넣기
  li.appendChild(button); //li 안에 button 추가
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; //input value에 빈 값을 넣어 enter치면 입력값 사라지게
  toDos.push(newTodo); //newTodo array에 push
  paintToDo(newTodo); //paintToDo 호출
  saveToDos(); //toDos array localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
}
