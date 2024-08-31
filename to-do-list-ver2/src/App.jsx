import AppName from './component/AppName';
import TodoItems from './component/TodoItems';
import AppTodo from "./component/AppTodo";
import WelcomeMsg from './component/WelcomeMsg';
import './App.css';
import { useState } from 'react';

function App() {
  

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) =>{
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  };

  const handleDelete = (itemName)=>{
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
  } 


  return (<>
    <center className='todo-container'>
      <AppName/>
      <AppTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoitem={todoItems} onDelete = {handleDelete}></TodoItems>
    </center>
    </>
  );
}

export default App;
