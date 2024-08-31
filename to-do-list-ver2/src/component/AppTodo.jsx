import { useState } from "react";

function AppTodo({onNewItem}){
  
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const onNameChange = (event)=>{
    setTodoName(event.target.value);
  };
  const onDateChange = (event)=>{
    setDueDate(event.target.value);
  };

  const handleButtonClicked = ()=>{
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");

  };

  return (<div className="container item-container">
    <div className="row todo-row">
      <div className="col-6"><input type="text" onChange={onNameChange} value={todoName} placeholder="Enter to do here"/></div>
      <div className="col-4"><input type="date"  onChange={onDateChange} value={dueDate}/></div>
      <div className="col-2"><button type="button" onClick={handleButtonClicked} className="btn btn-success todo-btn">Add</button>
      </div>
    </div>
  </div>);
}

export default AppTodo;