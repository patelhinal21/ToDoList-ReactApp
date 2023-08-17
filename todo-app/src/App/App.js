import { debug } from 'debug';
import React, { Component } from 'react';
import './App.scss';
import TodoInput from './components/TodoInput/TodoInput';
import TodoItem from './components/TodoItem/TodoItem';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //initialising state
      todos: [
        { _id: 0, title: "buy milk", desc: "traders", date: "", time: "", completed: "none" },
        { _id: 1, title: "buy eggs ", desc: "wholefoods", date: "", time: "", completed: "none" },
        { _id: 2, title: "buy bread", desc: "CC", date: "", time: "", completed: "none" }
      ], 
      nextId: 3,
    };
    //binding task
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.clearData = this.clearData.bind(this);
  }
 // fetch all todos
  componentDidMount(){

    // const toJson = (response) => response.json();
    // const loadData = (config) => {
    //   fetch(config.todos_api_url).then(toJson)
    //   .then((todos) => this.setState({ todos}));
    // };
    fetch('http://localhost:3003/todos')

    .then(response => response.json())

    .then(data => {

      console.log(data);

      this.setState({

        todos : data,

        loading : false

      })

    });
  }


  // Add a todo
  addTodo(todoText) {
    console.log(todoText);
    //   debugger
    let todos = this.state.todos.slice();

    todos.push({
      // _id: this.state.nextId, 
      title: todoText.title, desc: todoText.desc, date: todoText.date,
      time: todoText.time, completed: "none"
    });
    console.log("todos here...", todos);
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    }, () => { console.log("callback of setstate", this.state.todos) });


    fetch('http://localhost:3003/todos', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          title: todoText.title, desc: todoText.desc,
          date: todoText.date, time: todoText.time, completed: todoText.completed
          
        })

    })
      .then((result) => result.json()).then((json) => console.log(json));
  }

  //write toggle code to view form
  addNewToDoItemBtn = () => {
    const view = document.getElementById('form')
    if (view.style.display == 'block') {
      view.style.display = 'none';
    }
    else {
      view.style.display = 'block';
    }
  }
  clearData() {
    this.setState({title: '', desc: '', date: '', time: ''});
    ReactDOM.findDOMNode(this.refs.todotitle).focus();
    ReactDOM.findDOMNode(this.refs.tododesc).focus();
    ReactDOM.findDOMNode(this.refs.tododate).focus();
    ReactDOM.findDOMNode(this.refs.todotime).focus();
  }
  
  // mark todo as complete
  completeTodo(id, e, todo) {
    if (e) {
      this.setState({
        todos: this.state.todos.filter((todo) =>
          todo._id == id ? todo.completed = "line-through" : todo.completed = "none")
      });
    }
    else {
      this.setState({
        todos: this.state.todos.filter((todo) =>
          todo._id == id ? todo.completed = "done" : todo.completed = "none")
      });
    }
    fetch(`http://localhost:3003/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(todo)
    })
      .then((result) => result.json()).then((json) => console.log(json));
  }
  // expand a todo
  showDetails(id) {

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i]._id == id) {
        window.alert(this.state.todos[i].desc+"\n"+this.state.todos[i].time+"\n"+this.state.todos[i].date);      }
    }
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
    //console.log("todos----"+this.state.todos);
    
    // 
    fetch(`http://localhost:3003/todos/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((result) => result.json()).then((json) => console.log(json));
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h1>TO-DO APP</h1>
          <TodoInput todoText="" addTodo={this.addTodo} addNewToDoItemBtn clearData/>
          <ul>
            {
              this.state.todos.map((todo,i) =>
                 <TodoItem todo={todo} key={i} id={todo._id}
                  completeTodo={this.completeTodo} showDetails={this.showDetails} removeTodo={this.removeTodo}
                />
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
