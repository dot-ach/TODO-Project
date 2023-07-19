import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
  const { setOpenModal } = React.useContext(TodoContext)
  return (
    <div className="Form-Container">
      <p className="Form-P">Crea un Nuevo TODO</p>
      <input
        placeholder="Escribe un nuevo Todo"
        className="Form-Input"
      />
      <div className="Buttons-Container_Form">
        <button className="Button-Add Button">Add</button>
        <button
          className="Button-Close Button"
          onClick={(event) => {
            console.log('click');
            setOpenModal(false);
          }}>Close</button>
      </div>
    </div>
  );
};

export { TodoForm }