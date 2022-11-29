import React from 'react'
// import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export default function CustomHookExample2() {
    const[task, setTask] = useLocalStorage('task', '')
    const[tasks, setTasks] = useLocalStorage('tasks', '')


    const onSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }
        
        setTasks([...tasks, taskObj])
    }
  return (
    <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
            <label htmlFor="" className='form-label'>Task</label>
            <input className='form-control' type="text" name="" value={task} onChange={(e) => setTask(e.target.value)}/>

        </div>
            <button type="" className='btn btn-primary'>Submit</button>

            <hr/>
            {tasks.map((task) => (
                <h3 key={task.date}>{task.task}</h3>
            ))
        } 
        
    </form>
    
  )
}
