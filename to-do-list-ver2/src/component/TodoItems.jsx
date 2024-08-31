import TodoItem from "./TodoItem";

const TodoItems = ({todoitem, onDelete}) => {
  return (<div className="item-container">
    {todoitem.map((item ) => 
      ( <TodoItem key={item.name} TodoName={item.name} TodoDate={item.dueDate} onDelete = {onDelete}></TodoItem> ))}
    </div>);
}
export default TodoItems;