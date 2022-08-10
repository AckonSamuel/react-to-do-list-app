import React, { Component } from "react"

class InputTodo extends Component {

  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.title);
  }

  render() {
    return (
      <form>
        <input 
        type="text" 
        placeholder="Add Todo..." 
        value={this.state.title}
        onChange={this.onChange}
        name="title"
        onSubmit={this.handleSubmit}
        />
        <button>Submit</button>
        </form>
    )
  }
}
export default InputTodo