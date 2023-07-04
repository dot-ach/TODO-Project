import "./TodoCounter.css";

function TodoCounter({completed, total}){
  if(completed === total){
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
          {completed} 
        </span>
        de 
        <span>
          {total}
        </span> TODOs.
      </h1>
    );
  }
};

export {TodoCounter};