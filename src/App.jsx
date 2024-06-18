import React, { useState } from 'react'
import './App.css'
function App() {

  const [todoText, setTodoText] = useState("")
  const [todos, setTodos] = useState([])


  const clickHandler = (e) => {
    e.preventDefault
    setTodos(todo => {
      return [
        ...todo, { id: crypto.randomUUID(), title: todoText }
      ]
    })
    setTodoText("")
  }

  console.log(todos)

  return (
    <div>

      <div className="upper">
        <h1>Set your Todo</h1>
        <div className="todosetholder">
          <input type="text"
            value={todoText}
            onChange={e => setTodoText(e.target.value)}
          />
          <button onClick={clickHandler}>click me</button>
        </div>
      </div>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={
                () =>{
                  setTodos(todos.filter((t) => t.id !== todo.id))
                }
              }>delete</button>
            </li>
          )
        })}
      </ul>


    </div>
  )
}

export default App