import React, {createContext, useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(initialState);
    const [editItem, setEditItem] = useState(null);
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }, [tasks])

    const addTask = (title) => {
        setTasks([...tasks, { title, id: uuid() }])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearTasks = () => {
        setTasks([]);
    }

    const resetSelected = () => {
        setEditItem(null);
    }

    const editTask = (task) => {
        setEditItem(task);
    }

    const updateTask = (title, id) => {
        setTasks(tasks.map(task => 
            task.id === id ? {
                ...task,
                title: title
            }: task
        ));
        resetSelected();
    }

    return <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearTasks, editTask , editItem, updateTask, resetSelected }} >
        { props.children }
    </TaskListContext.Provider>
}

export default TaskListContextProvider;