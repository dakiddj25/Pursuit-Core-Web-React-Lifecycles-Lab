import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const  TodoList = (props) =>{
        
    return props.name.map((todo,i) => {
      // debugger
      return (
        <li value={todo} key={todo}  onClick={onRemoveItem}>
        <ToastContainer />
          {todo}
        </li>
      );
    });
    // onClick= {() => onRemoveItem(i)}
  }
  const onRemoveItem = (i) => {
    // debugger
    this.setState(state => {
      debugger
      const name = state.name.filter((value, j) => i !== j);
      debugger
      return {
        name,
      };
    });
  };

  
 
    export default TodoList;