import React from 'react'
import Todo from './Todo'
import { useState } from 'react'

export default function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      {showTodo && <Todo/>}
      <button type="" className='btn btn-primary' onClick={() => setShowTodo(!showTodo)}>Toggle ToDo</button>
    </div>
  )
}
