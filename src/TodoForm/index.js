import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
  const { 
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext)
  return (
    <form className="Form-Container">
      <label className="Form-P">Crea un Nuevo TODO</label>
      <textarea
        placeholder="Escribe un nuevo Todo"
        className="Form-Input"
      />
      <div className="Buttons-Container_Form">
        <button 
        className="Button-Add Button"
        type="button"
        onClick={(event) => {
          // console.log(event.target.form[0].value);
          const newTodoText = event.target.form[0].value;
          addTodo(newTodoText);
          setOpenModal(false)
        }}
        >Add</button>
        <button
          className="Button-Close Button"
          onClick={(event) => {
            console.log('click');
            setOpenModal(false);
          }}>Close</button>
      </div>
    </form>
  );
};

export { TodoForm }