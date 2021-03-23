function enter(input_new_todo_list) {
  if (event.keyCode === 13) {
    if (input_new_todo_list.value === '') {
      return;
    }

    const li = document.createElement('li');

    const button_destroy = document.createElement('button');
    button_destroy.setAttribute('class', 'destroy');
    button_destroy.onclick = function remove() {
      li.parentNode.removeChild(li);
    }

    const label = document.createElement('label');
    label.setAttribute('class', 'label');
    label.innerText = input_new_todo_list.value;

    const input_toggle = document.createElement('input');
    input_toggle.setAttribute('class', 'toggle');
    input_toggle.setAttribute('type', 'checkbox');
    input_toggle.onclick = function checked() {
      if (input_toggle.checked) {
        li.setAttribute('class', 'completed');
        return;
      }
      li.classList.remove('completed');
    }

    const input_edit = document.createElement('input');
    input_edit.setAttribute('class', 'edit');
    input_edit.setAttribute('value', input_new_todo_list.value);


    const div_view = document.createElement('div');
    div_view.setAttribute('class', 'view');

    div_view.appendChild(input_toggle);
    div_view.appendChild(label);
    div_view.appendChild(button_destroy);

    li.ondblclick = function edit() {
      li.setAttribute('class', 'editing');
    };

    li.appendChild(div_view);
    li.appendChild(input_edit);

    document.getElementById('todo-list').appendChild(li);

    document.getElementById('new-todo-title').value = null;
  }
}

function editEnter(input_edited_todo_list, li) {
  if (event.keyCode === 13) {
    alert('수정 엔터 키 입력');
    return;
  }
  if (event.keyCode === 27) {
    alert('수정 esc 키 입력');
  }
}