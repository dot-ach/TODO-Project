import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
import React from "react";

function TodoCounter(){

  const {
    completedTodos,
    totalTodos,
    loading} = React.useContext(TodoContext);
  
  if(loading){
    return(
      <h1  className="TodoCounter">
        <span>Cargando...</span>
      </h1>
    );
  }else if(completedTodos === totalTodos){
    
    return(
      <h1  className="TodoCounter">
        <span>Felicidades!!</span>. Haz completado todos tus <span>TODOs</span>
      </h1>
    );
  }else{
    return(
      <h1 className="TodoCounter">
        Has completado 
        <span>
          {completedTodos} 
        </span>
        de 
        <span>
          {totalTodos}
        </span> TODOs.
      </h1>
    );
  }
};

export {TodoCounter};