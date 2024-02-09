# ToDoList React App

## Aim
To build a to-do list app using React and JavaScript.

## Description
- Display a list of to-do tasks fetched from a JSON file using XHR call
- Fetch additional task details from JSON file on button click via XHR 
- Mark a task as completed by strike through/color change
- Display input form to add new task on button click  
- Validate input data
- Add new task to list on "Add" button click
- Use SCSS for styling compiled to CSS 

## Functionality
- Fetch and display to-do tasks from `db.json`
- Get task details from `db.json` on click of `i` button 
- Strike through task text on click of task to mark as complete
- Show/hide task input form on `+` button click 
- Validate input fields before adding new task
- Add new task to list on click of `Add` button

## Installation
```
npm install -g node-sass   

sass --watch styles/main.scss dist/main.css

npx sass styles/main.scss dist/main.css
```

## Usage
- Open `index.html` in a live server
- Interact with the various buttons to fetch data, add tasks etc.
