import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Form from "./components/Form"

class App extends React.Component {
  state = {todoList: "", submit: false}
  
  render() {
    let list = [];


  return (
    <div >
   Pursuit-Core-Web-React-Lifecycle-Methods-Lab
   <Form/>
    </div>
  );
}
}
export default App;
