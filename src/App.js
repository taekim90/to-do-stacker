import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import Schedule from './Schedule';

function App({ toDoList }) {
  const [toDo, setToDo] = useState({
    toDoList: []
  })

  const clearToDo = () => {
    setToDo({ toDoList: [] })
  }

  const addToDo = (toDoItem) => {
    console.log('adding to To Do List')
    let newToDoList = toDo.toDoList
    newToDoList.unshift(toDoItem)
    setToDo({ toDoList: newToDoList })
  } 

  return (
    <>
      <h1>To Do List</h1>
      <main>
        <ToDoList toDo={toDoList} addToDo={addToDo}/>
        <Schedule toDoList={toDo.toDoList} clearToDo={clearToDo}/>
      </main>
    </>
  );
}

export default App;
