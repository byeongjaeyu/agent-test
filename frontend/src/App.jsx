import { useState } from 'react'
import './App.css'
import { TodoProvider, useTodos } from './context/TodoContext.jsx'

function TodoApp() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    addTodo(trimmed)
    setText('')
  }

  return (
    <div className="app">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </label>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  )
}

export default App
