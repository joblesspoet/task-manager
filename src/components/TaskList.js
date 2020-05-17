import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    console.log('tasks loaded',tasks);
    return (
        <div>
            {
                tasks.length > 0 ? 
                <ul className="list">
                    {
                        tasks.map((item,index) => {
                            return <Task task={item} key={index} />
                        })
                    }
                </ul> : <div className='no-tasks'>No Tasks</div>
            }
            
            
        </div>
    )
}

export default TaskList
