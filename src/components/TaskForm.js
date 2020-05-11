import React,{useState,useContext, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext';
// import {uuid} from 'uuid';

const TaskForm = () => {

    const {addTask, clearTasks, editItem, updateTask,
        resetSelected} = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if(editItem !== null) {
            setTitle(editItem.title);
            console.log(editItem)
        } else {
            setTitle('');
        }
    },[editItem])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editItem !== null) {
            updateTask(title,editItem.id);
        } else {
            addTask(title);
        }
        setTitle('');
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    
    const handleClearTasks = () => {
        if(editItem !== null) {
            setTitle('');
            resetSelected();
        } else {
            clearTasks();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" className="task-input"
            onChange={handleChange}
            placeholder="Add Task...."
            value={title}
            required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                { editItem !== null ? 'Edit Task': 'Add Task' }
                </button>
                <button type="button" onClick={handleClearTasks} className="btn clear-btn">
                { editItem !== null ? 'Cancel Edit': 'Clear Task' }
                </button>
            </div>
        </form>
    )
}

export default TaskForm
