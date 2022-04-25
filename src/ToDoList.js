import React from 'react'
import ToDo from './ToDo'

function ToDoList({list, deleteTask}) {
    return (
        <>
            {list.map(item => {
                const { id } = item;
                return (
                    <ToDo key={id} item={item} deleteTask={deleteTask} />
                )
            })}
        </>
    )
}

export default ToDoList