import * as todoService from '../services/todo.js';
 // named export

 // Function for setting failure
 const setFailureResponse = (message, response) =>{
    response.status(500);
    response.json({error: message});
 }
 // Function for setting success
 const setSuccessResponse = (data, response) =>{
   response.status(200);
   response.json(data);
 }
 export const index = async (request, response) => {
   try
   {
    const todos =  await todoService.search();
    console.log(todos);
    setSuccessResponse(todos, response);

   }catch(e){
      // set failure msg
      setFailureResponse( e.message, response);
   }
   
 };
// Add Todos
export const save = async (request, response) =>{
  try{
     const todo = {...request.body};
     const newTodo = await todoService.create(todo);
     setSuccessResponse(newTodo, response);
  }catch(e){
    setFailureResponse(e.message, response);
  }
}
 
// Fetch Todos
 export const get = async (request, response) => {
    try{
      const todo = await todoService.get();
      setSuccessResponse(todo, response);
    }catch(e){
      setFailureResponse(e.message, response);
    }
 }
 // Update Todos
export const update = async (request, response) => {
  try{
    const id = request.params.id;
    const todo = {...request.body, id};
    const updatedTodo =  await todoService.update(todo);
    setSuccessResponse(updatedTodo, response);
  }catch(e){
    setFailureResponse(e.message, response);
  }
}

 // Remove Todos
 export const remove = async (request, response) => {
  try{
    const id = request.params.id;
    const todo =  await todoService.remove(id);
    setSuccessResponse({message: `Todo ${id} removed successfully.`}, response);
  }catch(e){
    setFailureResponse(e.message, response);
  }
}