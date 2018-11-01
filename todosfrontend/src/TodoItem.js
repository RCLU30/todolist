import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
  // let classStyle = completed ? "task done" : "task"
  <li className="task">
    <span
      className={ completed ? "done" : "" }
      onClick={onToggle}  
    >
      {name}
    </span>
    
    <span className='x' onClick={onDelete}> -delete task- </span>
  </li>
)

export default TodoItem;