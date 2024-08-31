import TodoItem from "./TodoItem";

const TodoItems = ({todoitem}) => {
  return (<div className="item-container">
    {todoitem.map((item ) => 
      ( <TodoItem key={item} TodoName={item.name} TodoDate={item.dueDate}></TodoItem> ))}
    </div>);
}
export default TodoItems;