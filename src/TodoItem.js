import "./TodoItem.css"
function TodoItem({ text, completed }) {
  // let icon = 'X';
  // if (completed){
  //   icon = "V";
  // }
  // console.log(completed) 
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check Icon-check--active">
        ✅
      </span>
      <p className={` ${completed ? `TodoItem-p`: `TodoItem-p--completed`}`}>
      {/* <p className={`TodoItem-p ${completed && `TodoItem-p--completed`}`}> */}
        {text}
      </p>
      <span className="Icon Icon-delete">
        x
      </span>
    </li>
  );
};

export { TodoItem };