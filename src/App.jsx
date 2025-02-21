import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
    const[tasks, setTasks] = useState([]);
    const[textValue, setTextValue] = useState("");
    const[completedTasks, setCompletedTasks] = useState([]);

    const addTask = () => {
        if (textValue.trim() !== "") {
            setTasks([...tasks, textValue]);
            setTextValue("")
        }
    }

    const handleTextChange = (e) =>{
        setTextValue(e.target.value)
    }

    const completeTask = (index) =>{
        const taskToComplete = tasks[index];
        setTasks(tasks.filter((_, i) => i !== index));
        setCompletedTasks([...completedTasks, taskToComplete]);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

  return(
    <div className="app-container">
    <div>
        To do list
    </div>

    <div className="writeTask">
        <input 
        type="text" 
        placeholder="enter task"
        value={textValue}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        />
        <button id="clikToAdd" onClick={addTask} >Add Task</button>
    </div>

    <div className="tasks">
        {tasks.map((task, index) => (
            <div key={index}>
                <button id="clikToRmv" onClick={() => completeTask(index)}></button>
                {task}
            </div>
        ))}
    </div>

    <div className="completed">
        <h3>completed tasks</h3>
        {completedTasks.map((task, index) => (
            <div key={index}>
                {task}
            </div>
        ))}
    </div>
    </div>
  ) 
}
