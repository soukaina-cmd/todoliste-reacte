import React from 'react';
import './task.css' 
function Task(props) {
    const todo = props.todo;
    const id = props.id;
    const completeTask = props.completeTask;
  
    return (
      <div class="col-lg-9 offset-lg-2" id="list">
      <ul class="list-group" id="ul">
    <li class="list-group-item  ta" aria-current="true">
      {todo.text}
      <i class="fas fa-trash f" contenteditable=""  onClick={completeTask}></i>
    </li>
    </ul>
    </div>
    
    
    )
  
  }
  export default Task;