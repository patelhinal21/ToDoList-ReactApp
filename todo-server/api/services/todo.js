import Todo from "../models/todo.js";
export const search = (params = {}) =>{
  const promise = Todo.find(params).exec();
  return promise;
}

export const get = () =>{
const promise = Todo.find().exec();
  return promise;
}
// Add Todo
export const create = (todo) => {
const newTodo = new Todo(todo);
return newTodo.save();
}
// Update Todo
export const update = (todo) => {
todo._id = todo.id;
const promise =  Todo.findByIdAndUpdate(todo.id, todo, {new: true}).exec();
return promise;

}
// Delete Todo
export const remove = (id) => {
const promise =  Todo.findOneAndRemove(id).exec();
return promise;

}
