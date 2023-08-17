import Mongoose from "mongoose";

// Setting Todo database schema
const TodoSchema = new Mongoose.Schema({

    "title":{
        type: String,
    },
    "desc":{
        type: String,
    },
    "date":{
        type: Date,
    },
    "time":{
        hours: {
            type: Number 
          },
          minutes: { 
            type: Number
          } 
    },
    "completed":{
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now
    }
   
},
{
    versionKey: false
}
);

TodoSchema.set('toJSON', {virtuals : true});

const Todo = Mongoose.model('Todo', TodoSchema);

export default Todo;