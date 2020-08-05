import React, {Component} from 'react';
import ToDoItem from "./components/ToDoItem.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      text: '',
      todos: [],
    };
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  changeisClickedState = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ''
    })
  }

  deleteitem = (index) => () => {
    console.log(index)
    let todoList = [...this.state.todos]
    todoList.splice(index, 1)
    this.setState({
      todos: todoList
    })
  }

  render () {
    return (
      <div className="App">
          <input value={this.state.text} onChange={this.onChange}/>
          <button onClick={this.changeisClickedState}>{`${this.state.isClicked}`}</button>
          <ul>
            {this.state.todos.map((todo, index) => {
              return <ToDoItem key={index} DeleteIt={this.deleteitem(index)} listValue={todo}/>
            })}
          </ul>

      </div>
    );
  }
}


export default App;
