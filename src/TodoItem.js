import "./TodoItem.css"
function TodoItem({text, completed}){
  // let icon = 'X';
  // if (completed){
  //   icon = "V";
  // }
  return(
    <li>
      <span>✅</span>
      <p>{text}</p>
      <span>x</span>
    </li>
  );
};

export {TodoItem};