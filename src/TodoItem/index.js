import { BiCheckbox } from 'react-icons/bi'
import { BiCheckboxSquare } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import React from "react";
import "./TodoItem.css"
function TodoItem({ text, completed, onComplete, onDelete }) {
  const icons = { 
    "check": <BiCheckbox color='#f8df00' size={'25px'}/>,
    "checked": <BiCheckboxSquare color='#a9f800' size={'27px'}/>,
    "delete": <AiFillDelete size={'28px'}/>,
  }
  return (
    <li className="TodoItem">
      <span
        className={`Icon ${completed ? `Icon-check--active` : `Icon-check`} `}
        onClick={onComplete}
      >
        {completed ? icons['checked'] : icons['check']}
      </span>
      <p className={` ${completed ? `TodoItem-p--completed` : `TodoItem-p`}`}>
        {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        {icons['delete']}
      </span>
    </li>
  );
};

export { TodoItem };