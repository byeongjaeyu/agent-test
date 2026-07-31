import { createContext, useContext, useReducer } from 'react'

const TodoContext = createContext(null)

let nextId = 1

function todoReducer(todos, action) {
  switch (action.type) {
    case 'add':
      return [...todos, { id: nextId++, text: action.text, done: false }]
    case 'toggle':
      return todos.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t,
      )
    case 'remove':
      return todos.filter((t) => t.id !== action.id)
    default:
      return todos
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, [])

  const value = {
    todos,
    addTodo: (text) => dispatch({ type: 'add', text }),
    toggleTodo: (id) => dispatch({ type: 'toggle', id }),
    removeTodo: (id) => dispatch({ type: 'remove', id }),
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodos() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider')
  }
  return context
}
