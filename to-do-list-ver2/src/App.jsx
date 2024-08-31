import AppName from './component/AppName';
import TodoItems from './component/TodoItems';
import AppTodo from "./component/AppTodo";
import './App.css';
import { useState } from 'react';

function App() {
  let initialTodoItems = [
    {
      name: "Do Homework",
      dueDate: "8/19/2024",
    },

  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) =>{
    console.log(`New item added ${itemName} date ${itemDueDate}`);
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  };

  return (<>
    <center className='todo-container'>
      <AppName/>
      <AppTodo onNewItem={handleNewItem}/>
      <TodoItems todoitem={todoItems}></TodoItems>
    </center>
    </>
  );
}

export default App;
