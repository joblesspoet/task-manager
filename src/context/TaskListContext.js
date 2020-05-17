import React, {createContext, useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'
import DB from '../helpers/db';

export const TaskListContext = createContext();
const db = new DB('tasks');



const TaskListContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);
    const [editItem, setEditItem] = useState(null);
   
    // console.log(tasks);
    useEffect(() => {    
        async function fetchData() {
            let tasksArray = await db.getAllDocuments();
            try {
                setTasks(tasksArray)
            } catch(error) {
                console.log('Error....',error)
            }

        }
        fetchData();
      }, [])

      useEffect(() => {
        console.log('when tasks',tasks);
      },[tasks])

    const addTask = async (title) => {
        const data = { title, id: uuid(), _id: uuid()};
        const item = await db.addUpdateDocument(data);
        console.log(item);
        data.rev = item.rev;
        setTasks([...tasks, data]);
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
        { children }
    </TaskListContext.Provider>
}

export default TaskListContextProvider;