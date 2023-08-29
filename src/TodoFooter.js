import React from 'react'

const TodoFooter = ({ todos, onClearCompleted }) => {
    const completedSize = todos.filter((todo) => todo.isCompleted).length
    return (
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear completed</button>
        </div>
    )
}

export default TodoFooter