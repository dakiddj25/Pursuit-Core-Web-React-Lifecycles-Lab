import React from "react"
import Todo from "./Todo"


class Form extends React.Component {
constructor(props){
    super(props)
    this.state = {name: [], submit: false}

}

handler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name)
}

todo = (e) =>{
    e.preventDefault();    
    this.setState({submit: true})
};

createList = (name) => {
let newTodo = this.state.name.map(todo => {
    if(todo === name)
})
}



    render(){
        let {name, submit } = this.state;
    return(
        <>
        <h1>Demo</h1>
        <form onSubmit= {this.todo} >
        <input type = "text" placeholder ="Enter Todo" name="name" value={name} onChange={this.handler}></input>

        </form>
        {submit ? <ul><Todo key = {name} name = {name}/> </ul> : null}
       
        </>
    )
    }

   
}

    export default Form;