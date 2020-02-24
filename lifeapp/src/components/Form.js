import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from "./Todo"


class Form extends React.Component {
constructor(props){
    super(props)
    this.state = {value: "", name: [], submit: false}

}

handler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // debugger
    // console.log(this.state.name)
}

todo = (e) =>{
    e.preventDefault();    
    this.setState({submit: true})
    this.onAddItem();
    this.notify(this.state.value)
    // debugger
};

onAddItem = () => {
    
    this.setState(state => {
      const name = state.name.concat(state.value);
    //   debugger
      return {
        name,
        value: '',
      };
    });
  };

   notify = (todo) => toast(todo+"!!");




    render(){
        let {value,name, submit } = this.state;
    return(
        <>
        <h1>Demo</h1>
        <form onSubmit= {this.todo} >
        <input type = "text" placeholder ="Enter Todo" name="value" value={value} onChange={this.handler}></input>

        </form>
        {submit ? <ul><Todo key = {name} name = {name}/> </ul> : null}
       
        </>
    )
    }

   
}

    export default Form;