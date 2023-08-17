import React from 'react';
import './todoInput.scss';
import ReactDOM from 'react-dom';


export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      //props used to pass data and event handlers to its child components 
      title: this.props.todoTitle,
      desc: this.props.todoDesc,
      date: this.props.todoDate,
      time: this.props.todoTime,

    };
    //handling the value
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.clearData = this.clearData.bind(this);
  }
  //used to change the value of state object (shallow merge on new and previous state)
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescChange(e) {
    this.setState({ desc: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }
  handleTimeChange(e) {
    this.setState({ time: e.target.value });
  }

  addTodo() {
    // add a new todo 
    let todo = {
      title: this.state.title,
      desc: this.state.desc,
      date: this.state.date,
      time: this.state.time,
      completed: "none"
    }
    // validations
    if (this.state.title != '' && this.state.desc != '' && this.state.date != '' && this.state.time != '') {
      this.props.addTodo(todo);
      this.setState({ title: '', desc: '', date: '', time: '' });
    }
    else {
      window.alert("Enter the details!");
    }

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
  render() {

    return (

      //add html code
      <div>
        <div>
          <button className="btn button-primary" onClick={() => this.addNewToDoItemBtn()}>Add New To-Do Item</button>
        </div>
        <br/>

        <div id="form" > <ul >
          <li> <label className="title">Title</label>
            <input placeholder="Add Task Title" id="newTitleNode" onChange={this.handleTitleChange} ref = "todotitle"/> </li>
          <br />
          <li> <label className="desc">Description</label>

            <input placeholder="Enter Description" id="newDescNode" onChange={this.handleDescChange} ref = "tododesc"/> </li>
          <br />
          <li> <label className="duedate">Due Date</label>

            <input placeholder="Enter DueDate" type="date" id="newDuedateNode" onChange={this.handleDateChange} ref = "tododate"/></li>
          <br />
          <li>  <label className="time">Time</label>

            <input placeholder="Enter Time" type="time"
              id="newTimeNode" onChange={this.handleTimeChange} ref = "todotime"/></li>
          <br />
          <button className="btn button-primary" onClick={() => this.addTodo()}>Add</button>
          <br />
          <button className="btn button-primary" onClick={() =>this.clearData()}>Clear</button>
        </ul></div>

      </div>





    );
  }
}
