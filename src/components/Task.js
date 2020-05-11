import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';

const Task = (props) => {
    const {removeTask,editTask,editItem} = useContext(TaskListContext);
    console.log(editItem)
    return (
        <li className="list-item">
            <span>{props.task.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={() => removeTask(props.task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="btn-edit task-btn" onClick={() => editTask(props.task)} >
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task;
