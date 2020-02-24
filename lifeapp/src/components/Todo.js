import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const  TodoList = (props) =>{
        
    return props.name.map(todo => {
      // debugger
      return (
        <li value={todo} key={todo}>
          {todo}
        </li>
      );
    });
    
  }
    export default TodoList;