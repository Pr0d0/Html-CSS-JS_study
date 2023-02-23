// 오늘 날짜로 바꾸기
document.querySelector(".date").innerText = new Date().toLocaleDateString();

let reloadCount = () => {
  // 미완료 개수 업데이트
  let todo = document.querySelectorAll(".todo-item:not(.done)"); //선택자 다 가져옴
  document.querySelector(".count").innerText = todo.length;
};
reloadCount(); // 첫 화면 로딩 시 바로 개수 업데이트를 위해서 함수 실행

const delTodo = (el) => {
  // 투두 삭제 후 개수 업데이트 필요
  el.parentElement.remove();
  reloadCount();
};
const todoDone = (el) => {
  // 투두 완료 후 개수 업데이트 필요
  el.parentElement.classList.toggle("done"); //
  reloadCount();
};

const addTodo = () => {
  // 투두 추가 후 개수 업데이트 필요, 텍스트박스가 빈칸이면 알림 띄우기
  let text = document.getElementById("textbox").value;
  if (text == "") {
    alert("빈 칸입니다.");
  } else {
    let todoContent = document.querySelector(".todo-content");
    todoContent.innerHTML += `<div class="todo-item"><input type="checkbox" onclick="todoDone(this)" />
     ${text} <input type="button" onclick="delTodo(this)" value="❌" />`;
  }

  /*
  let todo = document.createElement('div);
  todo.classList.add('todo-item');

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('onclick', 'todoDone(this)');

  let button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('onclick', 'delTodo(this)');
  button.setAttribute('value', 'x');

  todo.append(checkbox, text, button);

  let todoContent = document.querySelector('.todo-content');
  todoContent.append(todo);

  reloadCount();
  */
  reloadCount();
};
