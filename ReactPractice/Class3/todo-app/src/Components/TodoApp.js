import { useState } from "react";

const TodoApp = () => {
  //   const todos = [{ title: "Item 1", isCompleted: false },
  //                  { title: "Item 2", isCompleted: false },
  //                  { title: "Item 3", isCompleted: false },
  //                  { title: "Item 4", isCompleted: false },
  //                  { title: "Item 5", isCompleted:false}];
  //const todos = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  //using state variable
  const [todos, setTodos] = useState([
    // { title: "Item 1", isCompleted: true },
    // { title: "Item 2", isCompleted: false },
    // { title: "Item 3", isCompleted: true },
    // { title: "Item 4", isCompleted: false },
    // { title: "Item 5", isCompleted: true },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [newTodoStatus, setNewTodoStatus] = useState(false);
  const handleNewTodoChange = (e) => {
    // console.log(e.target.value)
    setNewTodo(e.target.value);
  };
  const handleTodoSubmit = (e) => {
    //Add new Toods to list
    //console.log(newTodo)
    e.preventDefault();
    setTodos([...todos, { title: newTodo, isCompleted: newTodoStatus }]);
    setNewTodo("");
    setNewTodoStatus(false);
  };

  const handleCompletion = (e) => {
    //console.log(e.target.dataset.value);
    //console.log(e.target.checked)
    //Replace a item in list by changing the isCompleted status
    const currentTodoIndex = Number(e.target.dataset.id);
    const updatedTodoStatus = e.target.checked;
    const newTodosList = [...todos];
    //Get todo at current index
    const newUpdatedTodo = { ...newTodosList[currentTodoIndex] };
    newUpdatedTodo.isCompleted = updatedTodoStatus;
    newTodosList.splice(currentTodoIndex, 1, newUpdatedTodo);
    setTodos(newTodosList);
  };
  const handleNewTodoStatus = (e) => {
    //console.log(e.target.value);
    setNewTodoStatus(e.target.value);
  };
  return (
    <div className="todo-wrapper">
      <h1>Todo App</h1>
      <div className="todo-form">
        <form>
          <input
            type="text"
            placeholder="Enter new todo...."
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <select onChange={handleNewTodoStatus} value={newTodoStatus}>
            <option value={false}>Todo</option>
            <option value={true}>Completed</option>
          </select>
          <button onClick={handleTodoSubmit}>Add</button>
        </form>
      </div>
      <div className="todo-list">
        {!todos.length ? "Please create your first todo" : null}
        {todos.map((todo, idex) => (
          <div className="todo-item">
            <input
              type="checkbox"
              data-id={idex}
              checked={todo.isCompleted}
              onChange={handleCompletion}
            />
            <span className={todo.isCompleted ? "completed" : ""}>
              {" "}
              {todo.title}{" "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoApp;
/*
If we have to perform any heavy calculatuions then we can use this 
{todos.forEach((todo) => {
                    <div className="todo-item">Item 1</div>
                })
                }
*/
