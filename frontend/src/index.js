import React from 'react';
import { render } from 'react-dom';

import { TodoContextProvider } from './todo/todo-context';
import Todo from './todo/todo-dom';

import './style.css';

fetch("http://127.0.0.1:8000/api/todo/?format=json")
  .then(res => res.json())
  .then(
    (todos) => {
      const App = () => {
        return (
          <TodoContextProvider initState={todos}>
            <Todo />
          </TodoContextProvider>
        )
      };
      render(<App />, document.getElementById('root'));
    }
  )
