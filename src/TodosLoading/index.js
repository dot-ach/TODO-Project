import "./TodosLoading.css" 
import { FaCircle } from 'react-icons/fa'

function TodosLoading(){
  return(
    <div className="Points-Container">
      <p className="point point-1"><FaCircle/></p>
      <p className="point point-2"><FaCircle/></p>
      <p className="point point-3"><FaCircle/></p>
    </div>
  );
};

export {TodosLoading}