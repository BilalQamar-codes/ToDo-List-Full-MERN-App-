import React, { useState } from 'react';
import './todo.css';

function TodoApp() {
  const [complete, setComplete] = useState(0);
  const [uncomplete, setUncomplete] = useState(0);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    if (task.trim() === '') return; // Prevent adding empty tasks
    setTasks([{ text: task, completed: false }, ...tasks]);
    setTask('');
    setUncomplete(uncomplete + 1);
  }

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        const updatedTask = { ...task, completed: !task.completed };
        if (updatedTask.completed) {
          setComplete(complete + 1);
          setUncomplete(uncomplete - 1);
        } else {
          setComplete(complete - 1);
          setUncomplete(uncomplete + 1);
        }
        return updatedTask;
      }
      return task;
    });
    setTasks(newTasks);
  };

  function deleteTask(index) {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    const taskToDelete = tasks[index];
    if (taskToDelete.completed) {
      setComplete(complete - 1);
    } else {
      setUncomplete(uncomplete - 1);
    }
    setTasks(newTasks);
  }

  return (
    <div className="myapp">
      <h1>To Do List</h1>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Enter your task"
          className="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add" onClick={handleClick}>
          Add
        </button>
      </div>
      <h2>Task list</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span>{item.text}</span> 
            <input type="button" value="Edit" onClick={() => alert('Edit feature not implemented')} />
            <input type="button" value="Delete" onClick={() => deleteTask(index)} />
          </li>
        ))}
      </ul>
      <hr />
      <div className="status">
        Completed: {complete} | Uncompleted: {uncomplete}
      </div>
    </div>
  );
}

export default TodoApp;
