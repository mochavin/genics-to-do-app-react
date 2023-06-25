import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button'
import Separator from './components/separator'
import InputTask from './components/inputTask'

function App() {
  const taskInit = (localStorage.getItem('tasks') ? localStorage.getItem('tasks').split(',') : []);
  const completedInit = (localStorage.getItem('completed') ? localStorage.getItem('completed').split(',') : []);
  const [tasks, setTasks] = useState(taskInit);
  const [done, setDone] = useState(completedInit);

  useEffect(() => {
    localStorage.setItem('tasks', tasks);
    localStorage.setItem('completed', done);
  }, [tasks, done]);

  function handleAddItem(e) {
    setTasks([...tasks, e]);
  }

  const handleDone = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
    setDone([...done, tasks[index]]);
  }

  const handleUnDone = (index) => {
    const updatedDone = done.filter((_, idx) => idx !== index);
    setDone(updatedDone);
    setTasks([...tasks, done[index]]);
  }

  const handleRemove = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const handleRemoveCompleted = (index) => {
    const updatedDone = done.filter((_, idx) => idx !== index);
    setDone(updatedDone);
  }


  return (
    <>
      <InputTask addTask={handleAddItem} />
      <div className='select-none w-full float-left pt-4'>
        <Separator>Todo</Separator>
        <ul className='float-left w-full'>
          {tasks.map((task, index) => {
            return <><li key={index} className=' bg-purple-100 font-[450] w-full flex justify-between pl-4 border-b-4 border-purple-200 hover:bg-purple-300 rounded-md transition duration-200 hover:py-1 '>{task}
              <div className='float-right'>
                <Button onClick={() => handleDone(index)}>Done</Button>
                <Button onClick={() => handleRemove(index)}>Remove</Button>
              </div>
            </li >
            </>
          })}
        </ul>
        <Separator>Completed</Separator>
        <ul className='float-left w-full'>
          {done.map((task, index) => {
            return <>
              <li key={index} className=' bg-purple-100 font-[450] w-full flex justify-between pl-4 border-b-4 border-purple-200 hover:bg-purple-300 rounded-md transition duration-200 hover:py-1 '>{task}
                <div className='float-right'>
                  <Button onClick={() => handleUnDone(index)}>Done</Button>
                  <Button onClick={() => handleRemoveCompleted(index)}>Remove</Button>
                </div>
              </li >
            </>
          })
        }
        </ul>
      </div>
    </>
  )
}

export default App
