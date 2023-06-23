import React from "react";
import "./TodoItem.css"
function TodoItem({ text, completed, onComplete, onDelete}) {

  return (
    <li className="TodoItem">
      <span
        className="Icon Icon-check Icon-check--active"
        onClick={onComplete}
        >
        ✅
      </span>
      <p className={` ${completed ? `TodoItem-p--completed` : `TodoItem-p`}`}>
      {/* <p className={`TodoItem-p ${completed && `TodoItem-p--completed`}`}> */}
        {text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        x
      </span>
    </li>
  );
};

export { TodoItem };