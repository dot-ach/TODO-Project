import "./TodoCounter.css";

function TodoCounter({completed, total}){
  return(
    <h1>
      Has completado 
      <strong>
        {completed} 
      </strong>
      de 
      <strong>
        {total}
      </strong> TODOs.
    </h1>
  );
};

export {TodoCounter};