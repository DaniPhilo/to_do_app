import React, { useState } from 'react'
import ToDoList from './ToDoList';
// let data = require('./data.json');
import data from './data.json'

function App() {
const [value, setValue] = useState('');
const [list, setList] = useState(data);

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

    const clearTasks = () => {
        setList(list.slice(0, 4));
    }

    return (
        <>
            <h1>To Do App</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="text">New Task: </label>
                <input type="text" name='text' id='text' value={value} onChange={onChange}/>
                <input type="submit" value='Add'/>
            </form>
            <section>
                <ToDoList list={list} deleteTask={deleteTask} />
            </section>
            <button type='button' onClick={clearTasks}>Clear All Tasks</button>
        </>
    )
}

export default App