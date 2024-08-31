function TodoItem({TodoName, TodoDate, onDelete}){

  return (<div className="container">
    <div className="row todo-row">

      <div className="col-6"> {TodoName} </div>
      <div className="col-4"> {TodoDate} </div>

      <div className="col-2"><button type="button" className="btn btn-danger todo-btn" onClick={()=>onDelete(TodoName)}>Delete</button>
      </div>
    </div>
  </div>);
}

export default TodoItem;