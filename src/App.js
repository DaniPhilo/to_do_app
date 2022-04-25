import React, { useState } from 'react'
import ToDoList from './ToDoList';


function App() {
const [value, setValue] = useState('');
const [list, setList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {id: new Date().getTime().toString(), text: value};
        setList([...list, newItem]);
        setValue('');
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const deleteTask = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    return (
        <>
            <h1>To Do App</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="text">New Task: </label>
                <input type="text" name='text' id='text' value={value} onChange={onChange}/>
                <input type="submit" />
            </form>
            <section>
                <ToDoList list={list} deleteTask={deleteTask} />
            </section>
        </>
    )
}

export default App