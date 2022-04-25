import React from 'react'

function ToDo({item, deleteTask}) {
    const { id, text } = item;
    return (
        <div>
            <h3>{text}</h3>
            <button type='button' onClick={() => deleteTask(id)}>Delete</button>
        </div>
    )
}

export default ToDo