import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    // console.log(tasks);
    return (
        <div>
            {
                tasks.length ? 
                <ul className="list">
                    {
                        tasks.map((item) => {
                            return <Task task={item} key={item.id} />
                        })
                    }
                </ul> : <div className='no-tasks'>No Tasks</div>
            }
            
            
        </div>
    )
}

export default TaskList
