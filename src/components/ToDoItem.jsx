import React from 'react';

const ToDoItem = (props) => {
  return (
  <div>
    <li>{props.listValue}</li>
    <button onClick={props.DeleteIt}>X</button>
  </div>
  )
}

export default ToDoItem;
