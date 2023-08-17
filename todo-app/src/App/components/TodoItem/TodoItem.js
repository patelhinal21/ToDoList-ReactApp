import React from 'react';
import './todoItem.scss';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   id : props.id
      
    // }
    // console.log(props.id);
  }
  // mark todo as complete 
  completeTodo(id, e) {
  let todo={
    completed: e.target.checked?"done":"none",
    date: this.props.todo.date,
    desc: this.props.todo.desc,
    time: this.props.todo.time,
    title: this.props.todo.title
  }
    this.props.completeTodo(id, e.target.checked, todo);
  }

  showDetails(id) {
    this.props.showDetails(id);
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      // code to display todo list
      <div className={`${this.props.todo.completed!=="none"?"todoCompletedWrapper":"todoWrapper"}`}>
        <input type="checkbox" className="chkbox" onChange={(e) => this.completeTodo(this.props.id, e)} />
        {this.props.todo.title}
        <button className="showInfo" onClick={(e) => this.showDetails(this.props.id)}>Show Details</button>
        <button className="showInfo" onClick={(e) => this.removeTodo(this.props.id)}>Delete</button>
      </div>
    );
  }
}

