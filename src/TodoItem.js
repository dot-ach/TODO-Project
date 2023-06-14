function TodoItem({text, completed}){
  let icon = 'X';
  if (completed){
    icon = "V";
  }
  return(
    <li>
      {/* <span>V</span> */}
      <p>{text}</p>
      <span>{icon}</span>
    </li>
  );
};

export {TodoItem};