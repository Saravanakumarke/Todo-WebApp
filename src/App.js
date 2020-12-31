import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Complete from './components/Complete';
import Color from './components/Color';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/list.css'

function App() {
  return (
    <div className="todo-container">
    <div className="App m-5">
      <Color />
     <TodoInput />
     <TodoList />
     <Complete />
    </div>
    </div>
  );
}

export default App;
