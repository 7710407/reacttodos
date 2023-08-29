import React from 'react'

const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.isCompleted} onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked
          })
        }} />
        {todo.text}
        <button onClick={() => {
          onDelete(todo)
        }}>ok</button>
      </label>
    </div>
  )
}

export default TodoItem