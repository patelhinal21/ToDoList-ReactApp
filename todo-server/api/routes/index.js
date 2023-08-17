import todosRouter from './todo.js'

//returns app
export default (app) => {
      app.use('/', todosRouter);
  }