import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  console.log(allTodos, "allTodos");
  function handleChange(event) {
    setTodo(event.target.value);
  }
  function handleSubmit() {
    setAllTodos([...allTodos, todo]);
    setTodo("");
  }
  function deleteTodo(index) {
    const taskcopy = [...allTodos];
    taskcopy.splice(index, 1);
    setAllTodos(taskcopy);
  }
  return (
    <div>
      <h1>Todo</h1>
      <input style={{
        padding: "10px",
        width: "250px"
      }} value={todo} onChange={handleChange} placeholder="Enter Your Todos"/>
      <br />
      <button style={{
        backgroundColor: "blue", 
        color: "white", 
        border: "none", 
        padding: "8px", 
        borderRadius: "4px", 
        marginTop: "10px"
        }} onClick={handleSubmit}>Submit Todo.</button>
      <h1> <u>All Todos List</u></h1>

      {allTodos.map((todo, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            width: "40%",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          <p>
            {" "}
            {i + 1}. {todo}
          </p>
          <button style={{
            backgroundColor: "red",
            width: "85px",
            height: "30px",
            color: "white", 
            fontSize: "16px",
            border: "none", 
            padding: "8px", 
            borderRadius: "4px", 
            marginTop: "10px"
          }} onClick={() => deleteTodo(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;