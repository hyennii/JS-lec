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

1) array 만들고, newTodo가 생길때마다 해당 텍스트를 array에 push
