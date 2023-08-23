import React, { useEffect, useState } from 'react';
import "./todolist.css"


const Todo = () => {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  
  
  return (
    <div className="container">
      <div className='box'>
      <h1 className="title" >TODO List</h1>
      <div className='input-container'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="  Enter your task"
        />
        <button className='add-btn' onClick={addTask}>ADD  </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className='del-btn' onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Todo;

            