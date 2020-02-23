import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const  TodoList = (props) =>{
        debugger
    return props.map(todo => {
      return (
        <li value={todo.name} key={todo.code}>
          {todo.name}
        </li>
      );
    });
    
  }
    export default TodoList;